
import {MongoClient} from 'mongodb';

const client = new MongoClient("mongodb://127.0.0.1:27017");

client.connect()
    .then(function(){
        console.log("Conectado con exito");
        const db = client.db("AH20231CP1");
    })
    .catch(function(){
        console.log("Ocurrio un error");
    });