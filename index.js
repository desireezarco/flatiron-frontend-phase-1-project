/*  UNFINISHED REVISION OF PROJECT!!! */

const gameContainer = document.querySelector(".game-container");
// const memoryCard = document.querySelector(".memory-card");

let cards = [];
let firstCard, secondCard;
let lockBoard = false;
let score = 0;

document.querySelector(".score").textContent = score;

// url = "http://localhost:3000/members"

//Fetch data
fetch("http://localhost:3000/members")
    .then((res) => res.json())
    .then((data) => {
        cards = [...data]
        console.log(cards)
        shuffleCards()
        generateCards()
    })


function shuffleCards() {
    let currentIndex = cards.length, 
    randomIndex,
    temporaryValue;

    while (currentIndex !==0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = cards[currentIndex];
        cards[currentIndex] = cards[randomIndex];
        cards[randomIndex] = temporaryValue;
    }
}

function generateCards() {
    for (let card of cards) {
        const cardElement = document.createElement('img')
        cardElement.classList.add('card')
        cardElement.setAttribute('name', card.name)
        cardElement.setAttribute('src', card.image)
        cardElement.innerHTML = `
        <div class="front">
            <img class="front-face" src=${card.image} />
            </div>
        <div class="back-face" src=${"/images/twice-logo.png"}></div>
            `
        gameContainer.appendChild(cardElement)
        // gameContainer.appendChild(cardElement)
        cardElement.addEventListener("click", flipCard)
}
}

function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.add("flipped")

    if(!firstCard){
        firstCard = this;
        return;
    }

    secondCard = this;
    score++;
    document.querySelector(".score").textContent = score;
    lockBoard = true;

    checkIfMatch();
}

function checkIfMatch(){
    let isMatch = firstCard.dataset.cards === secondCard.dataset.cards;

    isMatch ? disableCards() : unflipCards();
}

function disableCards(){
    firstCard.removeEventListener("click", flipCard);
    secondCard.removeEventListener("click", flipCard);

    resetBoard();
}

function unflipCards(){
    setTimeout(() => {
        firstCard.classList.remove("flipped")
        secondCard.classList.remove("flipped");
        resetBoard();
    }, 1000);
}

function resetBoard(){
    firstCard = null;
    secondCard = null;
    lockBoard = false;
}

function restart(){
    resetBoard();
    shuffleCards
}





























    



// function flipCard(){
//     if (lockBoard) return;
//     if (this === firstCard) return;

//     this.classList.add("flipped");

//     if (!firstCard){
//         firstCard = this;
//         return;
//     }

// secondCard = this;
// score++;
// document.querySelector(".score").textContent = score;
// lockBoard = true;

// checkIfMatch()

// }

// function checkIfMatch(){
//     let isMatch = firstCard.dataset.name === secondCard.dataset.name;

//     isMatch ? disableCards() : unflipCards();
// }

// function disableCards() {
//     firstCard.removeEventListener("click", flipCard)
//     secondCard.removeEventListener("click", flipCard)

//     resetBoard()
// }

// function unflipCards(){
//     setTimeout(() => {
//         firstCard.classList.remove("flipped")
//         secondCard.classList.remove("flipped")
//         resetBoard()
//     }, 1000)
// }

// function resetBoard(){
//     firstCard = null
//     secondCard = null
//     lockBoard = false
// }

// function restart(){
//     resetBoard()
//     shuffleCards()
//     score = 0;
//     document.querySelector(".score").textContent = score
//     gameContainer.innerHTML = "",
//     generateCards()
// }
















// // ******* have each card appear **********
// function renderMembers(members) {

//     const div = document.querySelector('div');
//     members.forEach((member) => {
//         // const h2 = document.createElement('h2');
//         // h2.innerHTML = member.name;
//         // section.appendChild(h2);

//         // const div = document.createElement('div');
//         // section.append(div)
 
//         const memberImage = document.createElement('img');
//         memberImage.src = member.image;
//         div.append(memberImage);
        
//         // card.classList = "card";
//         // front.classList = document.createElement("img");
//         // back.classList = "back";

//         // card.addEventListener('click', flipCard)
//         // gameContainer.appendChild(card)
//     })
// }

// document.addEventListener("DOMContentLoaded", function () {
//     fetchMembers();
// })

