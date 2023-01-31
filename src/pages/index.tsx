import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import axios from 'axios'
import Navbar from '@/components/Navbar'
import Intro from '@/components/Intro'
import Services from '@/components/Services'
import Navlg from '@/components/Navlg'


const inter = Inter({ subsets: ['latin'] })

export async function getServerSideProps() {
  const res = await axios.get("http://ajay1101.pythonanywhere.com/Service/")
  const res1 = await axios.get("http://ajay1101.pythonanywhere.com/Contents/")
  const res2 = await axios.get("http://ajay1101.pythonanywhere.com/Service/")
  return {
    props: { data: res.data,
      data1: res1.data,
      data2: res2.data
    }
  }
}


export default function Home({ data,data1,data2 }) {
  return (


    <div className=' max-w-7xl mx-auto h-fit bg-thi'>
      <div className=' lg:hidden'><Navbar /></div>

      <div className=" md:flex">
        <div className='md:max-w-md md:hidden  lg:inline-flex flex-col py-10'><Intro /></div>
        <div className=' w-full bg-blur-3xl rounded-md lg:h-screen lg:overflow-scroll'>
          <div className=' text-center text-4xl  flex-col justify-center w-full h-[40%] hidden lg:inline-flex font-bold'>
            <div >Welcome</div>
            <div className=' text-base font-normal'>hearfully weclome to my website</div>
          </div>
          <div>
            <Navlg />
          </div>

          <div className=' rounded-lg shadow-lg mx-5 h-fit  bg-white sm:py-5'>
            <Services data={data} data1={data1} data2={data2} />
          </div>

        </div>
      </div>
    </div>


  )
}
