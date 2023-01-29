import React from 'react'
import { RiFacebookFill, RiInstagramFill } from 'react-icons/ri'
import { FaLinkedinIn, FaTelegramPlane, FaCalendarCheck, FaDownload } from 'react-icons/fa'
import { IoCall } from 'react-icons/io5'
import { MdMarkEmailUnread, MdLocationOn } from 'react-icons/md'

const Intro = () => {
    return (
        <div className='h-fit'>


            {/* image section */}

            <div className='h-56 w-56 overflow-hidden bg-white relative mx-auto rounded-lg shadow-md flex'>
                <img src="/man-profile.svg" className=' absolute rounded-md z-10' alt="" />
            </div>
            <div className=' bg-white lg:shadow-lg relative rounded-lg -z-0 -top-20 mx-5 py-10'>
                {/* name section */}
                    
                  

                <div className='my-3 pt-20'>
                    <div className=' capitalize text-2xl text-sec font-semibold text-center'>Ajay malah</div>
                    <div className=' capitalize text-center text-gray-600'>full-stack developer</div>
                    <div className=' text-2xl flex justify-center gap-3 my-5'>
                        <button className='bg-pri text-sec hover:bg-sec hover:text-pri p-2 rounded-md  shadow-lg'><RiFacebookFill /></button>
                        <button className='bg-pri text-sec hover:bg-sec hover:text-pri p-2 rounded-md  shadow-lg'><FaLinkedinIn /></button>
                        <button className='bg-pri text-sec hover:bg-sec hover:text-pri p-2 rounded-md  shadow-lg'><FaTelegramPlane /></button>
                        <button className='bg-pri text-sec hover:bg-sec hover:text-pri p-2 rounded-md  shadow-lg'><RiInstagramFill /></button>
                    </div>
                </div>

                {/* contact section  */}


                <div className='sm:mx-10 p-5 pri backdrop-filter backdrop-blur-sm text-sec rounded-md shadow-lg'>
                    <div className='flex gap-2 border-b py-2'>
                        <div className='bg-sec text-pri hover:bg-pri hover:text-sec  p-2 rounded-md  shadow-lg h-10 w-10 justify-center items-center flex text-2xl'><IoCall /></div>
                        <div>
                            <div className='text-sm text-gray-400'>Phone</div>
                            <div className='text-xl text-sec'>+91 7489463450</div>
                        </div>
                    </div>

                    <div className='flex gap-2 border-b py-2'>
                        <div className='bg-sec text-pri hover:bg-pri hover:text-sec  p-2 rounded-md shadow-lg h-10 w-10 justify-center items-center flex text-2xl'><MdMarkEmailUnread /></div>
                        <div>
                            <div className='text-sm text-gray-400'>Email</div>
                            <div className='text-xl text-sec'>arryroy1101@gmail.com</div>
                        </div>
                    </div>

                    <div className='flex gap-2 border-b py-2'>
                        <div className='bg-sec text-pri hover:bg-pri hover:text-sec  p-2 rounded-md  shadow-lg h-10 w-10 justify-center items-center flex text-2xl'><MdLocationOn /></div>
                        <div>
                            <div className='text-sm text-gray-400'>Location</div>
                            <div className='text-xl text-sec'>Narsinghpur MP , India</div>
                        </div>
                    </div>

                    <div className='flex gap-2 border-b py-2'>
                        <div className='bg-sec text-pri hover:bg-pri hover:text-sec  p-2 rounded-md  shadow-lg h-10 w-10 justify-center items-center flex text-2xl'><FaCalendarCheck /></div>
                        <div>
                            <div className='text-sm text-gray-400'>Birthday</div>
                            <div className='text-xl text-sec'>3 April 2003</div>
                        </div>
                    </div>



                </div>
                <button className=' shadow-lg bg-sec hover:border hover:border-sec hover:bg-pri hover:text-sec text-pri mx-auto my-5 flex items-center justify-center space-x-2 gap-2 h-10 px-5 rounded-md'> <span className='bg-pri  text-sec p-[7px] rounded-full'><FaDownload /></span> Download CV</button>

            </div>
            <div>

            </div>



        </div>
    )
}

export default Intro