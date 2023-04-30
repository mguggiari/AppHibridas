import * as service from '../../services/alumnos.services.js'

function getAlumnos(req, res) {
    service.getAlumnos({ deleted: true })
        .then(function (alumnos) {
            res.status(200).json(alumnos) // 200 OK
        })
}

function crearAlumno(req, res) {
    const alumno = {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        año: req.body.año
    }

    service.createAlumno(alumno)
        .then(function (alumno) {
            res.status(201).json(alumno) // 201 Creado
        })
}

function getAlumnoByLegajo(req, res) {
    const AlumnoLegajo = req.params.AlumnoLegajo

    service.getAlumnoByLegajo(AlumnoLegajo)
        .then(function (alumno) {
            if (alumno) {
                res.status(200).json(alumno)
            }
            else {
                res.status(404).json({ error: { message: `No se encuentra el alumno #${AlumnoLegajo}` } })
            }
        })
}

function eliminarAlumno(req, res) {
    const AlumnoLegajo = req.params.AlumnoLegajo

    service.borrarAlumno(AlumnoLegajo)
        .then(function (alumno) {
            if (alumno) {
                res.status(200).json(alumno)
            }
            else {
                res.status(404).json({ error: { message: `No se encuentra el alumno #${AlumnoLegajo}` } })
            }
        })
}

function actualizarAlumno(req, res) {
    const AlumnoLegajo = req.params.AlumnoLegajo

    const alumno = {}

    if (req.body.nombre) {
        alumno.nombre = req.body.nombre
    }

    if (req.body.apellido) {
        alumno.apellido = req.body.apellido
    }

    if (req.body.año) {
        alumno.año = req.body.año
    }

    service.editarAlumno(AlumnoLegajo, alumno)
        .then(function (alumno) {
            if (alumno) {
                res.status(200).json(alumno)
            }
            else {
                res.status(404).json({ error: { message: `No se encuentra el alumno #${AlumnoLegajo}` } })
            }
        })

}

export{
    getAlumnos,
    crearAlumno,
    getAlumnoByLegajo,
    eliminarAlumno,
    actualizarAlumno
}