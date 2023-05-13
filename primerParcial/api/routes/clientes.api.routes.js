
import { Router } from "express"
import * as controller from '../controllers/clientes.api.controllers.js'

const route = Router()

route.get('/clientes', controller.allClientes)
route.post('/clientes', controller.crearCliente)
route.get('/clientes/:idCliente/proyectos', controller.getProyectobyCliente)

export default route