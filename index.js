const cards = document.querySelectorAll('.memory-card');

let flippedCard = false;
let lockBoard= false;
let firstCard, secondCard;

fetch ("http://localhost:3000/members")
    .then((resp) => resp.json())
    .then((data) => renderCards(data))

function renderCards(members){
    // have each card appear
    // create 20 divs, two each for matching
    members.forEach(member => {
        console.log(member)})
}


function flipCard(){
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.add('flip');

    if (!flippedCard){
        //first click
        flippedCard = true;
        firstCard = this;
    
        return;
    }
        //second click
        secondCard = this;
        
        checkForMatch();
    }

function checkForMatch(){
    let isMatch = firstCard.dataset.member === secondCard.dataset.member;
    
    isMatch ? disableCards() : unflipCards();

function disableCards(){
        firstCard.removeEventListener("click", flipCard);
        secondCard.removeEventListener("click", flipCard);

    resetBoard();
}

function unflipCards(){
    lockBoard = true;
        setTimeout(() => {
            firstCard.classList.remove("flip");
            secondCard.classList.remove("flip");
            
        resetBoard();
        }, 1500);
    }
}

function resetBoard(){
    flippedCard = false;
    lockBoard = false;
    firstCard = null;
    secondCard = null;
}

(function shuffle(){
    cards.forEach(card => {
        let randomPosition = Math.floor(Math.random() *  12);
        card.style.order = randomPosition;
    });
})();

cards.forEach(card => card.addEventListener("click", flipCard));