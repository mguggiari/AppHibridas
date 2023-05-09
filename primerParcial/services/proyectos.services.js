
import {MongoClient, ObjectId} from 'mongodb';

const client = new MongoClient('mongodb://127.0.0.1:27017');
const db = client.db('AH20231CP1');

async function getAllSections(filtro = {}){
    // let filtroMongo;

    // if(filtro?.maridaje){
    //     filtroMongo.$text = {$search: filtro.maridaje}	
    // }

    await client.connect()
    return db.collection("Projects").find().toArray()
}

async function getProyectoBySeccion(section){
    console.log(section)
    await client.connect()
    return db.collection("Projects").find({section}).toArray()
}

// async function getVinoById(){
//     await client.connect()
//     return db.collection("Wines").findOne({ _id: new ObjectId() })
// }

export {
    getAllSections,
    getProyectoBySeccion
}