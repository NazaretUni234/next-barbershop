//Menu de navegacion:
console.log("inicia logicGlobal");
const menuHome = document.getElementById("menu_home");
const menuServices = document.getElementById("menu_services");
const menuContact = document.getElementById("menu_contact");
const menuLogin = document.getElementById("menu_login");
const menuRegister = document.getElementById("menu_register");
const menuLogout = document.getElementById("menu_logout");
const menuAppointments = document.getElementById("menu_appointment");
const menuBarbers = document.getElementById("menu_barbers");

// llamados a la accion:

const clickActionLogin = document.getElementById("clickActionLogin");
const clickActionAppointments = document.getElementById(
  "clickActionAppointments"
);

// footer:

const footerHome = document.getElementById("footer_home");
const footerServices = document.getElementById("footer_services");
const footerContact = document.getElementById("footer_contact");
const footerLogin = document.getElementById("footer_login");
const footerRegister = document.getElementById("footer_register");
const footerAppointments = document.getElementById("footer_appointment");
const footerBarbers = document.getElementById("footer_barbers");

const user = JSON.parse(sessionStorage.getItem("user"));

if (user) {
  menuLogin.style.display = "none";
  menuRegister.style.display = "none";
  menuLogout.style.display = "block";
  menuAppointments.style.display = "block";
  menuBarbers.style.display = "block";

  clickActionLogin.style.display = "none";

  footerLogin.style.display = "none";
  footerRegister.style.display = "none";
  footerAppointments.style.display = "inline-block";
  footerBarbers.style.display = "inline-block";
} else {
  menuLogin.style.display = "block";
  menuRegister.style.display = "block";
  menuLogout.style.display = "none";
  menuAppointments.style.display = "none";
  menuBarbers.style.display = "none";

  clickActionAppointments.style.display = "none";

  footerLogin.style.display = "inline-block";
  footerRegister.style.display = "inline-block";
  footerAppointments.style.display = "none";
  footerBarbers.style.display = "none";
}
