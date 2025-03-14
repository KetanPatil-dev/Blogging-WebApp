import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";



const RecentPost = () => {
  const [post,setPost]=useState([])
  
    const navigate=useNavigate()
    
    const handleNavigate=(id)=>{
        navigate(`/post/${id}`)
    }
    const getPost=async()=>{
      try {
        const res= await axios.get("http://localhost:7989/blog/getposts")
        const data=await res.data
        setPost(data.posts)
        
      } catch (error) {
        console.log("ERROR",error)
      }

    }
     useEffect(()=>{
     getPost()
     },[])

  return (
    <>
      <div className="container">
        <div className="mb-5 text-center">
          <h2 className="fw-bold fs-1 text-white">Recent Posts</h2>
       
        <div className="row">
          {  post?.map((post,index)=>{
            return (<div key={index+1} className="col-md-4 col-lg-4 col-xs-12 mb-4">
              <div
                className="card border-success "
                style={{
                  borderWidth: "2px",
                  backgroundColor: "#2b2b2b",
                  borderRadius: "10px",
                }}
              >
                <img
                  src={`http://localhost:7989/images/${post.image}`}
                  alt="recent"
                  style={{height:"250px",width:"auto"}}
                />
                
                <div className="card-body bg-dark text-white">
                  <h5 className="card-title">{post.title}</h5>
                  <p className="card-text">{post.desc}</p>
                  <button onClick={()=>handleNavigate(post._id)} className="btn btn-primary w-100 mt-3">
                    Read Article
                  </button>
                </div>
              </div>
            </div> )
          })}
        </div>
      </div>
      </div>
    </>
  );
};

export default RecentPost;
