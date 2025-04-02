function register(event) {
  event.preventDefault(); // Evita el envío del formulario

  document.getElementById("buttonRegister").style.display = "none";
  document.getElementById("loadingOperation").style.display = "block";

  const users = JSON.parse(localStorage.getItem("users")) || [];

  const firstName = document.getElementById("first_name").value;
  const lastName = document.getElementById("last_name").value;
  const phone = document.getElementById("phone").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const passwordConfirm = document.getElementById("passwordConfirm").value;

  if (
    !(firstName && lastName && phone && email && password && passwordConfirm)
  ) {
    alert("Todos los campos son obligatorios");
    document.getElementById("buttonRegister").style.display = "block";
    document.getElementById("loadingOperation").style.display = "none";
    return;
  }

  if (password !== passwordConfirm) {
    alert("Las contraseñas no coinciden");
    document.getElementById("buttonRegister").style.display = "block";
    document.getElementById("loadingOperation").style.display = "none";
    return;
  }

  setTimeout(() => {
    document.getElementById("loadingOperation").style.display = "none";

    const sendable = {
      firstName,
      lastName,
      phone,
      email,
      password,
    };
    if (users.length > 0) {
      localStorage.removeItem("users");
    }

    users.push(sendable);
    localStorage.setItem("users", JSON.stringify(users));
    window.location.href = "/login.html";
  }, 5000); // 10 segundos
}

document.getElementById("registerForm").addEventListener("submit", register);
