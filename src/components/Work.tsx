import React from 'react'

const Work = ({ data }) => {

const getUniqueData = (data , property) =>{}
    
    return (
        <div>
            <div className=' font-bold text-4xl px-5 my-5 '>Portfolio</div>
            <div className=' gap-3 w-full space-x-3 px-5 capitalize'>
                <button className=' hover:text-red-400 font-medium ease-in-out duration-300'>all</button>
                <button className=' hover:text-red-400 font-medium ease-in-out duration-300'>video</button>
                <button className=' hover:text-red-400 font-medium ease-in-out duration-300'>webdesign</button>
                <button className=' hover:text-red-400 font-medium ease-in-out duration-300'>logo</button>
                <button className=' hover:text-red-400 font-medium ease-in-out duration-300'>Graphic design</button>
            </div>

            <div className=' grid sm:grid-cols-2'>

                { data.map((dt)=>{
                    return  <div className=' shadow-md content-container bg-white px-5 mx-5 py-5 my-5 rounded-md'>
                    <div className='bg-red-200  content-center w-full relative  h-60 rounded-md'><img src={dt.image} className='rounded-md h-full w-full object-cover absolute' alt="" /></div>
                    <div className=' uppercase text-gray-600 mt-3'>{dt.type}</div>
                    <div className=' capitalize text-2xl font-medium'>{dt.title}</div>
                </div>

                }) }

            </div>
        </div>
    )}



export default Work