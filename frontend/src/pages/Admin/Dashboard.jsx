import React, { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
const [comments,setComments]=useState([])
const [users,setUsers]=useState([])
const [posts,setPosts]=useState([])
  const getUsers = async () => {
    try {
      const res = await axios.get("http://localhost:7989/dashboard", {
        withCredentials: true, 
      });
      const data2=res.data
      setComments(data2.posts.map((comments)=>comments.comments));
      setUsers(data2?.user)
      setPosts(data2?.posts)
    } catch (error) {
      console.error("ERROR:", error.response ? error.response.data : error.message);
    }
  };
 console.log(comments)
  useEffect(() => {
    getUsers();
  }, []);
  
  
  return (
    <>
      <div>
        <h1 className="mb-4 text-white">Admin</h1>
        <div className="row">
          <div className="col-md-4 col-lg-4 col-sm-4 col-12">
            <div className="card bg-primary text-white mb-4">
              <div className="card-body">
                <h5 className="card-title">Total Users</h5>
                <p className="card-text">{users.length}</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-lg-4 col-sm-4 co-12">
            <div className="card bg-success text-white mb-4">
              <div className="card-body">
                <h5 className="card-title">Total Posts</h5>
                <p className="card-text">{posts.length}</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-lg-4 col-sm-4 co-12">
            <div className="card bg-warning text-white mb-4">
              <div className="card-body">
                <h5 className="card-title">Total Comments</h5>
                <p className="card-text">{comments.map(subsum=>subsum.length).reduce((a,b)=>a+b,0)}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
