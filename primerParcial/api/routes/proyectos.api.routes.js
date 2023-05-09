import { Router } from 'express'
import * as controller from '../controllers/proyectos.api.controllers.js'

const route = Router()

route.get('/vinos', controller.getAllSections) 

export default route