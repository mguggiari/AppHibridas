
import { Router } from "express"
import * as controller from '../controllers/clientes.proyectos.api.controllers.js'

const route = Router()

route.get('/clientes/:idCliente/proyecto', controller.getProyectos)
route.post('/clientes/:idCliente/proyecto', controller.crearProyecto)

export default route