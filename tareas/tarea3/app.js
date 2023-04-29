//import, const app, app.use(express.urlencoded({extended: true}));app.use('/', express.static('public')); app.listen(2023, function() LINEAS BÁSICAS PARA PROYECTO EN EXPRESS

import express from 'express';
import AlumnosRoute from './routes/alumnos.routes.js';
import StudentsRouteApi from './api/routes/alumnos.api.routes.js'

const app = express(); 

app.use(express.urlencoded({extended: true})); 
app.use('/api', express.json())

app.use('/', express.static('public')); 

app.use('/', AlumnosRoute)
app.use('/api', StudentsRouteApi)

app.listen(2023, function() {
    console.log('Servidor corriendo en el puerto 2023');
})