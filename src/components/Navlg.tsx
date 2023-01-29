import React from 'react'
import { AiFillHome } from 'react-icons/ai'
import { FaClipboard, FaMicroblog } from 'react-icons/fa'
import { MdWork } from 'react-icons/md'
import { RiContactsFill } from 'react-icons/ri'

import Link from 'next/link'

const Navlg = () => {
    return ( 
        
        <div>
            <div className='relative hidden lg:inlin-flex'>
           <div className='flex gap-10 absolute right-10 shadow-lg p-2 rounded-md'>
            <Link className='h-14 flex justify-center items-center w-14 hover:bg-sec hover:text-pri text-sec rounded-md p-auto cursor-pointer' href={'/'}><AiFillHome className='h-10 w-10 m-auto'/></Link>
            <Link className='h-14 flex justify-center items-center w-14 hover:bg-sec hover:text-pri text-sec rounded-md p-auto cursor-pointer' href={'/Resume'}><FaClipboard className='h-10 w-10 m-auto'/></Link>
            <Link className='h-14 flex justify-center items-center w-14 hover:bg-sec hover:text-pri text-sec rounded-md p-auto cursor-pointer' href={'/Work'}><MdWork className='h-10 w-10 m-auto'/></Link>
            <Link className='h-14 flex justify-center items-center w-14 hover:bg-sec hover:text-pri text-sec rounded-md p-auto cursor-pointer' href={'/Blog'}><FaMicroblog className='h-10 w-10 m-auto'/></Link>
            <Link className='h-14 flex justify-center items-center w-14 hover:bg-sec hover:text-pri text-sec rounded-md p-auto cursor-pointer' href={'/Contact'}><RiContactsFill className='h-10 w-10 m-auto'/></Link>
           </div>
        </div>
        </div>
    )
}

export default Navlg