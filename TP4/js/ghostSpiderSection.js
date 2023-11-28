"use strict"

/**Detecta si un elemento esta dentro del viewport */
function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
}

//SPIDER-WHITE SECTION
const spiderWhiteSection = this.document.querySelector('.parteGhost');
const spiderWhiteDivs = [];
document.querySelectorAll('.parteGhost .width-1080').forEach(div => {
  let object = {
    div: div,
    originalTop: parseInt(getComputedStyle(div, null).getPropertyValue("top").slice(0, -2)),
  }
  spiderWhiteDivs.push(object);
})

window.addEventListener('scroll', function (e) {
  if (isElementInViewport(spiderWhiteSection)) {
    for (let divObject of spiderWhiteDivs) {
      const top = divObject.originalTop;
      const y = window.scrollY;
      divObject.div.classList.add('active');
      divObject.div.style.top = `${((y)-2000) * 0.15 + top}px`;
    }
  } else {
    for (let divObject of spiderWhiteDivs) {
      divObject.div.classList.remove('active');
    }
  }
});