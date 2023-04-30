import { Router } from 'express'
import * as controller from '../controllers/student.api.controllers.js'

const route = Router()

route.get('/students', controller.getAlumnos)
route.post('/students', controller.crearAlumno)
route.get('/students/:AlumnoLegajo', controller.getAlumnoByLegajo)
route.delete('/students/:AlumnoLegajo', controller.eliminarAlumno)
route.patch('/students/:AlumnoLegajo', controller.actualizarAlumno)

export default route