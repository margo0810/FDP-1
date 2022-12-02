const nombre = document.getElementById("name");
const correo = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
const form = document.getElementById("submit");
const listInputs = document.querySelectorAll(".username");

form.addEventListener("click", (e) => {
  e.preventDefault();
  let condicion = validacionForm();
  if (condicion) {
    enviarFormulario();
  }
});

function validacionForm() {
  let condicion = true;
  if (nombre.value.length < 1 || nombre.value.trim() == "") {
    alert("Nombre no valido*");
    condicion = false;
  }
  if (correo.value.length < 1 || correo.value.trim() == "") {
    alert("Correo no valido*");
    condicion = false;
  }
  if (password.value.length < 1 || password.value.trim() == "") {
    alert("Contraseña no valida*");
    condicion = false;
  }
  if (password2.value != password.value) {
    alert("La contraseña no coincide*");
    condicion = false;
  }
  return condicion;
}

function enviarFormulario() {
  let user = {
    nombre: nombre.value,
    correo: correo.value,
    contraseña: password.value,
    favoritos: [],
  };
  if (localStorage.getItem("users") === null) {
    users.push(user);

    localStorage.setItem("users", JSON.stringify(users));
  } else {
    let allUsers = JSON.parse(localStorage.getItem("users"));
    allUsers.push(user);
    localStorage.setItem("users", JSON.stringify(allUsers));
  }

  window.location.href = "Signin.html";

  form.reset();
  form.lastElementChild.innerHTML = "Listo !!";
}
