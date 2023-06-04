let boton = document.getElementById('contador')
let cant = boton.getAttribute('data-initial')
boton.textContent = cant

boton.addEventListener('click', function () {
    if (cant < boton.getAttribute('data-finaly')) {
        cant++
        boton.textContent = cant
    }

})


let boton2 = document.getElementById('contador2')
let cant2 = boton2.getAttribute('data-initial')
boton2.textContent = cant2

boton2.addEventListener('click', function () {
    if (cant2 < boton2.getAttribute('data-finaly')) {
        cant2++
        boton2.textContent = cant2
    }

})