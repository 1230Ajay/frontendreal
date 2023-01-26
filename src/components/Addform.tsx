import React from 'react'
import { useState } from 'react'
import { useFormik } from 'formik'
import axios from 'axios'
import { uploadSchema } from './schema'
import { ImCross } from 'react-icons/im'
import styles from '@/styles/Home.module.css'

const Addform = () => {

    const [add, setAdd] = useState(false)

    const { values, errors, handleChange, touched, setFieldValue, handleSubmit } = useFormik({
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
            data.append('type', values.type)
            data.append('title', values.title)
            data.append('image', values.image[0])
            data.append('desc', values.desc)
            data.append('technologies', values.technologies)

            await axios.post("http://127.0.0.1:8000/Contents/", data).then((res) => {
                alert('data is added successfully')
            }).catch((e) => {
                console.log(e)
            })
            action.resetForm();
            console.log(values)
        }

    })

    return (
        <form
            className="py-6 px-9"
            method="POST"

        >


            <div className="mb-5 capitalize">
                <label

                    className="mb-3 block text-base font-medium text-[#07074D]"
                >
                    Select categories
                </label>
                <select
                    name="type"
                    value={values.type}
                    onChange={handleChange}

                    id="categories"
                    placeholder="categories"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md">
                    <option value="videos">videos</option>
                    <option value="blog">blogs</option>
                    <option value="website Design">website design</option>
                    <option value="logo design">logo design</option>

                </select>

            </div>

            <div className="mb-5 capitalize">
                <label

                    className="mb-3 block text-base font-medium text-[#07074D]"
                >
                    Title
                </label>
                <input
                    type="text"
                    value={values.title}
                    onChange={handleChange}

                    name="title"
                    id="categories"
                    placeholder="Enter title"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
                {errors.title && touched.title ? <p className=' text-xs text-red-500 font-bold '>{errors.title}</p> : null}
            </div>



            <div className="mb-5 capitalize">
                <label

                    className="mb-3 block text-base font-medium text-[#07074D]"
                >
                    Image
                </label>
                <input

                    type="file"
                    name="imafe"

                    onChange={e => setFieldValue('image', e.target.files)}

                    id="categories"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] border-dashed outline-none focus:border-[#6A64F1] focus:shadow-md"
                />

            </div>

            <div className="mb-5 capitalize">
                <label

                    className="mb-3 block text-base font-medium text-[#07074D]"
                >
                    Description
                </label>
                <input
                    type="text"
                    name="desc"
                    value={values.desc}
                    onChange={handleChange}

                    id="categories"
                    placeholder=" Enter Description"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
                {errors.desc && touched.desc ? <p className=' text-xs text-red-500 font-bold '>{errors.desc}</p> : null}
            </div>

            <div className="mb-5 capitalize">
                <label

                    className="mb-3 block text-base font-medium text-[#07074D]"
                >
                    technologies
                </label>
                <input
                    type="text"
                    name="technologies"
                    value={values.technologies}
                    onChange={handleChange}

                    id="categories"
                    placeholder="Enter technologies"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
                {errors.technologies && touched.technologies ? <p className=' text-xs text-red-500 font-bold '>{errors.technologies}</p> : null}
            </div>






            <div>
                <button type='submit'
                    onClick={()=>handleSubmit}
                    className="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
                >
                    Add Content
                </button>
            </div>
        </form>
    )
}

export default Addform