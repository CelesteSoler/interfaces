"use strict"

const buildings = document.querySelector('.layer-2');

window.addEventListener('scroll', function () {
  let y = window.scrollY;
  if (y < 700) {
    buildings.style.transform = `translateX(${-y * 0.1}px)`;
  }
});
