//import, const app, app.use(express.urlencoded({extended: true}));app.use('/', express.static('public')); app.listen(2023, function() LINEAS BÁSICAS PARA PROYECTO EN EXPRESS

import express from 'express'
import ProductRoute from './routes/products.routes.js' //ruta pag web
import ProductRouteApi from './api/routes/products.api.routes.js'

const app = express(); 

app.use(express.urlencoded({extended: true}))
app.use('/api', express.json()) // interpreta el body como json 
app.use('/', express.static('public'))

app.use(ProductRoute)
app.use('/api', ProductRouteApi)

app.listen(2023, function() {
    console.log('Servidor corriendo en el puerto 2023');
})