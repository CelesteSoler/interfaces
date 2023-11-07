let desplegableCarrito= document.querySelector(".menu-navbar-carrito");
    let btnCarrito = document.querySelector(".btnCarrito");
    btnCarrito.addEventListener("click", () => {
        desplegableCarrito.classList.toggle("menu-navbar-carrito-visible");
    })
