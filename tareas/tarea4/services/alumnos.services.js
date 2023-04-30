
import { MongoClient, ObjectId } from 'mongodb'

const client = new MongoClient("mongodb://127.0.0.1:27017")
const db = client.db("DB_AHN")

async function getAlumnos(filter = {}) {
    await client.connect()
    return db.collection("students").find({ deleted: { $ne: true } }).toArray()
}

async function getAlumnoByLegajo(legajo) {
    await client.connect()
    return db.collection("students").findOne({ _id: new ObjectId(legajo) })
}

async function createAlumno(alumno) {
    await client.connect()
    await db.collection("students").insertOne(alumno)
    return alumno
}

async function editarAlumno(AlumnoLegajo, alumno) {
    await client.connect()
    await db.collection("students").updateOne({ _id: new ObjectId(AlumnoLegajo) }, { $set: alumno })
    return alumno
}

async function borrarAlumno(AlumnoLegajo) {
    await client.connect()
    await db.collection("products").deleteOne({ _id: new ObjectId(AlumnoLegajo) })

    return {
        legajo: AlumnoLegajo
    }
}

export {
    getAlumnos,
    getAlumnoByLegajo,
    createAlumno,
    editarAlumno,
    borrarAlumno
}