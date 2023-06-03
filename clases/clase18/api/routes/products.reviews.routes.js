import { Router } from "express"
import * as controller from '../controllers/products.reviews.api.controllers.js'

const route = Router()

route.get('/products/:idProduct/reviews', controller.getReviews)
route.post('/products/:idProduct/reviews', controller.createReview)


export default route