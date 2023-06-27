function mostrarImg() {
    var select = document.getElementById("opcMaterialCatalg");
    var imgCotizarCatalogo = document.getElementById("imgCotizarCatalogo");
  
    // Obtener el valor seleccionado del menú desplegable
    var selectedValue = select.value;
  
    // Mostrar la imagen correspondiente según la opción seleccionada
    if (selectedValue === "1") {
        imgCotizarCatalogo.src = "../recursos/catalogo/-plastico.jpg";
    } else if (selectedValue === "2") {
        imgCotizarCatalogo.src = "../recursos/catalogo/vaso-carton.jpg";
    } else if (selectedValue === "3") {
        imgCotizarCatalogo.src = "../recursos/catalogo/bolsa-tnt.jpg";
    } else {
      // Si no se selecciona ninguna opción o se selecciona "Seleccionar..."
      imgCotizarCatalogo.src = "../recursos/cotizar-catalogo.jpg";
    }
  
    // Mostrar la imagen si se selecciona una opción válida, ocultarla de lo contrario
    if (selectedValue !== "Seleccionar...") {
        imgCotizarCatalogo.style.display = "block";
    } else {
        imgCotizarCatalogo.style.display = "none";
    }
  }
  