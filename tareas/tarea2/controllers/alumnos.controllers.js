import * as service from '../services/alumnos.services.js';
import * as view from '../views/alumnos.views.js';

function getAlumnos(req, res) {

    service.getAlumnos()
        .then(function (alumnos){
            res.send(view.createAlumnosListPage(alumnos))
        })
};

function getAlumnoByLegajo(req, res) {
    let AlumnoLegajo = req.params.AlumnoLegajo 

    service.getAlumnoByLegajo(AlumnoLegajo)
        .then(function (alumno) {
            if (alumno) {
                res.send(view.createAlumnoPage(alumno))
            }
            else {
                res.send(view.createPage('Error', '<p>Alumno no encontrado</p>'))
            }
        })
}

function createAlumnoNuevo(req, res) {
    res.send(view.createAlumnoNuevo())
}

function createAlumno(req, res) {
    const alumno = {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        año: req.body.año,
        legajo: req.body.legajo,
    }

    service.createAlumno(alumno)
        .then(function (nuevoAlumno) {
            res.send(view.createPage('Alumno nuevo creado con exito', `<p>Alumno: ${nuevoAlumno.nombre} creado con el legajo ${nuevoAlumno.legajo}</p>`))
        })
        .catch(function (error) {
            res.send(view.createPage('Error', `<p>Ocurrio un error</p>`))
        })

}

function editarAlumnoPage(req, res) {

    const legajo = req.params.AlumnoLegajo

    service.getAlumnoByLegajo(legajo)
        .then(function (alumno) {
            if (alumno) {
                res.send(view.editarAlumnoPage(alumno))
            }
            else {
                res.send(view.createPage('<h1>No se encontro el alumno buscado</h1>'))
            }
        })

}

function editarAlumno(req, res) {

    const legajo = req.params.AlumnoLegajo

    const alumno = {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        año: req.body.año
    }

    service.editarAlumno(legajo, alumno)
        .then(function (alumno) {
            if (alumno) {
                res.send(view.createPage('Alumno Modificado', `<h2>El alumno con legajo #${alumno.legajo} fue modificado con exito!</h2>`))
            }
            else {
                res.send(view.createPage('<h1>No se encontro el alumno solicitado</h1>'))
            }
        })
}

function borrarAlumnoPage(req, res) {
    const legajo = req.params.AlumnoLegajo

    service.getAlumnoByLegajo(legajo)
        .then(function (alumno) {
            if (alumno) {
                res.send(view.borrarAlumnoPage(alumno))
            }
            else {
                res.send(view.createPage('<h1>No se encontro el alumno solicitado</h1>'))
            }
        })

}

function borrarAlumno(req, res) {
    const legajo = req.params.AlumnoLegajo

    service.borrarAlumno(legajo)
        .then(function (alumno) {
            if (alumno) {
                res.send(view.createPage('Alumno Eliminado', `<h2>El alumno con legajo #${alumno.legajo} fue eliminado con exito!</h2>`))
            }
            else {
                res.send(view.createPage('<h1>No se encontro el producto solicitado</h1>'))
            }
        })
}

export {
    getAlumnos,
    getAlumnoByLegajo,
    createAlumnoNuevo,
    createAlumno,
    editarAlumnoPage,
    editarAlumno,
    borrarAlumnoPage,
    borrarAlumno
}