import yup from 'yup'

const productSchema = yup.object({
    name: yup.string().required(),
    price: yup.number().required("Pone el precio, gil!").positive(),
    description: yup.string().required(),
    tags: yup.array().of(yup.string()).required()
})

const productUpdateSchema = yup.object({
    name: yup.string(),
    price: yup.number().positive(),
    description: yup.string(),
    tags: yup.array().of(yup.string())
})

export {
    productSchema,
    productUpdateSchema
}