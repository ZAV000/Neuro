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

  // Obtén el ícono y el header
  const floatingIcon = document.getElementById("floatingIcon");
  const header = document.querySelector("header"); // Ajusta si el selector de header cambia

  // Cuando se haga scroll en la página
  window.onscroll = function() {
    // Si el desplazamiento es mayor que la altura del header, mostrar el ícono
    if (window.pageYOffset > header.offsetHeight) {
      floatingIcon.style.display = "flex"; // Mostrar el ícono
    } else {
      floatingIcon.style.display = "none"; // Ocultar el ícono
    }
  };

// Seleccionar elementos
const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector("nav ul");
const menuItems = document.querySelectorAll("nav ul li");

// Alternar visibilidad del menú principal
hamburger.addEventListener("click", () => {
    menu.classList.toggle("show");
});

// Mostrar y ocultar submenús
menuItems.forEach((item) => {
    const submenu = item.querySelector("ul");

    if (submenu) {
        item.addEventListener("click", (e) => {
            e.stopPropagation();

            // Ocultar otros submenús
            menuItems.forEach((i) => {
                if (i !== item) i.classList.remove("show-submenu");
            });

            // Alternar submenú actual
            item.classList.toggle("show-submenu");
        });
    }
});

// Cerrar el menú al hacer clic en un enlace
menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
        menu.classList.remove("show");
    });
});

