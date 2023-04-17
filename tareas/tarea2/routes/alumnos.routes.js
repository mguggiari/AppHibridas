
import express from 'express'
import * as controller from '../controllers/alumnos.controllers.js';

const route = express.Router();

route.get('/', controller.getAlumnos)
route.get('/alumnos', controller.getAlumnos)
route.get('/alumnos/:legajoAlumno', controller.getAlumnoByLegajo)

export default route