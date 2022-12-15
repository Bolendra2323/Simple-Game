//====================================================ACTUAL-TASK-HAPPENING==============================================================================================
// 2. Create the player object. Give it two keys, name and chips, and set their values
let player = {
    name: "Bolendra",
    chips: 125
}
let cards = [];
let sum = 0
let hashBlackJack = false;

let isAlive = false;

let message = '';

let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector("#sum-el");
let cardEl = document.getElementById("card-el");
// 3. Grab ahold of the player-el paragraph and store it in a variable called playerEl
let playerEl = document.getElementById("player-el");
// 4. Render the player's name and chips in playerEl

playerEl.textContent += player.name + ": $" + player.chips

// What is the difference between getElementById and querySelector?
// With a querySelector statement, you can select an element based on a CSS selector.
//This means you can select elements by ID, class, or any other type of selector.
//Using the getElementById method, you can only select an
// element by its ID.Generally, you should opt for the selector that most clearly gets the job done


// Make this function return a random number between 1 and 13

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1;
    //randomNumber>10 signify we are getting Q,J,K
    if (randomNumber > 10) {
        return 10
            //randomNumber===1 signify we are getting Ace or A
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber;
    }
}

function startGame() {
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();

    sum = firstCard + secondCard;
    cards = [firstCard, secondCard];
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
    // Only allow the player to get a new card if she IS alive and does NOT have a Blackjack
    if (isAlive === true && hashBlackJack === false) {
        let card = getRandomCard();
        sum += card;
        cards.push(card);
        console.log(cards);
        renderGame();
    }
}