import { Router } from 'express'
import * as controller from '../controllers/products.api.controllers.js'
import ReviewsRoute from './products.reviews.routes.js'
import { validateProduct, validateProductUpdate } from '../../middlewares/products.validate.middleware.js'

const route = Router()

function accedeATodos(req, res, next) {
    console.log("Accediendo a productos")
    next()
}

route.use('/products', accedeATodos)

route.get('/products', controller.getProducts)
route.post('/products', [validateProduct], controller.createProduct)

route.all('/products/:idProduct', function (req, res, next) {
    console.log("Esta accediendo al producto #" + req.params.idProduct)
    next();
})

route.get('/products/:idProduct', controller.getProductById)
route.put('/products/:idProduct', [validateProduct], controller.replaceProduct)
route.patch('/products/:idProduct', [validateProductUpdate], controller.updateProduct)
route.delete('/products/:idProduct', controller.deleteProduct)

route.use(ReviewsRoute)


export default route