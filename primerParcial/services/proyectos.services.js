
import {MongoClient, ObjectId} from 'mongodb';

const client = new MongoClient('mongodb://127.0.0.1:27017');
const db = client.db('AH20231CP1');

async function getAllProyectos(){
    await client.connect()
    return db.collection("Projects").find().toArray()
}

async function getProyectoBySeccion(section){
    //console.log(section)
    await client.connect()
    return db.collection("Projects").find({section}).toArray()
}

async function modificarProyecto(idProduct, product) {
    await client.connect()
    await db.collection("Projects").updateOne({ _id: new ObjectId(idProduct) }, { $set: product })
    return product
}


export {
    getAllProyectos,
    getProyectoBySeccion,
    
}