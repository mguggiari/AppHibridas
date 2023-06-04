import { MongoClient, ObjectId } from 'mongodb'

const client = new MongoClient("mongodb://127.0.0.1:27017")
const db = client.db("DB_AHN")
const productReviews = db.collection('product_reviews')

async function getReviews(idProduct) {
    await client.connect()
    return productReviews.findOne({ product_id: new ObjectId(idProduct) })
}

async function createReview(idProduct, review) {
    await client.connect()

    // productReviews.insertOne({product_id: idProduct, reviews: [review] })
    const update = await productReviews.updateOne(
        { product_id: new ObjectId(idProduct) },
        { $push: { reviews: review } }
    )

    if (update.matchedCount == 0) {
        await productReviews.insertOne({ product_id: new ObjectId(idProduct), reviews: [review] })
    }

    console.log(update)

    return review
}

export {
    getReviews,
    createReview
}