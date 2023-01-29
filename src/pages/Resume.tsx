import React from 'react'
import { FaCalendarCheck } from 'react-icons/fa'
import Navbar from '@/components/Navbar'
import Intro from '@/components/Intro'
import Resume from '@/components/Resume'
import axios from 'axios'
import Navlg from '@/components/Navlg'

export async function getServerSideProps() {
  const exp = await axios.get("https://api-w59c.onrender.com/Experience/")
  const edu = await axios.get("https://api-w59c.onrender.com/Education/")
  return {
      props: { edu: edu.data ,
               exp: exp.data
      }
      
  }
}



const resume = ({edu , exp}) => {
    return (
        <div className=' max-w-7xl mx-auto h-screen bg-thi '>
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
            <div className=' rounded-lg shadow-lg sm:mx-5 h-fit bg-white py-5'>
              <Resume edu={edu} exp={exp} />
            </div>

          </div>
        </div>
      </div>


    )
}

export default resume