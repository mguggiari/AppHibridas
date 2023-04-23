import * as service from '../../services/products.services.js'

function getProducts(req, res) {
    service.getProducts({deleted: true})
    .then(function(products){
        //se manda como json 
        res.status(200).json(products) //res.send(JSON.stringify(products)
    })
}

function createProduct(req, res) {
    const product = {
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
    }

    service.createProduct(product)
    .then(function(product){
        res.status(201).json(product) //creado
    })
}

function getProductById(req, res) {
    const id = req.params.idProduct
    service.getProductById(id)
    .then(function(product){
        if(product){
            res.status(200).json(product)
        }
        else{
            res.status(404).json({error:{message: `Producto no encontrado #${id}`}})
        }
    })
}

function replaceProduct(req, res) {
    //producto 
    const id = req.params.idProduct
    //remplazo
    const product = {
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
    }

    service.editProduct(id, product)
    .then(function(product){
        if(product){
            res.status(200).json(product)
        }
        else{
            res.status(404).json({error:{message: `el producto no se pudo editar #${id}`}})
        }
    })
}

function updateProduct(req, res) {
    //producto 
    const id = req.params.idProduct
    //remplazo
    const product = {}

    if(req.body.name){
        product.name = req.body.name
    }
    if(req.body.price){
        product.price = req.body.price
    }
    if(req.body.description){
        product.description = req.body.description
    }

    service.editProduct(id, product)
    .then(function(product){
        if(product){
            res.status(200).json(product)
        }
        else{
            res.status(404).json({error:{message: `el producto no se pudo editar #${id}`}})
        }
    })
}

function deleteProduct(req, res) {
    const id = req.params.idProduct
    service.deleteProduct(id)
    .then(function(product){
        if(product){
            res.status(200).json(product)
        }
        else{
            res.status(404).json({error:{message: `el producto no se pudo eliminar #${id}`}})
        }
    })
}

export{
    getProducts,
    createProduct,
    getProductById,
    replaceProduct,
    updateProduct,
    deleteProduct
}