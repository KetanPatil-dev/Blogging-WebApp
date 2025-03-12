
import React from 'react'
import RecentPost from '../Components/RecentPost'

const Home = () => {
  return (

    <>
    <div className=' container-fluid bg-dark hero-section text-center'>
    <h1 className='fs-1 fw-bold text-light'>WELCOME TO MY BLOG</h1>
    <p className='text-light fs-5 mt-3'>Empowering voices, sharing stories – your Blog, your World. ✨</p>
    </div>

    <div className='container-fluid mt-8'>
        <RecentPost/>
    </div>
    </>
  )
}

export default Home