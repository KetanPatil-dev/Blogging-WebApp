import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Post = () => {
  const [posts,setPosts]=useState([])
  const [comment,setComments]=useState()
  const {id}=useParams()

  // const getComments=async()=>{
  //   try {
  //     const res= await axios.post("http://localhost:7989/comments/addcomment",{withCrediantials:true})
  //     console.log(res.comment)
      
  //   } catch (error) {
  //     console.log("ERROR",error)
  //   }
  // }
  
  
  useEffect(()=>{
    const SinglePost=async()=>{
      const res=await axios.get(`http://localhost:7989/public/singlepost/${id}`)
      const data2= await res.data;
      
      setPosts(data2.post)
      
    }
    SinglePost()
   
  },[])

  
  
  return (
    <>
      <div className="container text-white mt-5 mb-5">
        <div className="row">
          <div className="col-md-12">
            <h1 className="fw-bold text-white mb-4 display-4">{posts?.title}</h1>
            <img
              src={`http://localhost:7989/images/${posts.image}`}
              alt="img"
              className="img-fluid mb-4"
              style={{
                borderRadius: "10px",
                maxHeight: "auto",
                objectFit: "cover",
                width: "100%",
              }}
            />
            <p className="mb-5">
              {posts.desc}
            </p>
           
            <hr />
            <h3 className="mt-5 mb-5">Leave a Comment</h3>
            <form >
              <div className="mb-3">
                <label htmlFor="comment" className="form-label">
                  Comment
                </label>
                <textarea
                  className="form-control"
                  id="comment"
                  rows="4"
                   placeholder="Tell us your thoughts"
                   onChange={(e)=>setComments(e.target.value)}
                   value={comment}
                  required="true"
                ></textarea>
              </div>
              <button  type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
            <hr />
            <h3 className="mt-5 mb-4">Comments</h3>
            {posts.comments?.map((comment,index)=>{
              return (
                <div key={index+1} className="bg-secondary p-3 rounded mb-3 d-flex">
              <img
                src="https://img.freepik.com/free-vector/young-man-black-shirt_1308-173618.jpg?semt=ais_hybrid"
                alt="image"
                className="rounded-circle me-3"
                style={{ width: "50px", height: "50px", objectFit: "cover" }}
              />
              <div>
                <h5 className="mb-1">{comment?.userId?.FullName}</h5>
                <p className="mb-0">{comment.comment}</p>
              </div>
            </div>
              )
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
