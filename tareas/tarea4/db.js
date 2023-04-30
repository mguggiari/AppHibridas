//primero conectarse, despues que base de datos vamos a usar 
import {MongoClient} from 'mongodb'

const client = new MongoClient("mongodb://127.0.0.1:27017")

client.connect()
    .then(function(){
        console.log("Conectado a la base de datos")
        //la crea en caso de que no exista y sino la usa 
        const db = client.db("DB_AHN")
    })
    .catch(function(){
        console.log("ups ocurrio un error")
    });