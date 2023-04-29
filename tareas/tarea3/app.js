//import, const app, app.use(express.urlencoded({extended: true}));app.use('/', express.static('public')); app.listen(2023, function() LINEAS BÁSICAS PARA PROYECTO EN EXPRESS

import express from 'express';
import AlumnosRoute from './routes/alumnos.routes.js';

const app = express(); 

app.use(express.urlencoded({extended: true})); 
app.use('/', express.static('public')); 

app.use(AlumnosRoute)

app.listen(2023, function() {
    console.log('Servidor corriendo en el puerto 2023');
})