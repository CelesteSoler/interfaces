let super1 = document.getElementById("super1");
let super2 = document.getElementById("super2");
let super3 = document.getElementById("super3");
let seccionSuperheroes = document.getElementById("seccionSuperheroes");
  
super2.addEventListener("mouseover", () => {
    resetBackgroundClasses();
    seccionSuperheroes.classList.add("fndAzul");
    resetTransformations();
    super2.style.transform = "scale(1.0)";
    super2.style.filter = "blur(0px)";
});

super1.addEventListener("mouseover", () => {
    resetBackgroundClasses();
    seccionSuperheroes.classList.add("fndRosa");
    resetTransformations();
    super1.style.transform = "scale(1.0)";
    super1.style.filter = "blur(0px)";
});

super3.addEventListener("mouseover", () => {
    resetBackgroundClasses();
    seccionSuperheroes.classList.add("fndAzulOscuro");
    resetTransformations();
    super3.style.transform = "scale(1.0)";
    super3.style.filter = "blur(0px)";
});

function resetBackgroundClasses() {
    seccionSuperheroes.classList.remove("fndRosa", "fndAzulOscuro", "fndAzul");
}

function resetTransformations() {
    [super1, super2, super3].forEach(superhero => {
        superhero.style.transform = "scale(0.4)";
        superhero.style.filter = "blur(5px)";
        superhero.style.transition = "all 0.2s";
    });
}