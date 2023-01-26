import React from 'react'

const Contact = () => {
    return (
        <div className=' mx-auto'>
            <div className=' font-bold text-4xl px-5 my-5 '>Contacts</div>

            <div className='md:mx-10 p-5 px-10 bg-gray-100 rounded-md'>

                <div className=' text-3xl text-gray-600 py-12'>
                    I'm always open to discussing product <br />
                    <span className=' text-black font-bold'> design work or partnerships.</span>

                </div>

                <form className="w-full max-w-sm space-y-2">
                    <label htmlFor="Name" className=' text-gray-600'>Name *</label>
                    <div className="flex items-center border-b border-green-300 py-2">
                        <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Enter Your Name" aria-label="Full name" />
                    </div>
                </form>

                <form className="w-full max-w-sm">
                    <label htmlFor="Name" className=' text-gray-600'>Email *</label>
                    <div className="flex items-center border-b border-green-300 py-2">
                        <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Enter Your Email" aria-label="Full name" />
                    </div>
                </form>

                <form className="w-full max-w-sm">
                    <label htmlFor="Name" className=' text-gray-600'>Message *</label>
                    <div className="flex items-center border-b border-green-300 py-2">
                        <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Enter Your Message" aria-label="Full name" />
                    </div>
                </form>

                <button className=' my-5 py-2 border-gray-400 border-2 px-5 rounded-md capitalize hover:border-none ease-in-out duration-500 font-bold hover:bg-gradient-to-tr from-orange-500 to-pink-600 hover:text-white '> submit</button>

            </div>
        </div>
    )
}

export default Contact