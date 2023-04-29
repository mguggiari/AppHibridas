
import {readFile} from 'node:fs/promises';

async function getAlumnos() {
    //obtiene los alumnos
    //lee el archivo y pasarlo array para poder devolverlo
    return readFile('./data/alumnos.json')
        .then(function (data){
            return JSON.parse(data); //convertir a objeto - json es un string
        })
        .catch( function (err){
            //si hay errror es factible que no exista el archivo
            return [];
        })
}

async function getAlumnoByLegajo(legajo) {
    return getAlumnos()
        .then(function (alumnos) {
            for (let i = 0; i < alumnos.length; i++) {
                if (alumnos[i].legajo == legajo) {
                    return alumnos[i]
                }
            }
            return null
        })
}

export {
    getAlumnos,
    getAlumnoByLegajo
}