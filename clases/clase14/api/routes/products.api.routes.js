import { Router } from 'express'
import * as controller from '../controllers/products.api.controllers.js'

const route = Router()

//usamos get y la URI 
//route.[verbos HTTP]('[URI]', [funcion que se ejecuta cuando se llama a esa URI])
// /products esta identificando la lista completa de productos 
route.get('/products', controller.getProducts) //dame la lista de prod
route.post('/products', controller.createProduct) //agregame prod 

route.get('/products/:idProduct', controller.getProductById) //traeme el que tiene el id que le paso
route.put('/products/:idProduct', controller.replaceProduct) //actualiza el que tiene el id que le paso
route.patch('/products/:idProduct', controller.updateProduct) //actualiza el que tiene el id que le paso
route.delete('/products/:idProduct', controller.deleteProduct)

export default route