document.querySelector(".my-form").addEventListener("submit", function (event) {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm-password").value;

  if (password !== confirmPassword) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Las contraseñas no coinciden!",
    });
    return; // Evita el envío del formulario
  }

  fetch("http://127.0.0.1/inicio_sesion.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: email, password: password }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.message) {
        // Autenticación exitosa, redirige al usuario
        window.location.href = "/usuarios_registrados.html";
      } else {
        // Mostrar un mensaje de error
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: data.error,
        });
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Hubo un error al iniciar sesión.",
      });
    });
});
