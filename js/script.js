// Manejar el clic en un enlace activo
document.addEventListener("DOMContentLoaded", function () {
  // Seleccionar todos los enlaces
  var enlaces = document.querySelectorAll("a");

// Manejar el clic en un enlace
document.querySelector('.login-btn').addEventListener('click', function() {
    // Redirige al usuario a la página de inicio de sesión
    window.location.href = '/login.html';
});


  // Función para manejar el clic en un enlace
  function manejarClicEnlace(event) {
    // Remover la clase 'enlace-activo' de todos los enlaces
    enlaces.forEach(function (enlace) {
      enlace.classList.remove("enlace-activo");
    });

    // Añadir la clase 'enlace-activo' al enlace clickeado
    event.target.classList.add("enlace-activo");
  }

  // Añadir el evento de clic a todos los enlaces
  enlaces.forEach(function (enlace) {
    enlace.addEventListener("click", manejarClicEnlace);
  });
});

/*boton de ir arriba*/
window.addEventListener("scroll", function () {
  var backToTopButton = document.getElementById("backToTop");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
});
document.getElementById("backToTop").addEventListener("click", function () {
  document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE y Opera
});

/*carousel de testimonios*/
$(".testmonial_slider_area").owlCarousel({
  autoplay: true,
  slideSpeed: 250,
  items: 3,
  loop: true,
  nav: true,
  navText: [
    '<i class="fa fa-arrow-left"></i>',
    '<i class="fa fa-arrow-right"></i>',
  ],
  margin: 30,
  dots: true,
  responsive: {
    320: {
      items: 1,
    },
    767: {
      items: 2,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});
