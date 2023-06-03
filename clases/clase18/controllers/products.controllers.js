import * as service from '../services/products.services.js'
import * as view from '../views/products.views.js'
import * as reviewService from '../services/products.reviews.services.js'


function getProducts(req, res) {
    service.getProducts({ deleted: true })
        .then(function (products) {
            res.send(view.createProductListPage(products))
        })
}

async function getProductById(req, res) {
    let idProduct = req.params.idProduct // 1
    const product = await service.getProductById(idProduct)

    if (product) {
        const reviews = await reviewService.getReviews(idProduct)
        res.send(view.createProductPage(product, reviews?.reviews || []))
    }
    else {
        res.send(view.createPage('Error', '<p>Producto no encontrado</p>'))
    }
}

function createProductFormPage(req, res) {
    res.send(view.createProductFormPage())
}

function createProduct(req, res) {
    const product = {
        name: req.body.name,
        price: req.body.price,
        description: req.body.description
    }

    service.createProduct(product)
        .then(function (newProduct) {
            res.send(view.createPage('Producto creado', `<p>Producto ${newProduct.name} creado con el id ${newProduct.id}</p>`))
        })
        .catch(function (error) {
            res.send(view.createPage('Error', `<p>Ocurrio un error</p>`))
        })


}

function editProductForm(req, res) {

    const id = req.params.idProduct

    service.getProductById(id)
        .then(function (product) {
            if (product) {
                res.send(view.createEditProductFormPage(product))
            }
            else {
                res.send(view.createPage('No se encontro!', '<h1>No se encontro el producto solicitado</h1>'))
            }
        })

}

function editProduct(req, res) {

    const id = req.params.idProduct

    const product = {
        name: req.body.name,
        price: req.body.price,
        description: req.body.description
    }

    console.log(product)

    service.editProduct(id, product)
        .then(function (product) {
            if (product) {
                res.send(view.createPage('Producto Modificado', `<h2>Producto #${product.id} modificado con exito!</h2>`))
            }
            else {
                res.send(view.createPage('No se encontro!', '<h1>No se encontro el producto solicitado</h1>'))
            }
        })
}

function deleteProductForm(req, res) {
    const id = req.params.idProduct

    service.getProductById(id)
        .then(function (product) {
            if (product) {
                res.send(view.createDeleteProductFormPage(product))
            }
            else {
                res.send(view.createPage('No se encontro!', '<h1>No se encontro el producto solicitado</h1>'))
            }
        })

}

function deleteProduct(req, res) {
    const id = req.params.idProduct

    service.deleteProduct(id)
        .then(function (product) {
            if (product) {
                res.send(view.createPage('Producto Eliminado', `<h2>Producto #${product.id} eliminado con exito!</h2>`))
            }
            else {
                res.send(view.createPage('No se encontro!', '<h1>No se encontro el producto solicitado</h1>'))
            }
        })
}

export {
    getProducts,
    getProductById,
    createProductFormPage,
    createProduct,
    editProductForm,
    editProduct,
    deleteProduct,
    deleteProductForm
}
