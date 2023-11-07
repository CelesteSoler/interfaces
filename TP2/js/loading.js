"use strict";

document.addEventListener("DOMContentLoaded",()=>{

    function calcularPorcentajeCarga() {
        let porcentaje = 0;
        const textPorcentaje = document.querySelector("#porcentaje-carga");
        if (textPorcentaje) {
            const contenedorCarga = document.querySelector("#contenedor-carga");
            const intervalo = setInterval(() => {
                if (porcentaje < 100) {
                    porcentaje = porcentaje + 10;
                    textPorcentaje.innerHTML = `${porcentaje}%`;
                }
            }, 400);
            setTimeout(() => {
                clearInterval(intervalo);
                contenedorCarga.classList.toggle("contenedor-carga-hidden");
            }, 5000);
        }
    }


    calcularPorcentajeCarga();

})
