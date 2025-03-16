import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import "../index.css"

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
 }  );
 const navigate=useNavigate()
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const res = await axios.post("http://localhost:7989/auth/login",data,{withCredentials:true});
      const data2=res.data
      localStorage.setItem("token",data2.token)
      {data2.message!==undefined?toast.success(data2.message,{position:"top-right"}):toast.error("Invalid Username or Password",{position:"top-right"})}
      navigate("/")
    } catch (error) {
      console.log("ERROR", error);
    }
  };
  return (
    <>
      <section className="bg-light">
        <div className="container d-flex flex-column align-items-center justify-content-center min-vh-100 py-4">
          <a
            href="#"
            className="mb-4 text-dark text-decoration-none d-flex align-items-center"
          >
            <img
              className="me-2"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
              alt="logo"
              width="32"
              height="32"
            />
            <Link to={"/"}>
              {" "}
              <span className="h4 mb-0 fw-bold">Ketan's Blog</span>
            </Link>
          </a>
          <div className="card shadow-sm w-100" style={{ maxWidth: "400px" }}>
            <div className="card-body p-4">
              <h1 className="h5 mb-4 fw-bold text-dark">
                Sign in to your account
              </h1>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={data.email}
                    onChange={handleChange}
                    className="form-control"
                    id="email"
                    placeholder="name@company.com"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    value={data.password}
                    name="password"
                    onChange={handleChange}
                    className="form-control"
                    id="password"
                    placeholder="••••••••"
                    required
                  />
                </div>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  {/* Optional content can be added here */}
                </div>
                <button type="submit" className="btn btn-primary w-100">
                  Sign in
                </button>
              </form>
              <p className="mt-3 mb-0 text-muted">
                Don’t have an account yet?{" "}
                <Link to="/register" className="text-primary">
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
