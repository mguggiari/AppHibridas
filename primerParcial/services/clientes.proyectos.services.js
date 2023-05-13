
import {MongoClient, ObjectId} from 'mongodb'

const client = new MongoClient('mongodb://127.0.0.1:27017')
const db = client.db('AH20231CP1')

async function getProyectos(idCliente){
    await client.connect()
    return db.collection("Cliente_Projects").findOne({idCliente: new ObjectId(idCliente)})
}

async function crearProyecto(proyecto) {
    await client.connect()
    await db.collection("Projects").insertOne(proyecto)
    //console.log(proyecto, idCliente)
    
    const clienteExiste = await db.collection("Cliente_Projects").findOne({ idCliente: new ObjectId(proyecto.idCliente) })
    //console.log(clienteExiste)

    if(clienteExiste){
        await db.collection("Cliente_Projects").updateOne(
            { idCliente : new ObjectId(proyecto.idCliente) },
            { $push: { proyectos: proyecto } }
        )
    }    
    else {
        await db.collection("Cliente_Projects").insertOne({ idCliente: new ObjectId(proyecto.idCliente), proyecto})
    }

    return proyecto
}



export {   
    getProyectos,
    crearProyecto
}