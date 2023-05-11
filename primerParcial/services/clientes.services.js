
import {MongoClient} from 'mongodb';

const client = new MongoClient('mongodb://127.0.0.1:27017');
const db = client.db('AH20231CP1');

async function allClientes(){
    await client.connect()
    return db.collection("Clientes").find().toArray()
}

export {
    allClientes
}