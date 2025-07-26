import React from 'react'
import Illustration from './assets/images/illustration-article.svg'
import avatar from './assets/images/image-avatar.webp'

function App() {
  return (
    <div className='bg-yellow-400/70 h-screen flex justify-center items-center'>
      <div className='bg-white p-4 max-w-96 w-full flex flex-col space-y-5 border rounded-2xl shadow-[7px_7px_0px_rgba(0,0,0,1)]'>
        <img
          src={Illustration}
          alt="Article Illustration"
          className='rounded-xl'
        />

        <div className='space-y-3'>
          <button className='bg-yellow-400/70 py-1.5 px-3 rounded-md font-extrabold text-gray-950'>Learning</button>
          <h2 className='font-medium text-gray-950'>Published 26 July 2025</h2>
        </div>

        <div className='space-y-3'>
          <h1 className='inline-block text-[clamp(1rem,5vw,1.5rem)] font-extrabold text-gray-950 hover:text-yellow-400/70 duration-300 cursor-pointer'>HTML & CSS Foundation</h1>
          <p className='font-medium text-gray-500'>These languages are the backbone of every website, defining structure, content and presentation.</p>
        </div>

        <div className='flex items-center gap-2'>
          <img
            src={avatar}
            alt="avatar"
            className='rounded-full w-8'
          />
          <h2 className='font-extrabold text-gray-950'>Greg Hooper</h2>
        </div>

      </div>

    </div>
  )
}

export default App
