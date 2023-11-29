"use strict"

/**Esta función lo que hace es detectar cuando un elemento esté dentro del viewport */
function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
}

//Ghost Spider Section
const ghostSpiderSection = this.document.querySelector('.ghost-section');
const ghostSpiderDivs = [];
document.querySelectorAll('.ghost-section .ghost-container div').forEach(div => {
  let object = {
    div: div,
    originalTop: parseInt(getComputedStyle(div, null).getPropertyValue("top").slice(0, -2)),
  }
  ghostSpiderDivs.push(object);
})

window.addEventListener('scroll', function (e) {
  if (isElementInViewport(ghostSpiderSection)) {
    for (let divObject of ghostSpiderDivs) {
      const top = divObject.originalTop;
      const y = window.scrollY;
      divObject.div.classList.add('active');
      divObject.div.style.top = `${((y)-2000) * 0.15 + top}px`;
    }
  } else {
    for (let divObject of ghostSpiderDivs) {
      divObject.div.classList.remove('active');
    }
  }
});