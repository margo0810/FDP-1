let user = JSON.parse(localStorage.getItem("actualUser"));

let username = document.getElementById("nameUser");
username.innerHTML = user.nombre;
