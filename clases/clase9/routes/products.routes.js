
import express from 'express'
import * as controller from '../controllers/products.controllers.js ';

const route = express.Router();

route.get('/products', controller.getProducts)

//si le pongo los dos puntos estoy indicando que tiene que venir product/"algo" y ese "algo", lo identificamos como idProduct. lo conocemos como PARAMETROS de URL 
//patron de la url que va ser atendido es la funcion 
//request.params tiene todos los parametros que nosotros ponemos aca/products/:(url) - idProduct -> identificador del parametro, viene despues de la segunda /
///products/:idProduct/:idCat -> /products/1/2

route.get('/products/:idProduct', controller.getProductById)

export default route