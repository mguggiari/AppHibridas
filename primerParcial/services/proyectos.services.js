
import {MongoClient, ObjectId} from 'mongodb';

const client = new MongoClient('mongodb://127.0.0.1:27017');
const db = client.db('AH20231CP1');

async function allProyectos(filtro = {}){
    await client.connect()

    const filtroMongo = {};
    
    if (filtro?.section) {
        filtroMongo.section = filtro.section;
    }

    if(filtro?.technologies){
        filtroMongo.$text = {$search: filtro.technologies}
    }

    return db.collection("Projects").find(filtroMongo).toArray()
}

async function proyectoBySeccion(section){
    await client.connect()
    return db.collection("Projects").find({section}).toArray()
}

async function nuevoProyecto(proyecto) {
    await client.connect()
    await db.collection("Projects").insertOne(proyecto)
    return proyecto
}

async function modificarProyecto(proyectoId, proyecto) {
    console.log(proyectoId, proyecto)
    await client.connect()
    await db.collection("Projects").updateOne({ _id: new ObjectId(proyectoId) }, { $set: proyecto })
    return proyecto
}

async function eliminarProyecto(proyectoId) {
    await client.connect()
    await db.collection("Projects").deleteOne({ _id: new ObjectId(proyectoId) })

    return {
        id: proyectoId
    }
}

async function proyectoById(proyectoId){
    await client.connect()
    return db.collection("Projects").findOne({ _id: new ObjectId(proyectoId) })
}

export {
    allProyectos,
    proyectoBySeccion,
    proyectoById,
    nuevoProyecto,
    modificarProyecto,
    eliminarProyecto,
}