function login(event) {
  event.preventDefault(); // Evita el envío del formulario

  document.getElementById("buttonLogin").style.display = "none";
  document.getElementById("loadingOperation").style.display = "block";

  const emailForm = document.getElementById("email").value;
  const passwordForm = document.getElementById("password").value;

  setTimeout(() => {
    document.getElementById("loadingOperation").style.display = "none";

    // const user = JSON.parse(localStorage.getItem("user"));

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find((userStorage) => userStorage.email === emailForm);

    if (user) {
      const { password, email } = user;

      if (email === emailForm && password === passwordForm) {
        console.log("Login successful");
        sessionStorage.setItem("user", JSON.stringify(user));
        window.location.href = "/services.html";
      } else {
        alert("Correo o contraseña incorrectos");
      }
    } else {
      alert("No se encontró el usuario");
    }
  }, 5000); // 10 segundos
}

document.getElementById("loginForm").addEventListener("submit", login);
