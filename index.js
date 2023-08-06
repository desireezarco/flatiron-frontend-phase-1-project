/*  UNFINISHED REVISION OF PROJECT!!! */

const gameContainer = document.querySelector(".game-container");

// let cards = [];
let cardOne, cardTwo;
let compare = false;
let score = 0;

document.querySelector(".score").textContent = score;

// url = "http://localhost:3000/members"

//Fetch data
fetch("http://localhost:3000/members")
    .then((res) => res.json())
    .then((data) => {
        cards = [...data]
        // console.log(data)
        shuffleCards();
        generateCards();
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
        cardElement.setAttribute('members-name', card.name)
        cardElement.setAttribute("src", card.image)
        cardElement.innerHTML = `
        <div class="front-back">
            <img class="front-face" src=${card.image}>
            </img>
        <div class="back-face" src="/images/twice-logo.png"></div>
        </div>
    `;
        gameContainer.appendChild(cardElement);
        // gameContainer.appendChild(cardElement)
        cardElement.addEventListener("click", flipCard)
        console.log(cardElement)
}
}


// const card = document.querySelectorAll(".game-container");


function flipCard() {
    if (compare) return;
    if (this === cardOne) return;

    this.classList.add("flipped");

    if(!cardOne){
        cardOne = this;
        return;
    }

    cardTwo = this;
    score++;
    document.querySelector(".score").textContent = score;
    compare = true;

    checkIfMatch();
}

function checkIfMatch(){
    let isMatch = cardOne.dataset.membersName === cardTwo.dataset.membersName;

    isMatch ? disableCards() : unflipCards();
}

function disableCards(){
    cardOne.removeEventListener("click", flipCard);
    cardTwo.removeEventListener("click", flipCard);

    resetBoard();
}

function unflipCards(){
    setTimeout(() => {
        cardOne.classList.remove("flipped")
        cardTwo.classList.remove("flipped");
        resetBoard();
    }, 1000);
}

function resetBoard(){
    cardOne = null;
    cardTwo = null;
    compare = false;
}

function restart(){
    resetBoard();
    shuffleCards();
    score = 0;
    document.querySelector(".score").textContent = score;
    gameContainer.innerHTML = "";
    generateCards()
}











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








