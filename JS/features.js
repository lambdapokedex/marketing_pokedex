const flipCard = function (i) {
    i.classList.add('flipped');
}

const thisCard = function(i) {
    flipCard(i);
}

const Card = document.querySelectorAll('.card');

const cards = Card.forEach(function(i) {
    i.addEventListener('click', thisCard(i));
    i.classList.remove('flipped');
});

//console.log(Card);