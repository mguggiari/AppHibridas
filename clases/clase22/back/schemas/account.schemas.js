import yup from 'yup'

const account = yup.object({
    userName: yup.string().trim().required().min(3),
    password: yup.string().required().min(3)
})

export {
    account
}