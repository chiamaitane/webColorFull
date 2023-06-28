function showImage() {
    var radios = document.getElementsByName("inlineRadioOptions");
    var imageDisplay = document.getElementById("imageDisplay");

    // Recorrer los radios y encontrar el seleccionado
    for (var i = 0; i < radios.length; i++) {
      if (radios[i].checked) {
        var selectedValue = radios[i].value;

        // Mostrar la imagen correspondiente según la opción seleccionada
        if (selectedValue === "plastico") {
          imageDisplay.src = "../recursos/catalogo/vaso-plastico.jpg";
        } else if (selectedValue === "carton") {
          imageDisplay.src = "../recursos/catalogo/vaso-carton.jpg";
        } else if (selectedValue === "bolsas") {
          imageDisplay.src = "../recursos/catalogo/bolsa-tnt.jpg";
        }

        break; // Salir del bucle una vez encontrado el seleccionado
      }
    }
  }

  function updateImage(imageSrc) {
    var imageDisplay = document.getElementById("imageDisplay");
    imageDisplay.src = imageSrc;
  }
  