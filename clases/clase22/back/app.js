import express from 'express'
import ProductRoute from './routes/products.routes.js'
import ProductRouteApi from './api/routes/products.api.routes.js'
import AccountRoute from './api/routes/account.api.routes.js'
import cors from 'cors'

const app = express() // el server
app.use(cors())

app.use(express.urlencoded({ extended: true })) // para poder leer el body de las solicitudes POST de un formulario
app.use('/api', express.json()) // interpreta el body como JSON

app.use('/', express.static('public'))

app.use('/', ProductRoute)
app.use('/api', ProductRouteApi)
app.use('/api', AccountRoute)

app.listen(2023, function () {
    console.log('Servidor levantado! http://localhost:2023')
})
