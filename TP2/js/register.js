"use strict"

let formulario = document.querySelector('#js-formulario');

formulario.addEventListener('submit', registrarUsuario);

function registrarUsuario(event){
    event.preventDefault();
    let titulo = document.querySelector('#contenedor-titulo');
    let yaTienes = document.querySelector('#ya-tienes');
    formulario.style.display="none";
    titulo.style.display="none";
    yaTienes.style.display="none";
    let spinner = document.querySelector('#spinner');
    spinner.style.display="inline-block";
    let mensajeUsuarioCreado = document.querySelector('#js-mensaje-usuario');
    mensajeUsuarioCreado.innerHTML = "Su usuario ha sido creado con éxito! Serás redirigido al home";
    setTimeout((()=>window.location.href="userLog.html"), 5000)

}