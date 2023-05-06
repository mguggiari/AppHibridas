
import {MongoClient} from 'mongodb';

const client = new MongoClient("mongodb://127.0.0.1:27017");

client.connect()
    .then(function(){
        console.log("Conectado a la base de datos");
        const db = client.db("DB_AHN");
        db.collection("Col").insertOne({
            name: "node"
        })
    })
    .catch(function(){
        console.log("ups ocurrio un error");
    });