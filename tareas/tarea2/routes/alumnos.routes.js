
import express from 'express'
import * as controller from '../controllers/alumnos.controllers.js';

const route = express.Router();

route.get('/alumnos', controller.getAlumnos)

route.get('/alumnos/nuevo', controller.createAlumnoNuevo)
route.post('/alumnos/nuevo', controller.createAlumno)

route.get('/alumnos/:AlumnoLegajo/editar', controller.editarAlumnoPage)
route.post('/alumnos/:AlumnoLegajo/editar', controller.editarAlumno)

route.get('/alumnos/:AlumnoLegajo/borrar', controller.borrarAlumnoPage)
route.post('/alumnos/:AlumnoLegajo/borrar', controller.borrarAlumno)

route.get('/alumnos/:AlumnoLegajo', controller.getAlumnoByLegajo)

export default route