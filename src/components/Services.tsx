import React from 'react'
import { FaCalendarCheck } from 'react-icons/fa'




const services = ({data}) => {
    return (
        <div className=''>

            <div className=' bg-sec text-pri capitalize text-2xl font-semibold relative p-5'>
                what i do!
            </div>

            {/* service-section */}

            <div className='service-container px-5 gap-5  my-5 grid md:grid-cols-2'>


               {
                data.map((dt)=>{
                    return(
                        <div className='flex gap-2 border-b py-2 px-3  hover:bg-sec bg-pri hover:text-pri shadow-md text-sec rounded-md h-32'>
                        <div className=' p-2 rounded-md  h-14 w-14 justify-center items-center flex text-4xl relative'><img className=' absolute bg-cover object-cover object-center' src={dt.icon} alt="" /></div>
                        <div>
                            <div className='text-2xl font-medium capitalize'>{dt.ser}</div>
                            <div className=' text-gray-600 overflow-hidden h-20 py-1'>{dt.desc}</div>
                        </div>
                    </div>
                    )
                })
               }
               

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