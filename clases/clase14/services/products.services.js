//modulo que se encarga de manipular los datos
//servicios dentro de la capa de modelo, "logica de negocio"
import {readFile, writeFile} from 'node:fs/promises';
import {MongoClient} from 'mongodb';

const client = new MongoClient('mongodb://127.0.0.1:27017');
const db = client.db('DB_AHN');

async function getProducts(){
    await client.connect()

    return db.collection("products").find().toArray()
}

async function saveProducts(products){
    return writeFile('./data/products.json', JSON.stringify(products))
}

async function getProductById(id){
    //me traigo los productos
    return getProducts()
        .then(function (products){
            //lo busca por id
            for(let i = 0; i < products.length; i++){
                if(products[i].id == id){
                    //si lo encuentro lo devuelvo -  termina la promesa
                    return products[i];
                }
            }
            //no lo encontro
            return null
        })
}

async function createProduct(product){
    //me traigo los productos
    const products = await getProducts()
    const newProduct = {
        ...product, //escribe todas las propiedades del objeto, spread operator
        //le asigno un id
        id: products.length + 1,
    }
    products.push(newProduct);
    await saveProducts(products)
    return newProduct;
} 

async function editProduct(idProduct, product){
    //traer el array, para: buscarlo, modificarlo y guardarlo 
    const products = await getProducts()
    let editedProduct = null;

    for(let i = 0; i < products.length; i++){
        if(products[i].id == idProduct){
            products[i] = {
                ...products[i],
                ...product,
                id: products[i].id
            }

            editedProduct = products[i]
            break;
        }
    }

    if(editedProduct){
        await saveProducts(products)
    }

    return editedProduct;
}    

async function deleteProduct(idProduct){
    const products = await getProducts()
    let deleteProduct = null;

    for(let i = 0; i < products.length; i++){
        if(products[i].id == idProduct){
            products[i].deleted = true
            deleteProduct = products[i]
            break;
        }
    }

    if(deleteProduct){
        await saveProducts(products)
    }

    return deleteProduct;
}

export {
    getProducts,   
    getProductById,
    createProduct,
    editProduct,
    deleteProduct
}