//modulo que se encarga de manipular los datos

import {readFile} from 'node:fs/promises';

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

export {
    getProducts,   
    getProductById
}