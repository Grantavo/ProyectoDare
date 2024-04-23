document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".my-form");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const confirmPassword = document.getElementById("confirm-password");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevenir el envío del formulario de la manera predeterminada

    // Verificar que las contraseñas coincidan
    if (password.value !== confirmPassword.value) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Las contraseñas no coinciden!",
      });
      return;
    }

    // Preparar los datos para enviar
    const data = {
      email: email.value,
      password: password.value,
    };

    // Enviar los datos al servidor
    fetch("http://127.0.0.1/procesar_registro.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        // Aquí puedes manejar la respuesta del servidor, por ejemplo, redirigir al usuario a otra página
        if (data.message) {
          // Verificar si la respuesta contiene un mensaje de éxito
          Swal.fire({
            icon: "success",
            title: "¡Registro exitoso!",
            text: "Has sido registrado correctamente.",
          }).then(() => {
            window.location.href = "/usuarios_registrados.html"; // Redirigir al usuario
          });
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Hubo un error al registrarte.",
        });
      });
  });
});