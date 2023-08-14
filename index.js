/*  UNFINISHED REVISION OF PROJECT!!! */

const gameContainer = document.querySelector(".game-container");

let cards = [];
let firstCard, secondCard;
let lockBoard = false;
let score = 0;

document.querySelector(".score").textContent = score;

// url = "http://localhost:3000/members"

//FETCH JSON DATA
fetch("http://localhost:3000/members")
    .then((res) => res.json())
    .then((data) => {
        cards = [...data];
        // console.log(cards);
        shuffleCards(cards);
        generateCards();
    })

//SHUFFLE CARDS
function shuffleCards(cards) {
    cards.sort(() => Math.random() - 0.5);
};


//Generate Cards and addEventListener #1. CLICK EVENT
function generateCards() {
    for (let card of cards) {
        // console.log(card)

        const cardElement = document.createElement("div");
        cardElement.classList.add("card");
        cardElement.setAttribute("data-name", card.name);
        cardElement.setAttribute('src', card.image);
        cardElement.innerHTML = `
        <div class="front">
            <img class="front-image" src=${card.image} /></div>
        <div class="back" src=${"/images/twice-logo.png"}></div>
            `;
        gameContainer.appendChild(cardElement);
        cardElement.addEventListener("click", flipCard)
}}

//EVENT LISTENER 2. MOUSEOVER EVENT
const button = document.getElementById("groupPic")
    button.addEventListener("mouseover", alertBox);

function alertBox(){
    alert(`Thank you for playing!`)
}

//MAKE CARDS FLIP
function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.add("flipped");

    if (!firstCard) {
        firstCard = this;
        return;
    }

secondCard = this;
lockBoard = true;
checkIfMatch();
    
//score++;
//document.querySelector(".score").textContent = score;
}

//CHECK IF CARD ONE AND TWO MATCH AND STAY FLIPPED.
//IF DOES NOT MATCH, UNFLIP CARDS.
function checkIfMatch(){
    let isMatch = firstCard.dataset.name === secondCard.dataset.name;

//isMatch ? disableCards() : unflipCards();
//SCORE COUNTER
    if (isMatch) {
        disableCards();
        score++;
        document.querySelector(".score").textContent = score;
    } else {
        unflipCards();
    }
}

//IF MATCHING, REMOVE CLICK EVENT AND KEEP CARD FLIPPED.
function disableCards(){
    firstCard.removeEventListener("click", flipCard);
    secondCard.removeEventListener("click", flipCard);
    resetBoard();
}

function unflipCards(){
    setTimeout(() => {
        firstCard.classList.remove("flipped");
        secondCard.classList.remove("flipped");
        resetBoard();
    }, 1000);
}

//RESET GAME
function resetBoard(){
    firstCard = null;
    secondCard = null;
    lockBoard = false;
}

function restart(){
    resetBoard();
    shuffleCards();
    score = 0;
    document.querySelector(".score").textContent = score;
    gameContainer.innerHTML = "";
    generateCards();
}


 // ******* have each card appear **********
/* function renderMembers(members) {

    const div = document.querySelector('div');
    members.forEach((member) => {
        // const h2 = document.createElement('h2');
        // h2.innerHTML = member.name;
        // section.appendChild(h2);

        // const div = document.createElement('div');
        // section.append(div)
 
        const memberImage = document.createElement('img');
        memberImage.src = member.image;
        div.append(memberImage);
        
        // card.classList = "card";
        // front.classList = document.createElement("img");
        // back.classList = "back";

        // card.addEventListener('click', flipCard)
        // gameContainer.appendChild(card)
    })
} 

 document.addEventListener("DOMContentLoaded", function () {
    fetchMembers();
})  */