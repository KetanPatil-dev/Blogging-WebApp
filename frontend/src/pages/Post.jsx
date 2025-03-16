import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

const Post = () => {
  const [post, setPost] = useState({});
  const [comment, setComment] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  // Fetch Post Data
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await axios.get(
          `http://localhost:7989/public/singlepost/${id}`
        );
        setPost(res.data.post);
      } catch (error) {
        console.error("Error fetching post:", error);
      }
    };
    fetchPost();
  }, [id]);

  // Add Comment
  const addComment = async (e) => {
    e.preventDefault();
    try {
      const userId = localStorage.getItem("userId");
      const postId = localStorage.getItem("postId");

      if (!postId) toast.error("You are not a valid user");
      if (!userId) {
        toast.error("Please log in to comment.");
        
       
      }

      const res = await axios.post(
        "http://localhost:7989/comments/addcomment",
        { comment, userId, postId },
        { withCredentials: true }
      );
      

      toast.success("Comment added!");
      setPost((prev) => ({
        ...prev,
        comments: [...prev.comments, res.data.newComment], // Assuming response contains new comment
      }));
      setComment(""); // Clear input after posting
      console.log("Navigating to:", `/post/${id}`);
      navigate(`/post/${id}`);
      navigate(0);
      
    } catch (error) {
      console.error("Error adding comment:", error);
      toast.error("Failed to add comment.", { position: "top-right" });
    }
  };

  return (
    <div className="container text-white mt-5 mb-5">
      <div className="row">
        <div className="col-md-12">
          <h1 className="fw-bold text-white mb-4 display-4">{post?.title}</h1>
          <img
            src={`http://localhost:7989/images/${post.image}`}
            alt="Post"
            className="img-fluid mb-4"
            style={{
              borderRadius: "10px",
              objectFit: "cover",
              width: "100%",
            }}
          />
          <p className="mb-5">{post.desc}</p>

          <hr />
          <h3 className="mt-5 mb-5">Leave a Comment</h3>
          <form onSubmit={addComment}>
            <div className="mb-3">
              <label htmlFor="comment" className="form-label">
                Comment
              </label>
              <textarea
                className="form-control"
                id="comment"
                rows="4"
                placeholder="Tell us your thoughts"
                onChange={(e) => setComment(e.target.value)}
                value={comment}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>

          <hr />
          <h3 className="mt-5 mb-4">Comments</h3>
          {post.comments?.map((comment, index) => (
            <div key={index} className="bg-secondary p-3 rounded mb-3 d-flex">
              <img
                src="https://img.freepik.com/free-vector/young-man-black-shirt_1308-173618.jpg?semt=ais_hybrid"
                alt="User"
                className="rounded-circle me-3"
                style={{ width: "50px", height: "50px", objectFit: "cover" }}
              />
              <div>
                <h5 className="mb-1">
                  {comment?.userId?.FullName || "Anonymous"}
                </h5>
                <p className="mb-0">{comment.comment}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Post;
