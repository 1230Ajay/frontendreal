import React, { useState } from 'react'
import styles from '@/styles/Home.module.css'
import axios from 'axios'
import { Unica_One } from '@next/font/google'
import { RiVideoFill, RiPencilFill, RiEditFill } from 'react-icons/ri';
import { SiBloglovin, SiMaterialdesignicons } from 'react-icons/si';
import { GrAction, GrFormAdd, GrSearch } from 'react-icons/gr';
import { MdDelete } from 'react-icons/md'
import { ImCross } from 'react-icons/im'
import ServiceForm from '@/components/ServiceForm';
import Link from 'next/link';










export async function getServerSideProps() {
    const res = await axios.get("https://api-w59c.onrender.com/Service/")
    return {
        props: { data: res.data }
    }
}


const admin = ({ data }) => {

    const [add, setAdd] = useState(false)

   


  const onDelete = async(dt) =>{
    await axios.delete(`https://api-w59c.onrender.com/Service/${dt.id}`).then(r=>alert('data is deleted'))
  }


    return (
        <div className='flex max-w-7xl mx-auto h-screen'>

            {/* section 2 */}

           <div className='hidden md:inline-flex'>
           <div className="sec-1 h-screen w-72  border-r shadow-md">
                <div className="logo mx-10 my-5 text-2xl capitalize font-semibold">logo</div>
                <div className='mx-10 capitalize space-y-5 py-10'>
                    <Link href={'/admin'}><div className='flex items-center gap-2 font-light text-gray-700 '> <RiVideoFill className=' text-gray-700' />content</div></Link>
                    <Link href={'/admin/service'}><div className='flex items-center gap-2 font-light text-gray-700 '> <SiBloglovin className=' text-gray-700' />service</div></Link>
                    <Link href={'#'}><div className='flex items-center gap-2 font-light text-gray-700 '> <RiPencilFill className=' text-gray-700' />graphic design</div></Link>
                    <Link href={"#"}> <div className='flex items-center gap-2 font-light text-gray-700 '> <SiMaterialdesignicons className=' text-gray-700' />ui & ux</div></Link>
                </div>

                <div className="logout mx-10 capitalize">log out</div>
            </div>

           </div>


            {/* section 2 */}



            <div className="sec-2 w-full overflow-scroll">

                <div className=' w-full flex justify-center  '>
                    <div className={`${add ? "inline-flex" : "hidden"} h-[85%] mx-auto z-20 absolute top-10 bg-white shadow-2xl flex rounded-md`}>
                        <div className="flex items-center justify-center md:p-12">

                            <div className=' absolute top-10 right-10'><button onClick={() => { setAdd(false) }}><ImCross /></button></div>

                            <div className="mx-auto w-full max-w-[550px] bg-white">
                               
                            <ServiceForm/>
                              
                            </div>
                        </div>
                    </div>
                </div>


                <div className='Welcome px-5 py-5 border-b w-full text-center'>
                    <div className=' font-semibold text-2xl'>Welcome ajay</div>
                    <div className='font-light'>on your site here you can manage you data</div>
                </div>

                <div className='Welcome px-5 py-5 border-b w-full'>
                    <div className=' font-semibold text-2xl'>Service</div>
                    <div className='font-light'>on your site here you can manage you data</div>
                </div>

                <div className='Welcome px-5 py-5 border-b w-full flex items-center justify-between'>
                    <div onClick={() => { setAdd(true) }} className=' flex items-center gap-3 cursor-pointer border px-2 font-light rounded-md text-2xl z-10  '><GrFormAdd className='bg-green-200 rounded-full' /> add</div>
                    <div className='font-light hidden sm:inline-flex '><input type="text" className=' border px-2 rounded-sm ' placeholder='search' /><button className='w-10 mx-2 bg-green-200 py-1 rounded-sm'><GrSearch className='mx-auto' /></button></div>
                </div>

                <div className="content-container">

                    {data.map((dt) => {
                        return (<div className="content  space-x-10 grid grid-cols-3 py-2 w-full px-3 border-b my-1">
                            <div className=''><img className='h-32 relative ' src={dt.icon} alt="" /></div>
                            <div className="title font-bold text-2xl my-auto capitalize">{dt.ser}</div>
                            <div className='flex space-x-3   my-auto'>
                                <div className="update"><RiEditFill className='text-2xl text-green-600' /></div>
                                <div onClick={()=>onDelete(dt)} className="delete cursor-pointer"><MdDelete className='text-2xl text-red-600 hover:text-rose-400' /></div>
                            </div>
                        </div>
                        )
                    })

                    }

                </div>


            </div>


        </div>
    )
}

export default admin