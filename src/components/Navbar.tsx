import Link from 'next/link';
import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { ImCross } from 'react-icons/im'



function MobileNav({open , setOpen}){
  return (
    <div>
      <div className={`${open ? " inline-flex" : "hidden"} bg-white flex-col z-20 text-center fixed w-full capitalize py-5 space-y-3`}>
        <div className=' hover:text-green-500 capitalize'><Link href={'/'}> <div>home</div></Link></div>
        <div className=' hover:text-green-500 capitalize'><Link href={'/Resume'}><div>resume</div></Link></div>
        <div className=' hover:text-green-500 capitalize'><Link href={'/Work'}><div>work</div></Link></div>
        <div className=' hover:text-green-500 capitalize'><Link href={'/Blog'}><div>blog</div></Link></div>
        <div className=' hover:text-green-500 capitalize'><Link href={'/Contact'}><div>contact</div></Link></div>

      </div>
    </div>
  )
}




const Navbar = () => {

  const [open, setOpen] = useState(false);

  return (

    <div className=' lg:hidden'>
      <div className=' justify-between flex px-10 py-3 bg-pink-100'>
        <nav className='logo font-semibold text-3xl '>Logo</nav>
        <div onClick={() => { setOpen(!open) }} className="button cursor-pointer rounded-full bg-green-200 w-12 h-12 flex justify-center items-center text-white">{open ? <div><ImCross className=' text-xl' /></div> : <div><GiHamburgerMenu className=' text-3xl' /></div>}</div>
      </div>

      <MobileNav open={open} setOpen={setOpen} ></MobileNav>

    </div>

  )
}

export default Navbar