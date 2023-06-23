function cargar_elemento() {
    document.getElementById('figura')
    .style.display="block"
    document.getElementById('eliminar_elemento')
    .style.display="none"
}

function eliminar_elemento() {
    var container = document.getElementById('container')
    container.removeChild(container.lastElementChild)
}