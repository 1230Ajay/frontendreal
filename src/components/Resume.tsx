import React from 'react'
import { FaCalendarCheck } from 'react-icons/fa'
import { GiGraduateCap } from 'react-icons/gi'
import { IoBagCheckSharp } from 'react-icons/io5'

const Resume = ({edu,exp}) => {
    return (
        <div className=''>
            <div className=' font-bold text-4xl text-sec px-5 my-5 '>  Resume</div>
            <div className='service-container px-5 gap-5  my-5 grid  sm:grid-cols-2 bg-gray-100 py-10'>



                <div className="education space-y-3">
                    <div className=' capitalize text-2xl py-3 font-medium flex gap-3 items-center'> <GiGraduateCap className='text-4xl text0-sec text-sec' /> Education</div>

                    {
                        edu.map((education)=>{
                            return(
                                <div className='max-w-sm border-b flex flex-col justify-center px-3 border-sec hover:text-pri hover:bg-sec rounded-md h-32 mx-auto bg-pri'>
                                <div className="duration text-sm ">{education.year}</div>
                                <div className="position font-medium text-2xl  capitalize ">
                                   {education.cource}
                                </div>
                                <div className="orgrnistion capitalize">{education.institute}</div>
                            </div>
                            )
                        })
                    }
                   

                </div>

                <div className="experience space-y-3">
                    <div className=' capitalize text-2xl py-3 font-medium flex gap-3 items-center'> <IoBagCheckSharp className='text-4xl text-sec' />Experience</div>
                  { 
                    exp.map((experience)=>{
                            return(
                                <div className='max-w-sm border-b flex flex-col justify-center px-3 border-sec hover:text-pri hover:bg-sec rounded-md h-32 mx-auto bg-pri'>
                                <div className="duration text-sm ">{experience.year}</div>
                                <div className="position font-medium text-2xl  capitalize">
                                   {experience.position}
                                </div>
                                <div className="orgrnistion capitalize">{experience.company}</div>
                            </div>
                            )
                        })
                    }

                </div>




            </div>

            <div className='px-5 my-5 '>
                <div className=' capitalize text-2xl py-3 font-bold text-sec '> working skills</div>
                <div className='skills section px-5'>
                    <div>
                        <div className='text-xl font-semibold py-1 capitalize'>Web design</div>
                        <div className="linne">
                            <div className='w-full h-1 bg-gray-300'></div>
                            <div className='w-56 h-1 bg-sec relative -top-1'></div>
                        </div>
                    </div>

                    <div>
                        <div className='text-xl font-semibold py-1 capitalize'>Ui & UX</div>
                        <div className="linne">
                            <div className='w-full h-1 bg-gray-300'></div>
                            <div className='w-72 h-1 bg-sec relative -top-1'></div>
                        </div>
                    </div>

                    <div>
                        <div className='text-xl font-semibold py-1 capitalize'>web development</div>
                        <div className="linne">
                            <div className='w-full h-1 bg-gray-300'></div>
                            <div className='w-60 h-1 bg-sec relative -top-1'></div>
                        </div>
                    </div>

                   


                </div>
            </div>
        </div>

    )
}

export default Resume