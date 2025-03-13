import React from 'react'
import { RiDeleteBinLine } from "react-icons/ri";

const Users = () => {
  const users=[{id:1,name:"Ketan Patil",email:"mail.ketan027@gmail.com"},
    {id:2,name:"Lars Solomon",email:"lars@gmail.com"},
    {id:3,name:"Prince",email:"Princey@gmail.com"}
  ]
  function handleDeleteUser()
  {
    alert("user deleted successfully")
  }
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

        <td scope='row'>{user.id}</td>
        <td scope='row'>{user.name}</td>
        <td scope='row'>{user.email}</td>
       <td> <button onClick={handleDeleteUser} className="btn btn-danger" > <RiDeleteBinLine/></button></td>
        </tr>
        
       ))}
        
      </tbody>
    </table>
    </div> 
  </div>
  )
}

export default Users