import React from 'react'
import { FaCalendarCheck } from 'react-icons/fa'




const services = ({ data, data1 , data2 }) => {
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

            <div className='text-pri capitalize text-2xl font-semibold relative p-5 '>
                my work
            </div>

            <div className=' grid sm:grid-cols-2 bg-thi'>
                
                { data1.slice(0,4).map((dt)=>{
                    return  <div className=' shadow-md content-container bg-sec hover:border-pri border border-opacity-30 px-5 mx-5 py-5 my-5 rounded-md'>
                    <div className='bg-red-200  content-center w-full relative  h-60 rounded-md'><img src={dt.image} className='rounded-md h-full w-full object-cover absolute' alt="" /></div>
                    <div className=' uppercase mt-3'>{dt.type}</div>
                    <div className=' capitalize text-2xl font-medium'>{dt.title}</div>
                </div>

                }) }

            </div>

            <div className='text-pri capitalize text-2xl font-semibold relative p-5 '>
                blogs
            </div>


            <div className='service-container px-5 gap-5  my-5 grid md:grid-cols-2 bg-thi py-10'>


                {
                    data2.slice(0,4).map((dt) => {
                        return (
                            <div className=' content-container  bg-sec hover:border border-pri border-opacity-30 ease-in-out shadow-lg hover:shadow-none px-5 mx-5 py-5 my-5 rounded-md'>
                            <div className='bg-red-200 object-cover content-center w-full h-60 rounded-md'><img src="/index.jpeg" className='rounded-md h-full' alt="" /></div>
                            <div className=' uppercase mt-3'>UI & UX</div>
                            <div className=' text-2xl font-medium'>Title of item</div>
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