import React from 'react'

const blog = () => {
  return (
    <div>
            <div className=' font-bold text-4xl px-5 my-5 '>Blogs</div>
            <div className=''>

                <div className=' content-container bg-purple-100 px-5 mx-5 py-5 my-5 rounded-md'>
                    <div className='bg-red-200 object-cover content-center w-full h-60 rounded-md'><img src="/index.jpeg" className='rounded-md h-full' alt="" /></div>
                    <div className=' uppercase text-gray-600 mt-3'>UI & UX</div>
                    <div className=' text-2xl font-medium'>Title of item</div>
                </div>

               
            </div>
        </div>
  )
}

export default blog