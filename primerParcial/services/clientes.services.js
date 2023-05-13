
import {MongoClient} from 'mongodb';

const client = new MongoClient('mongodb://127.0.0.1:27017');
const db = client.db('AH20231CP1');

async function allClientes(){
    await client.connect()
    return db.collection("Cliente").find().toArray()
}

async function clienteId(idCliente){ 
    await client.connect()
    return db.collection("Cliente").findOne({  _id: new ObjectId(idCliente)})
}

async function crearCliente(cliente) {
    await client.connect()

    db.collection("Cliente").insertOne(cliente)

    return cliente
}

export {
    allClientes,
    clienteId,
    crearCliente
}