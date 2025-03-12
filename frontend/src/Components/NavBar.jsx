import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    const [isLogin,setIsLogin]=useState(false);

  return (
    <nav
      className="navbar d-flex justify-content-between
  align-items-center p-3"
    >
      <Link>
        <h1 className="mx-5 text-white fs-2 fw-bold">Ketan's Blog</h1>
      </Link>
      <div className="d-flex align-items-center">
        {!isLogin?  <Link to="/login">
          <button className="btn_sign mx-3">Sign In</button>
        </Link>:(<div className="dropdown">
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
            <li><Link className="dropdown-item" to="/dashboard">DashBoard</Link></li>
            <li><Link className="dropdown-item " to="/profile/989898">Profile</Link></li>
            <li><Link className="dropdown-item" style={{cursor:"pointer"}}>Sign Out</Link></li>
           
          </ul>
        </div>)}
      
      </div>
      
      
    </nav>
  );
};

export default NavBar;
