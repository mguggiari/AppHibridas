
import { readFile, writeFile } from 'node:fs/promises';

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

async function guardarAlumnos(alumnos) {
    return writeFile('./data/alumnos.json', JSON.stringify(alumnos))
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

async function createAlumno(alumno) {
    const alumnos = await getAlumnos()

    const nuevoAlumno = {
        ...alumno, 
        id: alumnos.length + 1
    }

    alumnos.push(nuevoAlumno)

    await writeFile('./data/alumnos.json', JSON.stringify(alumnos))

    return nuevoAlumno
}

async function editarAlumno(AlumnoLegajo, alumno) {
    const alumnos = await getAlumnos()
    let alumnoEditado = null

    for (let i = 0; i < alumnos.length; i++) {
        if (alumnos[i].legajo == AlumnoLegajo) {
            alumnos[i] = {
                ...alumno,
                legajo: alumnos[i].legajo
            }
            alumnoEditado = alumnos[i]
            break;
        }
    }

    if (alumnoEditado) {
        await guardarAlumnos(alumnos)
    }

    return alumnoEditado

}

export {
    getAlumnos,
    getAlumnoByLegajo,
    createAlumno,
    editarAlumno
}