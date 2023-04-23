//modulo que se encarga de manipular los datos

import {readFile, writeFile} from 'node:fs/promises';

async function getProducts(filter={}) {
    //obtiene los productos
    //lee el archivo y pasarlo array para poder devolverlo
    return readFile('./data/products.json')
        .then(function (data){
            return JSON.parse(data); //convertir a objeto - json es un string
        })
        .then(function (products){
            if(filter.deleted){
                const productFilter = []   
                for(let i = 0; i < products.length; i++){
                    if(!products[i].deleted){
                        productFilter.push(products[i])
                    }
                }  
                return productFilter
            }
            else {
                return products
            }
        })
        .catch( function (err){
            //si hay errror es factible que no exista el archivo
            return [];
        })
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