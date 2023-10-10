"use strict"

let login = document.querySelector('#js-login');
let google = document.querySelector('#google');
let facebook = document.querySelector('#facebook');

login.addEventListener('submit', iniciarSesion);
google.addEventListener('click', iniciarSesion);
facebook.addEventListener('click', iniciarSesion);

function iniciarSesion(event){
    event.preventDefault();
    let titulo = document.querySelector('#titulo');
    titulo.style.display="none";
    let linea = document.querySelector('#linea');
    linea.style.display="none";
    google.style.display="none";
    facebook.style.display="none";
    login.style.display="none";

    let spinner = document.querySelector('#spinner');
    spinner.style.display="inline-block";

    let mensajeIniciandoSesion = document.querySelector('#js-iniciando-sesion');
    mensajeIniciandoSesion.innerHTML = "Has iniciado sesión con éxito! Serás redirigido al home";
    setTimeout((()=>window.location.href="userLog.html"), 5000)

}