import React from 'react'

const Work = ({ data }) => {

    const getUniqueData = (data, property) => { }

    return (
        <div>
            <div className=' font-bold text-4xl px-5 my-5 text-pri'>Portfolio</div>
            <div className=' gap-3 w-full space-x-3 px-5 capitalize'>
                <button className=' hover:text-pri text-gray-500 font-medium ease-in-out duration-300'>all</button>
                <button className=' hover:text-pri text-gray-500 font-medium ease-in-out duration-300'>video</button>
                <button className=' hover:text-pri text-gray-500 font-medium ease-in-out duration-300'>webdesign</button>
                <button className=' hover:text-pri text-gray-500 font-medium ease-in-out duration-300'>logo</button>
                <button className=' hover:text-pri text-gray-500 font-medium ease-in-out duration-300'>Graphic design</button>
            </div>

            <div className=' grid sm:grid-cols-2 bg-thi py-5'>

                {data.map((dt) => {
                    return <div className=' shadow-md content-container bg-sec hover:bg-pri hover:text-sec border border-opacity-30  mx-5  my-2'>
                        <div className='bg-red-200  content-center  w-full relative h-40 sm:h-52 '><img src={dt.image} className=' h-full w-full object-cover absolute' alt="" /></div>
                        <div className='px-2 uppercase text-xs sm:text-base mt-3'>{dt.type}</div>
                        <div className='px-2 pb-2 capitalize text-xl sm:text-2xl font-medium'>{dt.title}</div>
                    </div>

                })}

            </div>
        </div>
    )
}



export default Work