import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const NavBar = () => {
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();

  // Check if user is logged in from localStorage
  useEffect(() => {
    const token = localStorage.getItem("token");
    if(token!==null )
    setIsLogin(true);
  });

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove token
    setIsLogin(false);
    navigate("/login");
  };

  return (
    <nav className="navbar d-flex justify-content-between align-items-center p-3 bg-dark">
      <Link to="/" className="text-white text-decoration-none">
        <h1 className="mx-5 text-white fs-2 fw-bold">Ketan's Blog</h1>
      </Link>
      <div className="d-flex align-items-center">
        {!isLogin ? (
          <Link to="/login">
            <button className="btn btn-primary mx-3">Sign In</button>
          </Link>
        ) : (
          <div className="dropdown">
            <div
              className="avatar-container pointer rounded-circle overflow-hidden bg-info"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{ width: "45px", height: "40px", cursor: "pointer" }}
            >
              <img
                src="https://wallpapersok.com/images/high/oscar-zahn-skeleton-headphones-unique-cool-pfp-rboah21ctf7m37o0.webp"
                alt="ProfileImage"
                className="img-fluid h-100 w-100"
                style={{ objectFit: "cover" }}
              />
            </div>
            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-dark">
              <li>
                <Link className="dropdown-item" to="/dashboard">Dashboard</Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/profile/989898">Profile</Link>
              </li>
              <li>
                <button className="dropdown-item" onClick={handleLogout}>
                  Sign Out
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
