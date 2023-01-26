import React from 'react'
import { FaCalendarCheck } from 'react-icons/fa'
import { GiGraduateCap } from 'react-icons/gi'
import { IoBagCheckSharp } from 'react-icons/io5'

const Resume = () => {
    return (
        <div className=''>
            <div className=' font-bold text-4xl px-5 my-5 '>  Resume</div>
            <div className='service-container px-5 gap-5  my-5 grid  sm:grid-cols-2'>



                <div className="education space-y-3">
                    <div className=' capitalize text-2xl py-3 font-medium flex gap-3 items-center '> <GiGraduateCap className='text-4xl text-red-500' /> Education</div>
                    <div className='max-w-sm border-b flex flex-col justify-center px-3 bg-pink-100 rounded-md h-32 mx-auto'>
                        <div className="duration text-sm text-gray-600">2021-2023</div>
                        <div className="position font-medium text-2xl capitalize">
                            B-tch
                        </div>
                        <div className="orgrnistion capitalize">Oriental Institutes of seince and technology jabalpur</div>
                    </div>

                    <div className='max-w-sm border-b flex flex-col justify-center px-3 bg-pink-100 rounded-md h-32 mx-auto'>
                        <div className="duration text-sm text-gray-600">2021-2023</div>
                        <div className="position font-medium text-2xl capitalize">
                            B-tch
                        </div>
                        <div className="orgrnistion capitalize">Oriental Institutes of seince and technology jabalpur</div>
                    </div>

                    <div className='max-w-sm border-b flex flex-col justify-center px-3 bg-pink-100 rounded-md h-32 mx-auto'>
                        <div className="duration text-sm text-gray-600">2021-2023</div>
                        <div className="position font-medium text-2xl capitalize">
                            B-tch
                        </div>
                        <div className="orgrnistion capitalize">Oriental Institutes of seince and technology jabalpur</div>
                    </div>

                </div>

                <div className="experience space-y-3">
                    <div className=' capitalize text-2xl py-3 font-medium flex gap-3 items-center'> <IoBagCheckSharp className='text-4xl text-red-500' />Experience</div>
                    <div className='max-w-sm border-b flex flex-col justify-center px-3 bg-pink-100 rounded-md h-32 mx-auto'>
                        <div className="duration text-sm text-gray-600">2021-2023</div>
                        <div className="position font-medium text-2xl capitalize">
                            B-tch
                        </div>
                        <div className="orgrnistion capitalize">Oriental Institutes of seince and technology jabalpur</div>
                    </div>

                    <div className='max-w-sm border-b flex flex-col justify-center px-3 bg-pink-100 rounded-md h-32 mx-auto'>
                        <div className="duration text-sm text-gray-600">2021-2023</div>
                        <div className="position font-medium text-2xl capitalize">
                            B-tch
                        </div>
                        <div className="orgrnistion capitalize">Oriental Institutes of seince and technology jabalpur</div>
                    </div>

                    <div className='max-w-sm border-b flex flex-col justify-center px-3 bg-pink-100 rounded-md h-32 mx-auto'>
                        <div className="duration text-sm text-gray-600">2021-2023</div>
                        <div className="position font-medium text-2xl capitalize">
                            B-tch
                        </div>
                        <div className="orgrnistion capitalize">Oriental Institutes of seince and technology jabalpur</div>
                    </div>

                </div>




            </div>

            <div className='px-5 my-5 '>
                <div className=' capitalize text-2xl py-3 font-medium '> working skills</div>
                <div className='skills section px-5'>
                    <div>
                        <div className='text-xl font-semibold text-gray-600 py-1 capitalize'>Web design</div>
                        <div className="linne">
                            <div className='w-full h-1 bg-gray-300'></div>
                            <div className='w-56 h-1 bg-pink-400 relative -top-1'></div>
                        </div>
                    </div>

                    <div>
                        <div className='text-xl font-semibold text-gray-600 py-1 capitalize'>Ui & UX</div>
                        <div className="linne">
                            <div className='w-full h-1 bg-gray-300'></div>
                            <div className='w-72 h-1 bg-pink-400 relative -top-1'></div>
                        </div>
                    </div>

                    <div>
                        <div className='text-xl font-semibold text-gray-600 py-1 capitalize'>web development</div>
                        <div className="linne">
                            <div className='w-full h-1 bg-gray-300'></div>
                            <div className='w-60 h-1 bg-pink-400 relative -top-1'></div>
                        </div>
                    </div>

                    <div>
                        <div className='text-xl font-semibold text-gray-600 py-1 capitalize'>graphic design</div>
                        <div className="linne">
                            <div className='w-full h-1 bg-gray-300'></div>
                            <div className='w-96 h-1 bg-pink-400 relative -top-1'></div>
                        </div>
                    </div>


                </div>
            </div>
        </div>

    )
}

export default Resume