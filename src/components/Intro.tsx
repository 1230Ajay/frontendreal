import React from 'react'
import { RiFacebookFill, RiInstagramFill } from 'react-icons/ri'
import { FaLinkedinIn, FaTelegramPlane, FaCalendarCheck, FaDownload } from 'react-icons/fa'
import { IoCall } from 'react-icons/io5'
import { MdMarkEmailUnread, MdLocationOn } from 'react-icons/md'

const Intro = () => {
    return (
        <div className='h-screen'>


            {/* image section */}

            <div className='h-56 w-56  bg-green-400 mx-auto rounded-lg shadow-md flex'>
                <img src="/index.jpeg" className=' rounded-md z-10' alt="" />
            </div>
            <div className=' bg-white lg:shadow-lg relative rounded-lg -z-0 -top-20 mx-5 py-10'>
                {/* name section */}

                <div className='my-3 pt-28'>
                    <div className=' capitalize text-2xl font-semibold text-center'>Ajay malah</div>
                    <div className=' capitalize text-center text-gray-600'>full-stack developer</div>
                    <div className=' text-2xl flex justify-center gap-3 my-5'>
                        <button className='bg-gray-200 p-2 rounded-md hover:bg-gradient-to-br from-orange-500 to-pink-600 hover:text-white  shadow-sm'><RiFacebookFill /></button>
                        <button className='bg-gray-200 p-2 rounded-md hover:bg-gradient-to-br from-orange-500 to-pink-600 hover:text-white  shadow-sm'><FaLinkedinIn /></button>
                        <button className='bg-gray-200 p-2 rounded-md hover:bg-gradient-to-br from-orange-500 to-pink-600 hover:text-white  shadow-sm'><FaTelegramPlane /></button>
                        <button className='bg-gray-200 p-2 rounded-md hover:bg-gradient-to-br from-orange-500 to-pink-600 hover:text-white  shadow-sm'><RiInstagramFill /></button>
                    </div>
                </div>

                {/* contact section  */}


                <div className='sm:mx-10 p-5 bg-gray-100 rounded-md'>
                    <div className='flex gap-2 border-b py-2'>
                        <div className='bg-gray-200 p-2 rounded-md hover:bg-gradient-to-br from-orange-500 to-pink-600 hover:text-white  shadow-lg h-10 w-10 justify-center items-center flex text-2xl'><IoCall /></div>
                        <div>
                            <div className='text-sm text-gray-600'>Phone</div>
                            <div className='text-xl'>+91 7489463450</div>
                        </div>
                    </div>

                    <div className='flex gap-2 border-b py-2'>
                        <div className='bg-gray-200 p-2 rounded-md hover:bg-gradient-to-br from-orange-500 to-pink-600 hover:text-white shadow-lg h-10 w-10 justify-center items-center flex text-2xl'><MdMarkEmailUnread /></div>
                        <div>
                            <div className='text-sm text-gray-600'>Email</div>
                            <div className='text-xl'>arryroy1101@gmail.com</div>
                        </div>
                    </div>

                    <div className='flex gap-2 border-b py-2'>
                        <div className='bg-gray-200 p-2 rounded-md hover:bg-gradient-to-br from-orange-500 to-pink-600 hover:text-white  shadow-lg h-10 w-10 justify-center items-center flex text-2xl'><MdLocationOn /></div>
                        <div>
                            <div className='text-sm text-gray-600'>Location</div>
                            <div className='text-xl'>Narsinghpur MP , India</div>
                        </div>
                    </div>

                    <div className='flex gap-2 border-b py-2'>
                        <div className='bg-gray-200 p-2 rounded-md hover:bg-gradient-to-br from-orange-500 to-pink-600 hover:text-white  shadow-lg h-10 w-10 justify-center items-center flex text-2xl'><FaCalendarCheck /></div>
                        <div>
                            <div className='text-sm text-gray-600'>Birthday</div>
                            <div className='text-xl'>3 April 2003</div>
                        </div>
                    </div>



                </div>
                <button className=' mx-auto my-5 flex items-center justify-center space-x-2 gap-2 bg-gradient-to-br from-orange-500 to-pink-600 h-10 px-5 rounded-md'> <span><FaDownload /></span> Download CV</button>

            </div>
            <div>

            </div>



        </div>
    )
}

export default Intro