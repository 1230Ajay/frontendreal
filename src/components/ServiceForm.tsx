import React from 'react'
import axios from 'axios';
import { useFormik } from 'formik';


const ServiceForm = () => {

    const { values, errors, handleChange, touched, setFieldValue, handleSubmit } = useFormik({
        initialValues: {
            ser: '',
            desc: '',
            icon: '',


        },



        onSubmit: async (values, action) => {
            console.log(values)
            let data = new FormData();
            data.append('ser', values.ser)
            data.append('desc', values.desc)
            data.append('icon', values.icon[0])


            await axios.post("https://api-w59c.onrender.com/Service/", data).then((res) => {
                alert('Service is added successfully')
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
                    Service
                </label>
                <input
                    type="text"
                    value={values.ser}
                    onChange={handleChange}

                    name="ser"
                    id="desc"
                    placeholder="Enter title"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
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
                    value={values.desc}
                    onChange={handleChange}

                    name="desc"
                    id="desc"
                    placeholder="Enter title"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />

            </div>



            <div className="mb-5 capitalize">
                <label

                    className="mb-3 block text-base font-medium text-[#07074D]"
                >
                    icon
                </label>
                <input

                    type="file"
                    name="icon"

                    onChange={e => setFieldValue('icon', e.target.files)}

                    id="icon"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] border-dashed outline-none focus:border-[#6A64F1] focus:shadow-md"
                />

            </div>


            <div>
                <button type='submit'
                    onClick={() => handleSubmit()}
                    className="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
                >
                    Add Service
                </button>
            </div>
        </form>
    )
}

export default ServiceForm