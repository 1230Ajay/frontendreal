import React from 'react'



const blog = ({data}) => {
    return (
        <div className='bg-sec'>
            <div className=' font-bold text-4xl px-5 py-10  text-pri '>Blogs</div>
            <div className='bg-thi'>
                

                    <div className=' grid sm:grid-cols-2 bg-thi py-5'>

                        {data.slice(0, 4).map((dt) => {
                            return <div className=' shadow-md content-container bg-sec hover:bg-pri hover:text-sec border border-opacity-30  mx-5  my-2'>
                                <div className='bg-red-200  content-center  w-full relative h-40 sm:h-52 '><img src={dt.image} className=' h-full w-full object-cover absolute' alt="" /></div>
                                <div className='px-2 uppercase text-xs sm:text-base mt-3'>{dt.type}</div>
                                <div className='px-2 pb-2 capitalize text-xl sm:text-2xl font-medium'>{dt.title}</div>
                            </div>

                        })}

                    </div>

               

            </div>
        </div>
    )
}

export default blog