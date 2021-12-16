const cards = document.querySelectorAll('.card');

let virarCard = false;
let desvirarCard = false;
let primeiroCard, segundoCard;

function olharCard() {
  if (desvirarCard) return;
  if (this === primeiroCard) return;

  this.classList.add('flip');

  if (!virarCard) {
    // primeiro click
    virarCard = true;
    primeiroCard = this;

    return;
  }

  // segundo Click
  segundoCard = this;

  verificarCorrespondencia();
}

function verificarCorrespondencia() {
  let isMatch = primeiroCard.dataset.framework === segundoCard.dataset.framework;

  isMatch ? desativarCards() : desolharCards();
}

function desativarCards() {
  primeiroCard.removeEventListener('click', olharCard);
  segundoCard.removeEventListener('click', olharCard);

  resetarCard();
}

function desolharCards() {
  desvirarCard = true;

  setTimeout(() => {
    primeiroCard.classList.remove('flip');
    segundoCard.classList.remove('flip');

    resetarCard();
  }, 1500);
}

function resetarCard() {
  [virarCard, desvirarCard] = [false, false];
  [primeiroCard, segundoCard] = [null, null];
}

(function embaralhar() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
  });
})();

cards.forEach(card => card.addEventListener('click', olharCard));
