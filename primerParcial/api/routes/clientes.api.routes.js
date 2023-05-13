
import { Router } from "express"
import * as controller from '../controllers/clientes.api.controllers.js'

import ClienteProyectosRoute from './clientes.proyectos.api.routes.js'
import ProyectosRoute from './proyectos.api.routes.js'

const route = Router()

route.get('/clientes', controller.allClientes)
route.post('/clientes', controller.crearCliente)

route.use(ClienteProyectosRoute)
route.use(ProyectosRoute)

export default route