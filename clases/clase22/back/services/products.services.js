import { MongoClient, ObjectId } from 'mongodb'

const client = new MongoClient("mongodb://127.0.0.1:27017")
const db = client.db("DB_AHN")

async function getProducts(filter = {}) {
    await client.connect()

    const filterMongo = { deleted: { $ne: true } }

    if (filter?.price_min && filter?.price_max) {
        filterMongo.$and = [{ price: { $gte: parseInt(filter.price_min) } }, { price: { $lte: parseInt(filter.price_max) } }]
    }
    else if (filter?.price_min) {
        filterMongo.price = { $gte: parseInt(filter.price_min) }
    }
    else if (filter?.price_max) {
        filterMongo.price = { $lte: parseInt(filter.price_max) }
    }

    if (filter?.description) {
        filterMongo.$text = { $search: filter.description }
    }

    if (filter?.tags) {
        filterMongo.tags = { $all: filter.tags.split(";") }
    }


    return db.collection("products").find(filterMongo).toArray()
}

async function getProductById(id) {
    await client.connect()
    return db.collection("products").findOne({ _id: new ObjectId(id) })
}

async function createProduct(product) {
    await client.connect()
    await db.collection("products").insertOne(product)
    return product
}

async function editProduct(idProduct, product) {
    await client.connect()
    await db.collection("products").updateOne({ _id: new ObjectId(idProduct) }, { $set: product })
    return product
}

async function replaceProduct(idProduct, product) {
    await client.connect()
    await db.collection("products").replaceOne({ _id: new ObjectId(idProduct) }, product)
    return product
}

async function deleteProduct(idProduct) {
    await client.connect()
    await db.collection("products").deleteOne({ _id: new ObjectId(idProduct) })

    return {
        id: idProduct
    }
}

export {
    getProducts,
    getProductById,
    createProduct,
    editProduct,
    deleteProduct,
    replaceProduct
}