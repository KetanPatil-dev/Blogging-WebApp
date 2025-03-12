import React from "react";
import { useNavigate } from "react-router-dom";

const RecentPost = () => {
    const navigate=useNavigate()
    const handleNavigate=()=>{
        navigate("/post/23")
    }
     
  return (
    <>
      <div className="container">
        <div className="mb-5 text-center">
          <h2 className="fw-bold fs-1 text-white">Recent Posts</h2>
        </div>
        <div className="row">
          <div className="col-md-4 col-lg-4 col-xs-12 mb-4">
            <div
              className="card border-success "
              style={{
                borderWidth: "2px",
                backgroundColor: "#2b2b2b",
                borderRadius: "10px",
              }}
            >
              <img
                src="https://www.avikalp.com/cdn/shop/products/MWZ2024_wallpaper2_e851d1bf-524d-4c9d-b38d-f6d50b1c94cd.jpg?v=1653183875"
                className="card-img-top img-filed"
                alt="recent"
              />
              <div className="card-body bg-dark text-white">
                <h5 className="card-title">My First Blog</h5>
                <p className="card-text">This is my First Blog</p>
                <button onClick={handleNavigate} className="btn btn-primary w-100 mt-3">
                  Read Article
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecentPost;
