
import express from 'express'
import * as controller from '../controllers/alumnos.controllers.js';

const route = express.Router();

route.get('/alumnos', controller.getAlumnos)
route.get('/alumnos/:AlumnoLegajo', controller.getAlumnoByLegajo)

export default route