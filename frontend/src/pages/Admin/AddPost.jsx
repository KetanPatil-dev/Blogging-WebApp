import React from "react";

const AddPost = () => {
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
                <div method="post" encType="multipart/form-data">
                  <div className="mb-4">
                    <label htmlFor="postImage" className="form-label">
                      Upload Image :
                    </label>
                    <input type="file" className="form-control" id="image" />
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
                      id="postTitle"
                      placeholder="Enter Your Title"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="postDescription" className="form-label">
                      Description :
                    </label>
                    <textarea
                      type="text"
                      id="postDescription"
                      placeholder="Write your post description here"
                      rows="6"
                      className="form-control"
                    ></textarea>
                  </div>
                  <div className="d-grid">
                    <button className="btn btn-success btn-md">Submit</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPost;
