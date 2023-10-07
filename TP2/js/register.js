"use strict"

let formulario = document.querySelector('#js-formulario');

formulario.addEventListener('submit', registrarUsuario);

function registrarUsuario(event){
    event.preventDefault();
    let mensajeUsuarioCreado = document.querySelector('#js-mensaje-usuario');
    mensajeUsuarioCreado.innerHTML = "Su usuario ha sido creado con éxito";
    setTimeout((()=>window.location.href="home-loged.html"), 5000)
}