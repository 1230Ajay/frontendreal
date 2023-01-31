import Link from 'next/link'
import React from 'react'
import { FaCalendarCheck } from 'react-icons/fa'




const services = ({ data, data1, data2 }) => {
    return (
        <div className=''>

            <div className='text-pri capitalize text-2xl font-semibold relative p-5 '>
                what i do!
            </div>

            {/* service-section */}

            <div className='service-container px-5 gap-5  my-5 grid md:grid-cols-2 bg-thi py-10'>


                {
                    data.map((dt) => {
                        return (
                            <div className='flex gap-3 border-b py-2 px-3  hover:bg-pri bg-sec text-pri hover:text-sec shadow-md rounded-md h-32'>
                                <div className=' px-3 justify-center rounded-md  h-24 w-24  items-center flex text-4xl relative'><img className=' absolute h-16  bg-cover object-cover object-center' src={dt.icon} alt="" /></div>
                                <div>
                                    <div className='text-xl font-medium capitalize'>{dt.ser}</div>
                                    <div className='overflow-hidden h-20 py-1'>{dt.desc}</div>
                                </div>
                            </div>
                        )
                    })
                }


            </div>

            <div className='text-pri flex items-center justify-between capitalize text-2xl font-semibold relative p-5 '>
                <div>my work</div>
                <Link href={'/Work'}> <p className='text-sm font-normal'>more</p></Link>
            </div>

            <div className=' grid sm:grid-cols-2 bg-thi py-5'>

                {data1.slice(0, 4).map((dt) => {
                    return <div className=' shadow-md content-container bg-sec hover:bg-pri hover:text-sec border border-opacity-30  mx-5  my-2'>
                        <div className='bg-red-200  content-center  w-full relative h-40 sm:h-52 '><img src={dt.image} className=' h-full w-full object-cover absolute' alt="" /></div>
                        <div className='px-2 uppercase text-xs sm:text-base mt-3'>{dt.type}</div>
                        <div className='px-2 pb-2 capitalize text-xl sm:text-2xl font-medium'>{dt.title}</div>
                    </div>

                })}

            </div>

            <div className='text-pri flex items-center justify-between capitalize text-2xl font-semibold relative p-5 '>
                <div>blog</div>
               <Link href={'/Blog'}> <p className='text-sm font-normal'>more</p></Link>
            </div>

            <div className='service-container  gap-2  my-5 grid md:grid-cols-2 bg-thi py-2'>


                {data1.slice(0, 4).map((dt) => {
                    return <div className=' shadow-md content-container bg-sec hover:bg-pri hover:text-sec border border-opacity-30  mx-5  my-2'>
                        <div className='bg-red-200  content-center  w-full relative h-40 sm:h-52 '><img src={dt.image} className=' h-full w-full object-cover absolute' alt="" /></div>
                        <div className='px-2 uppercase text-xs sm:text-base mt-3'>{dt.type}</div>
                        <div className='px-2 pb-2 capitalize text-xl sm:text-2xl font-medium'>{dt.title}</div>
                    </div>

                })}

            </div>



            <div className='px-5 my-5'>
                <div className=' capitalize text-2xl py-3 font-medium text-center'>cleints</div>
                <div className=' w-full overflow-x-scroll whitespace-nowrap space-x-3 '>
                    <div className="client  h-28 w-28 rounded-md bg-slate-300 inline-block "> <img src="/index.jpeg relative " className=' rounded-md object-cover absolute h-full ' alt="" /></div>
                    <div className="client  h-28 w-28 rounded-md bg-slate-300 inline-block "> <img src="/index.jpeg relative " className=' rounded-md object-cover absolute h-full ' alt="" /></div>
                    <div className="client  h-28 w-28 rounded-md bg-slate-300 inline-block "> <img src="/index.jpeg relative " className=' rounded-md object-cover absolute h-full ' alt="" /></div>
                    <div className="client  h-28 w-28 rounded-md bg-slate-300 inline-block "> <img src="/index.jpeg relative " className=' rounded-md object-cover absolute h-full ' alt="" /></div>
                    <div className="client  h-28 w-28 rounded-md bg-slate-300 inline-block "> <img src="/index.jpeg relative " className=' rounded-md object-cover absolute h-full ' alt="" /></div>
                    <div className="client  h-28 w-28 rounded-md bg-slate-300 inline-block "> <img src="/index.jpeg relative " className=' rounded-md object-cover absolute h-full ' alt="" /></div>

                </div>
            </div>
        </div>
    )
}

export default services