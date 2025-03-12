import React from "react";

const Post = () => {
  return (
    <>
      <div className="container text-white mt-5 mb-5">
        <div className="row">
          <div className="col-md-12">
            <h1 className="fw-bold text-white mb-4 display-4">My Blog</h1>
            <img
              src="https://www.avikalp.com/cdn/shop/products/MWZ2024_wallpaper2_e851d1bf-524d-4c9d-b38d-f6d50b1c94cd.jpg?v=1653183875"
              alt="img"
              className="img-fluid mb-4"
              style={{
                borderRadius: "10px",
                maxHeight: "500px",
                objectFit: "cover",
                width: "100%",
              }}
            />
            <p className="mb-5">
              Plants are essential to life on Earth, providing oxygen, food, and
              shelter. They come in countless varieties, from towering trees to
              tiny mosses. Through photosynthesis, they convert sunlight into
              energy, supporting ecosystems worldwide. Plants also play a
              crucial role in medicine, climate regulation, and aesthetics,
              enhancing both nature and human well-being.
            </p>
            <hr />
            <h3 className="mt-5 mb-5">Leave a Comment</h3>
            <form>
              <div className="mb-3">
                <label htmlFor="comment" className="form-label">
                  Comment
                </label>
                <textarea
                  className="form-control"
                  id="comment"
                  rows="4"
                   placeholder="Tell us your thoughts"
                  required="true"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
            <hr />
            <h3 className="mt-5 mb-4">Comments</h3>
            <div className="bg-secondary p-3 rounded mb-3 d-flex">
              <img
                src="https://img.freepik.com/free-vector/young-man-black-shirt_1308-173618.jpg?semt=ais_hybrid"
                alt="image"
                className="rounded-circle me-3"
                style={{ width: "50px", height: "50px", objectFit: "cover" }}
              />
              <div>
                <h5 className="mb-1">Don</h5>
                <p className="mb-0">Amazing</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
