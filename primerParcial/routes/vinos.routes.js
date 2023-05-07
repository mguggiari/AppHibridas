
import express from 'express'
import * as controller from '../controllers/vinos.controllers.js';

const route = express.Router();

//route.get('/vinos', controller.getAllVinos)

route.get('/vinos/:uva', controller.getVinoByUva);

export default route