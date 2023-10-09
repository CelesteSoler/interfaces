const fila = document.querySelectorAll(".containerCarrusel");

    const btnScrollDer = document.querySelectorAll("#btnScrollDer");
    const btnScrollIzq = document.querySelectorAll("#btnScrollIzq");

    for(let i = 0; i < btnScrollDer.length;i++){
        btnScrollDer[i].addEventListener("click", function(){
            const carrusel = fila[i];
            carrusel.scrollLeft += (carrusel.offsetWidth - 383);
        });
    }

    for(let i = 0; i < btnScrollIzq.length;i++){
        btnScrollIzq[i].addEventListener("click", function() {
            const carrusel = fila[i];
            carrusel.scrollLeft -= (carrusel.offsetWidth - 383);
        });
    }