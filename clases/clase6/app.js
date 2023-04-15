import express from 'express';
//modulo que ayuda con las rutas
import path from 'path';

//variable esta dentro del servidor 
let contador = 0;

const app = express(); // el server se crea con express

//para que express entienda los datos que llegan desde el body (cuerpo de la peticion)
app.use(express.urlencoded({extended: true})); 

//cada vez que llegue algo que este desde la home fijate si no es un contenido estatico(css, html, js, imagenes, etc)
app.use('/', express.static('public')); //solicitud dinamica

//app agrego solicitud (get), hacia el home (/) y esta es la funcion 
// que se va a ejecutar cada vez que llege una soliciud a (/)
//no es necesario hacer el end. lo hace el send, escribe y cierra la conexion
//solicitudes de recursos dinamicos (paginas dinamicas), el ejemplo es el contador
app.get('/', function(req, res){
    res.send('Hola mundo');
})

app.get('/hola.html', function(req, res){
    //path.resolve()->working directory = clase 6, donde esta el archivo app.js
    res.sendFile(path.resolve('public/hola.html'))
})

app.get('/contador', function(req, res){
    //network -> contador -> preview
    contador++;
    res.send(`Contador: ${contador}`);
})

//GET: URL - Query String - obtener el recurso 
//POST: Body (cuerpo de la peticion(request)) - crear//enviar un recurso 

app.get('/saludo', function(req, res){
    //query.params = nombre = ?nombre
    //payload-> datos que se estan enviando (network)
    const nombre = req.query.nombre;
    res.send(`Hola ${nombre}`);
})

app.post('/saludo', function(req, res){
    //request body 
    const nombre = req.body.nombre;
    res.send(`Hola ${nombre}`);
})

app.listen(2023, function() {
    console.log('Servidor corriendo en el puerto 2023');
})