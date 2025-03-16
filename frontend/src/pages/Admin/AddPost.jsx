import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddPost = () => {
  const [title,setTitle]=useState("")
  const [desc,setDesc]=useState("")
  const [image,setImage]=useState(null);
  const navigate=useNavigate()

  const handleSubmit=async(e)=>{
    e.preventDefault()
    try {
      const formData=new FormData();
      if(image)
      {
        formData.append("postimage",image)
      }
      formData.append("title",title)
      formData.append("desc",desc)

      const res= await axios.post("http://localhost:7989/blog/create",formData,{withCredentials:true})
      const data2=(res.data)
      if(data2.message!==null)
      {
        toast.success(data2.message,{position:"top-right"})
        navigate("/")
      }
      
    } catch (error) {
      console.log("ERROR",error.res?error.res.data:error)
    }
  }
  return (
    <div className="container mt-8">
      <div className="row justify-content-center">
        <div className="col-md-8 ">
          <div className="card shadow-lg">
            <div className="card-header bg-warning text-white">
              <div className="text-center mb-8 text-dark fs-2">
                Add New Post
              </div>
              <div className="card-body p-4">
                <form onSubmit={handleSubmit} method="post" encType="multipart/form-data">
                  <div className="mb-4">
                    <label htmlFor="postImage" className="form-label">
                      Upload Image :
                    </label>
                    <input type="file" className="form-control" id="image" onChange={(e)=>setImage(e.target.files[0])}/>
                  </div>
                  <div className="mb-4">
                    <label htmlFor="postTitle" className="form-label">
                      Title :
                    </label>
                    <br />
                    <input
                      type="text"
                      className="form control"
                      row="1"
                      value={title}
                      id="postTitle"
                      placeholder="Enter Your Title"
                      onChange={(e)=>setTitle(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="postDescription" className="form-label">
                      Description :
                    </label>
                    <textarea
                      type="text"
                      value={desc}
                      id="postDescription"
                      placeholder="Write your post description here"
                      rows="6"
                      onChange={(e)=>setDesc(e.target.value)}
                      className="form-control"
                    ></textarea>
                  </div>
                  <div className="d-grid">
                    <button  className="btn btn-success btn-md">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPost;
