
import express from 'express'
import WinesRoute from './routes/vinos.routes.js'

const app = express(); 

app.use(express.urlencoded({extended: true}))
// app.use('/api', express.json()) 
app.use('/', express.static('public'))

app.use('/', WinesRoute)
// app.use('/api', )

app.listen(2222, function() {
    console.log('Servidor corriendo con éxito: http://localhost:2222');
})