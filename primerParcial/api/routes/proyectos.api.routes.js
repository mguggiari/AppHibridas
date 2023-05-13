import { Router } from 'express'
import * as controller from '../controllers/proyectos.api.controllers.js'
import ClientesRoute from './clientes.api.routes.js'

const route = Router()

route.get('/proyectos', controller.getAllProyectos) 
route.post('/proyectos', controller.nuevoProyecto) 
route.get('/proyectos/:proyectoId', controller.getProyectoById)
route.patch('/proyectos/:proyectoId', controller.modificarProyecto) 
route.delete('/proyectos/:proyectoId', controller.eliminarProyecto)

route.use(ClientesRoute)

export default route