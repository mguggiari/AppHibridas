
import express from 'express'
import ProjectsRoute from './routes/proyectos.routes.js'
// import WinesRouteApi from './api/routes/vinos.api.routes.js'

const app = express(); 

app.use(express.urlencoded({extended: true}))
app.use('/api', express.json()) 
app.use('/', express.static('public'))

app.use('/', ProjectsRoute)
//app.use('/api', WinesRouteApi)

app.listen(2222, function() {
    console.log('Servidor corriendo con éxito: http://localhost:2222');
})