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

  // Función para alternar el menú
function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('show');
  }
  
  // Evento de clic en el botón de hamburguesa  
  document.getElementById('hamburger').addEventListener('click', toggleMenu);
  
  // Evento de clic fuera del menú para cerrarlo
  document.addEventListener('click', function(event) {
    const menu = document.getElementById('menu');
    if (!menu.contains(event.target)) {
      menu.classList.remove('show');
    }
  })  
