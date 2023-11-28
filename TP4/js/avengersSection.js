"use strict"

const div = document.querySelector('.contenedorImagenesVengadores');
const images = [];
console.log(div);
console.log(images);

div.querySelectorAll('img').forEach(img => {
  let i = {
    img: img,
    depthX: img.getAttribute('data-depth-x'),
    depthY: img.getAttribute('data-depth-y')
  }
  console.log(i);
  images.push(i);
});

div.addEventListener('mousemove', (e) => {
  const x = e.clientX;
  console.log(x);
  const y = e.clientY;
  console.log(y);
  for (let imageObject of images) {
    imageObject.img.style.transform = `translateX(${x * imageObject.depthX}px) translateY(${y * imageObject.depthY}px)`;
    console.log(imageObject);
  }
});