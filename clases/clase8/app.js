
import express from 'express';
import ProductRoute from './routes/products.routes.js';

const app = express(); 

app.use(express.urlencoded({extended: true})); 
app.use('/', express.static('public')); 

app.use(ProductRoute)

app.listen(2023, function() {
    console.log('Servidor corriendo en el puerto 2023');
})