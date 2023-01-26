import * as Yup from 'yup'

export const uploadSchema = Yup.object({
    title: Yup.string().min(2).max(200).required("please enter title"),
    desc: Yup.string().min(2).max(200).required("please enter description"),
    technologies: Yup.string().min(2).max(200).required("please enter technologies"),

})