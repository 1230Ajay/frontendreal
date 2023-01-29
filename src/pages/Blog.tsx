import React from 'react'
import Blog from '@/components/Blog'
import Navbar from '@/components/Navbar'
import Intro from '@/components/Intro'
import Navlg from '@/components/Navlg'

const Bolg = () => {
  return (
    <div className=' max-w-7xl mx-auto h-screen '>
      <div className=' lg:hidden'><Navbar /></div>

      <div className=" md:flex">
        <div className='md:max-w-md sm:hidden  lg:inline-flex flex-col py-10'><Intro /></div>
        <div className=' w-full bg-blur-3xl rounded-md lg:h-screen lg:overflow-scroll'>
          <div className=' text-center text-4xl  flex-col justify-center w-full h-[40%] hidden lg:inline-flex font-bold'>
            <div >Welcome</div>
            <div className=' text-base font-normal'>hearfully weclome to my website</div>
          </div>
          <div>
           <Navlg/>
          </div>
          <div className=' rounded-lg shadow-lg mx-5 my-5  h-fit bg-white py-5'>
            <Blog />
          </div>

        </div>
      </div>
    </div>

  )
}

export default Bolg