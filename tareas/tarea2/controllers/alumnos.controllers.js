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


export {
    getAlumnos,
    getAlumnoByLegajo
}