window.onscroll = function () {
    cardsFaceIn();
  };
  
  const contenedorCards = document.querySelector(".contenedorCards");
  const cards = document.querySelectorAll(".card");
  
  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  function cardsFaceIn() {
    cards.forEach((card, index) => {
      const distanciaCard = contenedorCards.getBoundingClientRect().top + card.getBoundingClientRect().top;
  
      if (isElementInViewport(card) || distanciaCard <= window.innerHeight) {
        card.classList.add(`efecto-card${index + 1}`);
        card.classList.remove(`efecto-card${index + 1}-remove`);
      } else {
        card.classList.remove(`efecto-card${index + 1}`);
        card.classList.add(`efecto-card${index + 1}-remove`);
      }
    });
  }