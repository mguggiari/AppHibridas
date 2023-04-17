//modulo que se encarga de manipular los datos

import {readFile, writeFile} from 'node:fs/promises';

async function getProducts() {
    //obtiene los productos
    //lee el archivo y pasarlo array para poder devolverlo
    return readFile('./data/products.json')
        .then(function (data){
            return JSON.parse(data); //convertir a objeto - json es un string
        })
        .catch( function (err){
            //si hay errror es factible que no exista el archivo
            return [];
        })
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
    await writeFile('./data/products.json', JSON.stringify(products))
    return newProduct;
} 

/* codigo "sucio"
async function createProduct(product){
    //me traigo los productos
    return getProducts()
        .then(function (products){
            let newProduct = {
                ...product,
                //le asigno un id
                id: products.length + 1,
            }
            //lo agrego al array
            products.push(newProduct);
            //lo guardo en el archivo
            return writeFile('./data/products.json', JSON.stringify(products))
        })
        .then(function (){
            //devuelvo el producto creado
            return product;
        })
} */
export {
    getProducts,   
    getProductById,
    createProduct
}