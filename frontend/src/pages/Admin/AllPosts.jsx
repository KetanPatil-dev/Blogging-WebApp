import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'

const AllPosts = () => {
  const[userData,setUserData]=useState([]);

  const getAllData=async()=>{
    const res=await axios.get("http://localhost:7989/dashboard",{withCredentials:true})
    const data2=res.data.posts
    setUserData(data2)
    console.log(userData)
  }
  useEffect(()=>{
    getAllData()
  },[])
  return (
    <>
    <div className='container'>
      <h1 className='text-white mb-4 text-center'>ALL POSTS</h1>
      <div className='row'>
       {userData?.map((user,index)=>{
        return(
          <div key={index+1} className='col-md-4 col-lg-4 col-12 mb-4'>
          <div  style={{
                borderRadius: "10px",
                maxHeight: "auto",
                objectFit: "cover",
                width: "100%",
              }}className='card h-auto '>
            <img style={{maxHeight:"350px"}} src={`http://localhost:7989/images/${user.image}`} alt="postimage"/>
            <div className='card-body'>
              <h4 className='card-title'>{user.title}</h4>
              <p className='card-text'>{user.desc} </p>
            </div>
            <div className='card-footer d-flex justify-content-between'>
              <button className='btn btn-danger'>Delete <FaTrash/></button>
              <button className='btn btn-warning'>Update <FaEdit/> </button>
            </div>
            </div>
          </div>
          
        )
       })}
      </div>
    </div>
    </>
  )
}

export default AllPosts