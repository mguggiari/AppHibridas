
import {MongoClient, ObjectId} from 'mongodb';

const client = new MongoClient('mongodb://127.0.0.1:27017');
const db = client.db('AH20231CP1');

async function allProyectos(filtro = {}){
    await client.connect()

    const tecnologias = {}

    if(filtro?.technologies){
        tecnologias.$text = {$search: filtro.technologies}
    }

    return db.collection("Projects").find(tecnologias).toArray()
}

async function proyectoBySeccion(section){
    //console.log(section)
    await client.connect()
    return db.collection("Projects").find({section}).toArray()
}

async function proyectoByTechnologies(technologies){
    await client.connect()
    return db.collection("Projects").find({technologies}).toArray()
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


export {
    allProyectos,
    proyectoBySeccion,
    nuevoProyecto,
    modificarProyecto,
    eliminarProyecto
}