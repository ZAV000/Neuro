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

// Seleccionar los elementos necesarios
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");
const captionText = document.getElementById("caption");
const closeModal = document.querySelector(".close");

// Seleccionar la imagen
const clickableImage = document.querySelector(".clickable-image img");

// Abrir el modal cuando se hace clic en la imagen
clickableImage.addEventListener("click", function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
});

// Cerrar el modal cuando se haga clic en la "X"
closeModal.addEventListener("click", function () {
    modal.style.display = "none";
});

// También cerrar el modal al hacer clic fuera de la imagen
modal.addEventListener("click", function (e) {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});
