/*document.addEventListener("DOMContentLoaded", function () {
    // Obtener las posiciones de los títulos e imágenes
    let contImg = document.querySelector(".contenedor-imagenes");
    let titulo1 = document.getElementById("titulo1");
    let titulo2 = document.getElementById("titulo2");
    let titulo3 = document.getElementById("titulo3");
    let titulo4 = document.getElementById("titulo4");
  
    let texto1 = document.getElementById("texto1");
    let texto2 = document.getElementById("texto2");
    let texto3 = document.getElementById("texto3");
    let texto4 = document.getElementById("texto4");
  
    let textos = [texto1, texto2, texto3, texto4];
  
    let img1 = document.getElementById("img1");
    let img2 = document.getElementById("img2");
    let img3 = document.getElementById("img3");
    let img4 = document.getElementById("img4");
  
    const observador = new IntersectionObserver(entries => {
      //itera x cada entrada, por cada texto
      entries.forEach(entry => {
        //esta visible?
        if (entry.isIntersecting) {
          //indice del texto actual del arreglo texts, asi se ve cual texto es el visible
          //entry.target(me devuelve el obj), indexof el indice de ese obj en arrglo
     
          const index = textos.indexOf(entry.target);
  
          //Ajusta la opacidad de todas las imágenes a 0, para q solo este visible la q yo quiero
          [img1, img2, img3, img4].forEach(img => (img.style.opacity = 0));
          //ajusta titulos
          [texto1, texto2, texto3, texto4].forEach(title => (title.style.opacity = 0));
  
          [titulo1, titulo2, titulo3, titulo4].forEach(title => (title.style.opacity = 0));
          
          //segun la pos en el arreglo sera la imagen y texto q quiero ver
          switch (index) {
            case 0:
              img1.style.opacity = 1;
              texto1.style.opacity = 1;
              titulo1.style.opacity = 1;
             // title2.style.opacity =0;
              break;
            case 1:
              img2.style.opacity = 1;
              texto1.style.opacity = 0;
              titulo1.style.opacity = 0;
              texto2.style.opacity = 1;
              titulo2.style.opacity =1;
              break;
            case 2:
              img3.style.opacity = 1;
              texto3.style.opacity = 1;
              titulo3.style.opacity =1;
              texto2.style.opacity = 0;
              titulo2.style.opacity = 0;
              break;
            case 3:
              img4.style.opacity = 1;
              titulo4.style.opacity = 1;
              texto3.style.opacity = 0;
              titulo3.style.opacity = 0;
              texto4.style.opacity = 1;
              break;
            default:
              break;
          }
        }
      });
    });
  
    //Observa cada texto individual, que este en el arrgelo
    textos.forEach(text => {
      observador.observe(text);
    });
  
  
    
  });*/


  "use strict";


/*document.addEventListener("DOMContentLoaded", () => {

    const img1 = document.getElementById('img1');
    const img2 = document.getElementById('img2');
    const img3 = document.getElementById('img3');
    const img4 = document.getElementById('img4');
    const prf1 = document.getElementById('parrafo1');
    const prf2 = document.getElementById('parrafo2');
    const prf3 = document.getElementById('parrafo3');
    const prf4 = document.getElementById('parrafo4');
  


    window.onscroll = function () {
            animateImages();
    };


    function animateImages() {
        const img1Visible = visibleElement(1, window.scrollY);
        const img2Visible = visibleElement(2, window.scrollY);
        const img3Visible = visibleElement(3, window.scrollY);
        const img4Visible = visibleElement(4, window.scrollY);

        if (img1Visible) {
            img1.classList.remove('imgOculta');
            img2.classList.add('imgOculta');
            img3.classList.add('imgOculta');
            img4.classList.add('imgOculta');
            prf1.classList.remove('parrafo-oculto');
            prf2.classList.add('parrafo-oculto');
            prf3.classList.add('parrafo-oculto');
            prf4.classList.add('parrafo-oculto');
        } else {
            if (img2Visible) {
                img1.classList.add('imgOculta');
                img2.classList.remove('imgOculta');
                img3.classList.add('imgOculta');
                img4.classList.add('imgOculta');
                prf1.classList.add('parrafo-oculto');
                prf2.classList.remove('parrafo-oculto');
                prf3.classList.add('parrafo-oculto');
                prf4.classList.add('parrafo-oculto');
            } else {
                if (img3Visible) {
                    img1.classList.add('imgOculta');
                    img2.classList.add('imgOculta');
                    img3.classList.remove('imgOculta');
                    img4.classList.add('imgOculta');
                    prf1.classList.add('parrafo-oculto');
                    prf2.classList.add('parrafo-oculto');
                    prf3.classList.remove('parrafo-oculto');
                    prf4.classList.add('parrafo-oculto');
                } else if (img4Visible) {
                    img1.classList.add('imgOculta');
                    img2.classList.add('imgOculta');
                    img3.classList.add('imgOculta');
                    img4.classList.remove('imgOculta');
                    prf1.classList.add('parrafo-oculto');
                    prf2.classList.add('parrafo-oculto');
                    prf3.classList.add('parrafo-oculto');
                    prf4.classList.remove('parrafo-oculto');
                }
            }
        }
    }

    function visibleElement(elemento = 1, scrollY) {
      switch (elemento) {
          case 1:
              console.log(scrollY,elemento);
              return scrollY <= 3800 && scrollY > 0;
          case 2:
              console.log(scrollY,elemento);
              return scrollY > 3800 && scrollY <=4000;
          case 3:
              return scrollY > 4000 && scrollY <= 4300;
          case 4:
              return scrollY > 4300 && scrollY <= 4600;
          default:
              break;
      }
    }

});*/

document.addEventListener("scroll", () => {
  function clean() {
    document.querySelectorAll(".imgMasAmigos").forEach((s) => {
      s.classList.remove("show-img");
    });
    document.querySelectorAll(".parrafoScroll").forEach((s) => {
      s.classList.remove("show-txt");
    });
  }

  const scrollS6 = window.scrollY; // guarda el valor del desplazamiento vertical actual de la ventana
  if (scrollS6 < 4030) {
    clean();
    document.querySelector("#imgMasAmigos1").classList.add("show-img");
    document.querySelector("#parrafo1").classList.add("show-txt");
  } else if (scrollS6 >= 4030 && scrollS6 < 4400) {
    clean();
    document.querySelector("#imgMasAmigos2").classList.add("show-img");
    document.querySelector("#parrafo2").classList.add("show-txt");
  } else if (scrollS6 >= 4400 && scrollS6 < 5000) {
    clean();
    document.querySelector("#imgMasAmigos3").classList.add("show-img");
    document.querySelector("#parrafo3").classList.add("show-txt");
  } else if (scrollS6 >= 5000) {
    clean();
    document.querySelector("#imgMasAmigos4").classList.add("show-img");
    document.querySelector("#parrafo4").classList.add("show-txt");
  }
});





  