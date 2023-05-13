
import express from 'express'
import ProjectsRoute from './routes/proyectos.routes.js'
import ProjectsRouteApi from './api/routes/proyectos.api.routes.js'

const app = express(); 

app.use(express.urlencoded({extended: true}))

app.use('/api', express.json()) 
app.use('/', express.static('public'))
app.use('/public/img/',express.static('img/logo.png'))

app.use('/', ProjectsRoute)
app.use('/api', ProjectsRouteApi)

app.listen(2222, function() {
    console.log('Servidor corriendo con éxito: http://localhost:2222');
})