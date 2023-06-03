import * as service from '../../services/products.services.js'

function getProducts(req, res) {
    const filter = req.query

    service.getProducts(filter)
        .then(function (products) {
            res.status(200).json(products) // res.send(JSON.stringify(products))
        })
}

function createProduct(req, res) {
    service.createProduct(req.body)
        .then(function (product) {
            res.status(201).json(product)
        })
}

function getProductById(req, res) {
    const idProduct = req.params.idProduct

    service.getProductById(idProduct)
        .then(function (product) {
            if (product) {
                res.status(200).json(product)
            }
            else {
                res.status(404).json({ error: { message: `No se encuentra el producto #${idProduct}` } })
            }
        })
}

function replaceProduct(req, res) {
    const idProduct = req.params.idProduct

    service.editProduct(idProduct, req.body)
        .then(function (product) {
            if (product) {
                res.status(200).json(product)
            }
            else {
                res.status(404).json({ error: { message: `No se encuentra el producto #${idProduct}` } })
            }
        })
}


function updateProduct(req, res) {
    const idProduct = req.params.idProduct

    service.editProduct(idProduct, req.body)
        .then(function (product) {
            if (product) {
                res.status(200).json(product)
            }
            else {
                res.status(404).json({ error: { message: `No se encuentra el producto #${idProduct}` } })
            }
        })

}

function deleteProduct(req, res) {
    const idProduct = req.params.idProduct

    service.deleteProduct(idProduct)
        .then(function (product) {
            if (product) {
                res.status(200).json(product)
            }
            else {
                res.status(404).json({ error: { message: `No se encuentra el producto #${idProduct}` } })
            }
        })
}


export {
    getProducts,
    createProduct,
    getProductById,
    replaceProduct,
    updateProduct,
    deleteProduct
}