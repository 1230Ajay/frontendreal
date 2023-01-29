import React from 'react'

const Contact = () => {
    return (
        <div className=' mx-auto'>
            <div className=' font-bold text-4xl px-5 my-5 text-pri '>Contacts</div>

            <div className='md:mx-10 p-5 px-10 bg-thi rounded-md'>

                <div className=' text-3xl text-pri py-12'>
                    I'm always open to discussing product <br />
                    <span className=' text-pri font-bold'> design work or partnerships.</span>

                </div>

                <form className="w-full max-w-sm space-y-2">
                    <label htmlFor="Name" className=' text-pri'>Name *</label>
                    <div className="flex items-center border-b border-green-300 py-2">
                        <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Enter Your Name" aria-label="Full name" />
                    </div>
                </form>

                <form className="w-full max-w-sm">
                    <label htmlFor="Name" className=' text-pri'>Email *</label>
                    <div className="flex items-center border-b border-green-300 py-2">
                        <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Enter Your Email" aria-label="Full name" />
                    </div>
                </form>

                <form className="w-full max-w-sm">
                    <label htmlFor="Name" className=' text-pri'>Message *</label>
                    <div className="flex items-center border-b border-green-300 py-2">
                        <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Enter Your Message" aria-label="Full name" />
                    </div>
                </form>

                <button className=' my-5 py-2 border-gray-400 border-2 px-5 rounded-md capitalize hover:border-none ease-in-out duration-500 font-bold bg-sec text-pri hover:bg-pri hover:text-sec '> submit</button>

            </div>
        </div>
    )
}

export default Contact