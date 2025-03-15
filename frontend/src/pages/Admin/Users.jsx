import React, { useEffect, useState } from 'react'
import { RiDeleteBinLine } from "react-icons/ri";
import axios from 'axios';
import toast from 'react-hot-toast';

const Users = () => {
  const [users,setUsers]=useState([])
  
 
  const GetUsers=async()=>{
    const res=await axios.get("http://localhost:7989/dashboard/users",{

      withCredentials:true
    })
    const data2= res.data
    const allusers=(data2.user)
    setUsers(allusers)
    
  }
  const deleteUser=async(userId)=>{
    const res=await axios.delete(`http://localhost:7989/dashboard/delete/${userId}`,{withCredentials:true})
    setUsers((res)=>res.filter((user)=>user._id!==userId))
    toast.success(res.data.message,{position:"top-right"})
  }
  useEffect(()=>{
    GetUsers()
  },[])
  return (
  <div>
   <h1 className='text-white fs-2'>Users</h1>
   <div className='table-responsive'>
    <table className='table table-striped table dark'>
      <thead>
        <tr>

          <th scope='col'>Sr no</th>
          <th scope='col'>Name</th>
          <th scope='col'>Email</th>
          <th scope='col'>Action</th>
        </tr>
        
      </thead>
      <tbody>
        
       {users.map((user,index)=>(
        <tr key={index+1}>

        <td scope='row'>{index+1}</td>
        <td scope='row'>{user.FullName}</td>
        <td scope='row'>{user.email}</td>
       <td> <button onClick={()=>deleteUser(user._id)}  className="btn btn-danger" > <RiDeleteBinLine/></button></td>
        </tr>
        
       ))}
        
      </tbody>
    </table>
    </div> 
  </div>
  )
}

export default Users