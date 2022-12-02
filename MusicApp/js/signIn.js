const correo = document.getElementById("email");
const password = document.getElementById("password");
const form = document.getElementById("button1");
users = JSON.parse(localStorage.getItem("users"));

form.addEventListener("click", (e) => {
  e.preventDefault();
  let condicion = validacionForm();
  if (condicion) {
    enviarFormulario();
  }
});

function validacionForm() {
  let condicion = true;
  if (correo.value.length < 1 || correo.value.trim() == "") {
    alert("Correo no valido*");
    condicion = false;
  }
  if (password.value.length < 1 || password.value.trim() == "") {
    alert("Contraseña no valida*");
    condicion = false;
  }
  return condicion;
}

function enviarFormulario() {
  let user = users.find((user) => correo.value === user.correo);
  if (user === undefined) {
    alert("usuario no existente, Registrese");
  } else {
    localStorage.setItem("actualUser", JSON.stringify(user));
    window.location.href = "home.html";
  }
}
