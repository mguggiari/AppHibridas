import { MongoClient } from "mongodb"

// localhost IPv6 IPv4

const client = new MongoClient("mongodb://127.0.0.1:27017")
const db = client.db("DB_AHN")

client.connect()
    .then(function () {
        console.log("Coneccion exitosa!")

        db.collection("otra").insertOne({ name: "Node! otro dato!" })



    })
    .catch(function () {
        console.log("Coneccion incorrecta...")
    })