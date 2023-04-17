//dependen de la vista
//importa todo el modulo y lo exporta generando un objeto
import * as service from '../services/products.services.js';
import * as view from '../views/products.views.js';

function getProducts(req, res) {
    //es una funcion del modulo servicio
    service.getProducts()
        //lo que llega a este then es lo que se resuelve en la promesa de la funcion getProducts
        .then(function (products){
            res.send(view.createProductListPage(products))
        })
};

function getProductById(req, res) {
    //obtener el id
    let idProduct = req.params.idProduct
    
    //funcion que nos trae el producto
    //salir a buscarlo 
    service.getProductById(idProduct)
        // en product voy a recibir un producto en caso de ser encontrado (getProductById(idProduct) 
        .then(function (product){
            if(product){
                //lo envia al cliente - nos muestra el detalle del producto
                res.send(view.createProductPage(product))
            }
            else{
                //o null en caso de no ser encontrado - 404
                res.send(view.createPage('Error', '<p>Producto no encontrado</p>'))
            }
        })
};

function createProductFormPage(req, res) {  
    res.send(view.createProductFormPage())
}

function createProduct(req, res) {  
    const product = { 
        name: req.body.name,
        description: req.body.description,
        price: req.body.price
    }
    //servicio se encarga de asignarle un id al nuevo producto
    service.createProduct(product)
    .then(function(newProduct){
        res.send(view.createPage('Producto creado', `<p>Producto ${newProduct.name} creado con exito ${newProduct.id} </p>`))
    })
    .catch(function(error){
        res.send(view.createPage('Error', `<p>Se produjo un error al crear el producto</p>`))
    })
}   

export {
    getProducts,
    getProductById,
    createProductFormPage,
    createProduct
}