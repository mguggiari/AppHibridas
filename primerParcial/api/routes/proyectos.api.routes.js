import { Router } from 'express'
import * as controller from '../controllers/proyectos.api.controllers.js'

const route = Router()

route.get('/proyectos', controller.getAllProyectos) 
//route.post('/proyectos/:clienteId', controller.nuevoProyecto) 
route.get('/proyectos/:proyectoId', controller.getProyectoById)
route.patch('/proyectos/:proyectoId', controller.modificarProyecto) 
route.delete('/proyectos/:proyectoId', controller.eliminarProyecto)

export default route