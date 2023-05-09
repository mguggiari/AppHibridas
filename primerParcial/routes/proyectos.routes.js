
import express from 'express'
import * as controller from '../controllers/proyectos.controllers.js';

const route = express.Router();

route.get('/proyectos/:tipoSeccion', controller.getProyectoBySeccion);

export default route