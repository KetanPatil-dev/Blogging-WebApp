import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
const Register=()=>{
    const [info,setInfo]=useState({
        FullName:"",
        email:"",
        password:""
    })
    const navigate=useNavigate()

    const handleChange=(e)=>{
        setInfo({...info,[e.target.name]:e.target.value})
            }
    const handleSumbit=async(e)=>{
        try {
            e.preventDefault()
           const res= await axios.post("http://localhost:7989/auth/register",info,{withCredentials:true})
           const data2=res.data
           {data2.message!==undefined?toast.success(data2.message):toast.error("Invalid Fields or User Already Exists")}
           navigate("/login")
        } catch (error) {
            console.log("ERROR",error)
        }
    }
    
    
 
    return <>
    <section className="bg-light">
        <div className="container d-flex flex-column align-items-center justify-content-center min-vh-100 py-4">
          <a href="#" className="mb-4 text-dark text-decoration-none d-flex align-items-center">
            <img className="me-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" width="32" height="32" />
            <Link to={'/'}> <span className="h4 mb-0 fw-bold">Ketan's Blog</span></Link> 
          </a>
          <div className="card shadow-sm w-100" style={{ maxWidth: '400px' }}>
            <div className="card-body p-4">
              <h1 className="h5  fw-bold text-dark text-center">Create an account</h1>
              <form onSubmit={handleSumbit} >
                <div className=" text-center">
                  <label htmlFor="image" className="form-label">Profile Picture</label>
                  <div className="d-flex justify-content-center ">
                    <img 
                      src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL_16PTrRq2Ukbp_RJRajOsUdrdDjieKiBzA&s"
                      alt="avatar" 
                      className="rounded-circle" 
                      width="100" 
                      height="100"
                     
                      style={{ cursor: 'pointer' }}
                     // Click event to trigger file input
                    />
                  </div>
                  <input 
                    type="file" 
                    className="form-control d-none" // Hide the file input
                    id="image" 
                    accept="image/*" 
                    
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="FullName" className="form-label">Full Name</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    value={info.FullName}
                    name="FullName"
                    id="FullName" 
                    placeholder="John Doe" 
                    onChange={handleChange}
                    required 
                    
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input 
                    type="email" 
                    className="form-control" 
                    id="email" 
                    value={info.email}
                    name="email"
                    onChange={handleChange}
                    placeholder="name@company.com" 
                    required 
                    
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input 
                    type="password" 
                    className="form-control" 
                    id="password" 
                    value={info.password}
                    name="password"
                    onChange={handleChange}
                    placeholder="••••••••" 
                    required 
                    
                  />
                </div>
                <button type="submit" className="btn btn-primary w-100">Sign up</button>
              </form>
              <p className="mt-3 mb-0 text-muted">
                Already have an account? <Link to="/login" className="text-primary">Sign in</Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
}
export default Register;