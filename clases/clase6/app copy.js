
// ES6 module
import http from 'node:http'
import { createPage, createProductList } from './pages/utils.js' // importamos el modulo pages (export default)
import products from './data/products.js'

// response.write() - escribe en el body del mensaje de respuesta
const server = http.createServer(function (req, res) {

    if (req.url === '/') {
        res.write(createPage('Home', '<p>Brian Lara</p>'))
    }
    else if (req.url === '/materia') {
        res.write(createPage('Materia', '<p>Aplicacines Hibridas</p>'))
    }
    else if (req.url === '/profesor') {
        res.write(createPage('Profesor', '<p>Lic. Brian Lara</p>'))
    }
    else if (req.url === '/productos') {
        res.write(createPage('Lista de productos', createProductList(products)))
    }
    else {
        res.write(createPage('Pagina no encontrada', '<p>404 Not Found</p>'))
    }

    res.end()
})

server.listen(2022)
