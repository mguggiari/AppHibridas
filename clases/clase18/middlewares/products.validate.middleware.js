import { productSchema, productUpdateSchema } from "../schemas/products.schemas.js"


function validateProduct(req, res, next) {
    productSchema.validate(req.body, { abortEarly: false, stripUnknown: true })
        .then(function (product) {
            req.body = product
            next()
        })
        .catch(function (error) {
            res.status(400).json({ error })
        })
}
//yup por defecto aborta al primer error, entonces ponemos el abortearly en false para que siga y nos muestre todos los errores de una
//stripUnknown: si hay un campo que no corresponde al schema, lo saca
//stripUnknown y abortEarly son opciones de yup - propiedades
function validateProductUpdate(req, res, next) {
    productUpdateSchema.validate(req.body, { abortEarly: false, stripUnknown: true })
        .then(function (product) {
            req.body = product
            next()
        })
        .catch(function (error) {
            res.status(400).json({ error })
        })
}

export {
    validateProduct,
    validateProductUpdate
}