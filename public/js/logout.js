console.log("inicia logout");
function logout() {
  const screenLoader = document.getElementById("preloader");
  console.log("me ejecuto");

  const user = JSON.parse(sessionStorage.getItem("user"));

  if (user) {
    screenLoader.style.display = "block";
    sessionStorage.removeItem("user");
    setTimeout(() => {
      screenLoader.style.display = "none";
      window.location.href = "/login.html";
    }, 4000);
  }
}

document.getElementById("menu_logout").addEventListener("click", logout);
