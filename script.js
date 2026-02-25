function mostrar(id) {
    const secciones = document.querySelectorAll('.contenido'); //Busca las secciones cuya clase sea igual a "contenido"
    secciones.forEach(sec => sec.classList.remove('activo')); //Recorre la lista, y activa la seccion correspondiente mienstras oculta otra

    document.getElementById(id).classList.add('activo'); //Se muestra la seccion
}
