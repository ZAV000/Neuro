// Seleccionar el ícono flotante
const floatingIcon = document.getElementById("floatingIcon");

// Validar si el ícono flotante existe
if (floatingIcon) {
  // Mostrar el ícono cuando el usuario haga scroll
  window.onscroll = function () {
    if (window.pageYOffset > 100) {
      floatingIcon.style.display = "flex"; // Mostrar el ícono
    } else {
      floatingIcon.style.display = "none"; // Ocultar el ícono
    }
  };
}