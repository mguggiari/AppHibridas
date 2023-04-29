
import { readFile, writeFile } from 'node:fs/promises';

async function getAlumnos(filter = {}) {
    //obtiene los alumnos
    //lee el archivo y pasarlo array para poder devolverlo
    return readFile('./data/alumnos.json')
        .then(function (data){
            return JSON.parse(data); 
        })
        .then(function (alumnos) {
            if (filter.deleted) {
                const alumnosFilter = []

                for (let i = 0; i < alumnos.length; i++) {
                    if (!alumnos[i].deleted) {
                        alumnosFilter.push(alumnos[i])
                    }
                }

                return alumnosFilter
            }
            else {
                return alumnos
            }
        })
        .catch( function (err){
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

    await guardarAlumnos(alumnos)

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

async function borrarAlumno(AlumnoLegajo) {
    const alumnos = await getAlumnos()
    let alumnoEliminado = null

    for (let i = 0; i < alumnos.length; i++) {
        if (alumnos[i].legajo == AlumnoLegajo) {
            alumnos[i].deleted = true

            alumnoEliminado = alumnos[i]
            break;
        }
    }

    if (alumnoEliminado) {
        await guardarAlumnos(alumnos)
    }

    return alumnoEliminado
}

export {
    getAlumnos,
    getAlumnoByLegajo,
    createAlumno,
    editarAlumno,
    borrarAlumno
}