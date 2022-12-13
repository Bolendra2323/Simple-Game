//====================================================ACTUAL-TASK-HAPPENING==============================================================================================

// 2. Use getRandomCard() to set the values of firstCard and secondCard


let firstCard = getRandomCard();
let secondCard = getRandomCard();
let cards = [firstCard, secondCard]; //array of cards---> ordered list of items
let sum = firstCard + secondCard
let hashBlackJack = false;

let isAlive = true;

let message = '';

let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector("#sum-el");
let cardEl = document.getElementById("card-el");

// What is the difference between getElementById and querySelector?
// With a querySelector statement, you can select an element based on a CSS selector.
//This means you can select elements by ID, class, or any other type of selector.
//Using the getElementById method, you can only select an
// element by its ID.Generally, you should opt for the selector that most clearly gets the job done


// 1. Create a function, getRandomCard(), that always returns the number 5

function getRandomCard() {
    return 5;
}

function startGame() {
    return renderGame();
}

function renderGame() {
    //cardEl.textContent = "Cards: " + `${firstCard}  ${secondCard}`
    cardEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardEl.textContent += ' ' + cards[i];
    }


    sumEl.textContent = "Sum: " + sum

    if (sum <= 20) {
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        message = "You've got Blackjack!";
        hashBlackJack = true;
    } else {
        message = "You're out of the game!";
        isAlive = false;
    }
    messageEl.textContent = message;


}

function newCard() {
    // 3. Use the getRandomCard() to set the value of card

    let card = getRandomCard();
    sum += card;
    cards.push(card);
    console.log(cards);
    renderGame();
}