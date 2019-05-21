
class Card {
    constructor(card) {
        this.card = card;
        this.card.addEventListener('click', () => this.flip());
    }

    flip() {
        this.card.classList.toggle('flipped');
    }
}

const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    return new Card(card);
});