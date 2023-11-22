"use strict";

document.addEventListener("DOMContentLoaded", () => {


    let inputToggle = document.getElementById("input-check");
    let menuToggle = document.getElementById("menu");
    inputToggle.addEventListener("click", () => {
        menuToggle.classList.toggle("header-menu");
        menuToggle.classList.toggle("active");
    })




    document.addEventListener("scroll", function() {
        var header = document.getElementById("header");
        if (window.scrollY > 20) {
            header.classList.add("fixed");
        } else {
            header.classList.remove("fixed");
        }
    });

})



