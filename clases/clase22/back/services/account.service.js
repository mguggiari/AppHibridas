import { MongoClient, ObjectId } from 'mongodb'
import bcrypt from 'bcrypt'

const client = new MongoClient("mongodb://127.0.0.1:27017")
const db = client.db("DB_AHN")
const accountsCollection = db.collection('accounts')


async function createAccount(account) {
    await client.connect()

    const accountExist = await accountsCollection.findOne({ userName: account.userName })

    if (accountExist) {
        throw new Error('La cuenta ya existe')
    }

    const newAccount = { ...account }

    const salt = await bcrypt.genSalt(10)

    newAccount.password = await bcrypt.hash(account.password, salt)

    await accountsCollection.insertOne(newAccount)
}


async function login(account) {
    await client.connect()

    const accountExist = await accountsCollection.findOne({ userName: account.userName })

    if (!accountExist) {
        throw new Error('La cuenta no existe')
    }

    const isMatch = await bcrypt.compare(account.password, accountExist.password)

    if (!isMatch) {
        throw new Error('Password incorrecto')
    }

    return { ...accountExist, password: undefined }

}

export {
    createAccount,
    login
}