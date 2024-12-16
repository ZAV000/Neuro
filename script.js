// Carrusel de imágenes
let currentSlide = 0;
const slides = document.querySelectorAll(".carousel-slide");
const totalSlides = slides.length;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.display = i === index ? "block" : "none";
  });
}

// Navegar por las diapositivas
document.querySelector(".prev").addEventListener("click", () => {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  showSlide(currentSlide);
});

document.querySelector(".next").addEventListener("click", () => {
  currentSlide = (currentSlide + 1) % totalSlides;
  showSlide(currentSlide);
});

// Mostrar la primera diapositiva al cargar la página
showSlide(currentSlide);

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


