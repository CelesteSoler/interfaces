let duende = document.getElementById('duendeVerde');
let seccionDuende = document.getElementById('seccionDuendeVerde');

window.addEventListener('scroll', function(e){
    let rect = seccionDuende.getBoundingClientRect();
    if (rect.top+800 <= window.innerHeight && rect.bottom-550 >= 0) {
        // Obtener el valor de desplazamiento vertical (scroll)
        let scrollTop = window.scrollY;
        duende.style.transform = 'translate(0, calc(-50% + ' + scrollTop / 2 + 'px)) ';
    }
});
