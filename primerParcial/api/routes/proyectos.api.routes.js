import { Router } from 'express'
import * as controller from '../controllers/proyectos.api.controllers.js'

const route = Router()

route.get('/proyectos', controller.getAllProyectos) 
route.post('/proyectos', controller.nuevoProyecto) 
route.get('/proyectos/:tipoSeccion', controller.getSection)
route.patch('/proyectos/:proyectoId', controller.modificarProyecto) 
route.delete('/products/:proyectoId', controller.eliminarProyecto)

export default route