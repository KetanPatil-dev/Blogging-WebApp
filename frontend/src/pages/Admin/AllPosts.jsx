import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'

const AllPosts = () => {
  return (
    <>
    <div className='container'>
      <h1 className='text-white mb-4 text-center'>ALL POSTS</h1>
      <div className='row'>
        <div className='col-md-4 col-lg-4 col-12 mb-4'>
        <div className='card h-100 '>
          <img src='https://www.avikalp.com/cdn/shop/products/MWZ2024_wallpaper2_e851d1bf-524d-4c9d-b38d-f6d50b1c94cd.jpg?v=1653183875"' alt='img'/>
          <div className='card-body'>
            <h4 className='card-title'>My First Blog</h4>
            <p className='card-text'> Plants are essential to life on Earth, providing oxygen, food, and
              shelter. They come in countless varieties, from towering trees to
              tiny mosses. Through photosynthesis, they convert sunlight into
              energy, supporting ecosystems worldwide. Plants also play a
              crucial role in medicine, climate regulation, and aesthetics,
              enhancing both nature and human well-being.</p>
          </div>
          <div className='card-footer d-flex justify-content-between'>
            <button className='btn btn-danger'>Delete <FaTrash/></button>
            <button className='btn btn-warning'>Update <FaEdit/> </button>
          </div>
          </div>
        </div>
        
      </div>
    </div>
    </>
  )
}

export default AllPosts