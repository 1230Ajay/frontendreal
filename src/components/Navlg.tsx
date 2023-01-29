import React from 'react'
import { AiFillHome } from 'react-icons/ai'
import { FaClipboard, FaMicroblog } from 'react-icons/fa'
import { MdWork } from 'react-icons/md'
import { RiContactsFill } from 'react-icons/ri'

import Link from 'next/link'

const Navlg = () => {
    return (
        <div className='relative'>
            <div className=' hidden lg:inline-flex gap-5 bg-white shadow-lg h-20 w-96 absolute right-10 justify-center items-center rounded-md '>
                <Link href={'/'}> <div className=' text-sec hover:bg-sec hover:text-pri h-12 w-12 flex justify-center items-center rounded-md active:bg-sec cursor-pointer'><AiFillHome className='text-3xl' /></div></Link>
                <Link href={'/Resume'}> <div className=' text-sec hover:bg-sec hover:text-pri h-12 w-12 flex justify-center items-center rounded-md active:bg-sec cursor-pointer'><FaClipboard className='text-3xl' /></div></Link>
                <Link href={'/Work'}> <div className=' text-sec hover:bg-sec hover:text-pri h-12 w-12 flex justify-center items-center rounded-md active:bg-sec cursor-pointer'><MdWork className='text-3xl' /></div></Link>
                <Link href={'/Blog'}> <div className=' text-sec hover:bg-sec hover:text-pri h-12 w-12 flex justify-center items-center rounded-md active:bg-sec cursor-pointer'><FaMicroblog className='text-3xl' /></div></Link>
                <Link href={'/Contact'}><div className=' text-sec hover:bg-sec hover:text-pri h-12 w-12 flex justify-center items-center rounded-md active:bg-sec cursor-pointer'><RiContactsFill className='text-3xl' /></div></Link>
            </div>
        </div>
    )
}

export default Navlg