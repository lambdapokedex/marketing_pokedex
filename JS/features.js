// Functionality for Demo Section of Features page
// Flip over one Pokedex card at a time to reveal Pokemon Stats

class Card {
  constructor(card) {
    this.card = card;
    console.log(this.card);
    this.infoNum = document.querySelector(
      `.card[data-tab='${this.card.dataset.tab}']`
    );
    this.front = document.querySelector(
      `.cardFront[data-tab='${this.card.dataset.tab}']`
    );
    this.back = document.querySelector(
        `.cardBack[data-tab='${this.card.dataset.tab}']`
      );
    console.log(this.front);
    this.back.addEventListener("click", () => this.select());
    this.cardFront = new CardFront(this.front);
  }
  
  select() {
    const backs = document.querySelectorAll(".cardBack");
    const fronts = document.querySelectorAll(".cardFront");
    Array.from(backs).forEach(function(card) {
      card.classList.remove("cardBack-flipped");
    });
    Array.from(fronts).forEach(function(front) {
        front.classList.remove("cardFront-flipped");
      });
    this.cardFront.select();
    this.back.classList.add('cardBack-flipped');
  }
}

class CardFront {
  constructor(front) {
    this.front = front;
    this.front.addEventListener('click', () => this.flip());
    this.back = document.querySelector(
        `.cardBack[data-tab='${this.front.dataset.tab}']`
      );
  }

  select() {
    const fronts = document.querySelectorAll(".cardFront");
    const backs = document.querySelectorAll('.cardBack')
    Array.from(fronts).forEach(function(front) {
      front.classList.remove("cardFront-flipped");
    });
    Array.from(backs).forEach(function(card) {
        card.classList.remove("cardBack-flipped");
      });
    this.front.classList.add("cardFront-flipped");
  }
  flip() {
  this.front.classList.remove('cardFront-flipped');
  this.back.classList.remove('cardBack-flipped');
  }
}

const cards = document.querySelectorAll(".card");

cards.forEach(card => {
  return new Card(card);
});
