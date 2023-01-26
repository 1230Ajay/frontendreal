import React, { useState } from 'react'
import styles from '@/styles/Home.module.css'
import axios from 'axios'
import { Unica_One } from '@next/font/google'
import { RiVideoFill, RiPencilFill, RiEditFill } from 'react-icons/ri';
import { SiBloglovin, SiMaterialdesignicons } from 'react-icons/si';
import { GrAction, GrFormAdd, GrSearch } from 'react-icons/gr';
import { MdDelete } from 'react-icons/md'
import { ImCross } from 'react-icons/im'
import { Formik, useFormik } from 'formik';
import { uploadSchema } from '@/components/schema';
import Addform from '@/components/Addform';
import Uform from '@/components/Updatform';








export async function getServerSideProps() {
    const res = await axios.get("https://api-w59c.onrender.com/Contents/")
    return {
        props: { data: res.data }
    }
}


const admin = ({ data }) => {

    const [add, setAdd] = useState(false)
    const [btn, setBtn] = useState(false)

    const { values, errors, handleChange,touched,setFieldValue , handleSubmit } = useFormik({
        initialValues: {
            type: '',
            title: '',
            image: '',
            desc: '',
            technologies: '',

        },


        validationSchema: uploadSchema,
        onSubmit: async (values, action) => {

            let data = new FormData();
            data.append('type',values.type)
            data.append('title',values.title)
            data.append('image',values.image)
            data.append('desc',values.desc)
            data.append('technologies',values.technologies)

            await axios.post("https://api-w59c.onrender.com/Contents/",data).then((res) => {
                alert('data is added successfully')
            }).catch((e) => {
                console.log(e)
            })
            action.resetForm();
            console.log(values)
        }

    })


  const onDelete = async(dt) =>{
    await axios.delete(`https://api-w59c.onrender.com/Contents/${dt.id}`).then(r=>alert('data is deleted'))
  }


    return (
        <div className='flex max-w-7xl mx-auto h-screen'>

            {/* section 2 */}

            <div className="sec-1 h-screen w-72  border-r shadow-md">
                <div className="logo mx-10 my-5 text-2xl capitalize font-semibold">logo</div>
                <div className='mx-10 capitalize space-y-5 py-10'>
                    <div className='flex items-center gap-2 font-light text-gray-700 '> <RiVideoFill className=' text-gray-700' /> videos</div>
                    <div className='flex items-center gap-2 font-light text-gray-700 '> <SiBloglovin className=' text-gray-700' /> blogs</div>
                    <div className='flex items-center gap-2 font-light text-gray-700 '> <RiPencilFill className=' text-gray-700' />graphic design</div>
                    <div className='flex items-center gap-2 font-light text-gray-700 '> <SiMaterialdesignicons className=' text-gray-700' />ui & ux</div>
                </div>

                <div className="logout mx-10 capitalize">log out</div>
            </div>



            {/* section 2 */}



            <div className="sec-2 w-full overflow-scroll">

                <div className=' w-full flex justify-center  '>
                    <div className={`${add ? "inline-flex" : "hidden"} h-[85%] mx-auto z-20 absolute top-10 bg-white shadow-2xl flex rounded-md`}>
                        <div className="flex items-center justify-center p-12">

                            <div className=' absolute top-10 right-10'><button onClick={() => { setAdd(false) }}><ImCross /></button></div>
                            
                            <div className="mx-auto w-full max-w-[550px] bg-white">
                            {btn ? <div><Uform/></div>:<div><Addform/></div>}
                            </div>
                        </div>
                    </div>
                </div>


                <div className='Welcome px-5 py-5 border-b w-full text-center'>
                    <div className=' font-semibold text-2xl'>Welcome ajay</div>
                    <div className='font-light'>on your site here you can manage you data</div>
                </div>

                <div className='Welcome px-5 py-5 border-b w-full'>
                    <div className=' font-semibold text-2xl'>Product</div>
                    <div className='font-light'>on your site here you can manage you data</div>
                </div>

                <div className='Welcome px-5 py-5 border-b w-full flex items-center justify-between'>
                    <div onClick={() => { setAdd(true) }} className=' cursor-pointer font-semibold text-2xl z-10 '><GrFormAdd className='bg-green-200 rounded-sm' /></div>
                    <div className='font-light flex '><input type="text" className=' border px-2 rounded-sm ' placeholder='search' /><button className='w-10 mx-2 bg-green-200 py-1 rounded-sm'><GrSearch className='mx-auto' /></button></div>
                </div>

                <div className="content-container">

                    {data.map((dt) => {
                        return (<div className="content  space-x-10 grid grid-cols-3 py-2 w-full px-3 border-b my-1">
                            <div className=''><img className='h-32 relative ' src={dt.image} alt="" /></div>
                            <div className="title font-bold text-2xl my-auto capitalize">{dt.title}</div>
                            <div className='flex space-x-3   my-auto'>
                                <div className="update" onClick={()=>setBtn(true)}><RiEditFill className='text-2xl text-green-600' /></div>
                                <div onClick={()=>onDelete(dt)} className="delete cursor-pointer"><MdDelete className='text-2xl text-red-600 hover:text-rose-400' /></div>
                            </div>
                        </div>
                        )
                    })

                    }

                </div>


            </div>


        </div>
    )
}

export default admin