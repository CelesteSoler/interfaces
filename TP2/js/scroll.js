"use strict";

document.addEventListener("DOMContentLoaded", () => {

  let btnScroll = document.getElementById('btn-scroll');
  let bodyContainer = document.getElementById('container');


  console.log(btnScroll);
  btnScroll.addEventListener('click', function()  {
    console.log("hola nuevamente");

      btnScroll.animate({
          scrollTop: bodyContainer.offset().top},
          'slow');

    
  })

  

})