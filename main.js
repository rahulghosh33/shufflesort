window.onload = main;

var numbers = [
    {
        num: 1,
        colorScheme: 'color-scheme-1'
    },
    {
        num: 2,
        colorScheme: 'color-scheme-2'
    },
    {
        num: 3,
        colorScheme: 'color-scheme-3'
    },
    {
        num: 4,
        colorScheme: 'color-scheme-2'
    },
    {
        num: 5,
        colorScheme: 'color-scheme-3'
    },
    {
        num: 6,
        colorScheme: 'color-scheme-4'
    },
    {
        num: 7,
        colorScheme: 'color-scheme-4'
    },
    {
        num: 8,
        colorScheme: 'color-scheme-1'
    },
    {
        num: 9,
        colorScheme: 'color-scheme-3'
    }
];
const cardContainer = document.getElementById('cardContainer');
const sortBtn = document.getElementById('sortBtn');
var cardSorted = true;

function main() {
    initializeCards();
}

function initializeCards() {
    cardContainer.innerHTML = '';
    if (cardSorted) {
        sortBtn.disabled = true;
    } else {
        sortBtn.disabled = false;
    }
    numbers.map(createCards);
}

function createCards(number) {
    var card = document.createElement('div');
    card.className = 'card ' + number.colorScheme;
    card.innerHTML = number.num;
    cardContainer.appendChild(card);
}

function shuffleHandler() {
    numbers = numbers.sort(() => Math.random() - 0.5);
    cardSorted = false;
    initializeCards();
}

function sortHandler() {
    numbers.sort(function(a, b){return a.num - b.num});
    cardSorted = true;
    initializeCards();
}