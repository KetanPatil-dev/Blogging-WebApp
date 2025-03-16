import PostModel from "../models/Blog.js";
import CommentModel from "../models/comments.js";

export const AddComment = async (req, res) => {
    try {
        const { postId, userId, comment } = req.body;

        

        // Check if the post exists first
        const postExists = await PostModel.findById(postId);
        if (!postExists) {
            return res.status(404).json({ success: false, message: "Post not found" });
        }

        // Create new comment
        const newComment = await CommentModel.create({
            postId,
            userId,
            comment,
        });

        // Push the comment to the post's comments array
        postExists.comments.push(newComment._id);
        await postExists.save();

        return res.status(201).json({
            success: true,
            message: "Comment Added Successfully",
            comment: newComment, // Send the full comment object
        });

    } catch (error) {
        console.error("Error adding comment:", error);
        return res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};
