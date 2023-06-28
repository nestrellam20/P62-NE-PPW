function mostrarImagen() {
    var img = document.getElementById("imagen");
    img.src = "img/batux.png";
    img.style.display = "block";
  }

  function eliminarImagen() {
    var img = document.getElementById("imagen");
    img.style.display = "none";
    img.src = "";
  }