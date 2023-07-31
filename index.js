/*  UNFINISHED REVISION OF PROJECT!!! */

//Instead of hardcoding each card, I've created a json file with each member and its 3 attributes.
//After meeting with Matt, he helped me refresh my memory on how fetch works

// const section = document.querySelector("section");
// //grab json data using fetch

// fetch ("http://localhost:3000/members")
//     .then((resp) => resp.json())
//     .then((data) => renderCards(data))
//     .catch(error => console.log("ERROR"))
//     .catch(error => {
//         console.log(error);
//     })


//async json fetch
fetch("http://localhost:3000/members")
    .then((response) => {
        console.log('SUCCESS', response);
        return response.json();
    })
    .then(data => {
        console.log(data);
    })
    .catch((error) => {
        console.log('UNSUCCESSFUL', error);
    });

//     //fat arrow functions ("callback function")
//     //fetching data from server, converting it into usable data


//     // have each card appear
  function renderCards(members){
console.log(members);
  }
    // create 20 divs, two each for matching pair
    //create grid
//   members.forEach((member) => {
//     // console.log(member);
//   })
        const card = document.createElement("div");
        const front = document.createElement("img");
        const back = document.createElement("div");


//   })
//         card.classList = "card";
//         // const front = document.createElement("h2")
//         // h2.textContent = members.name
//         front.classList = document.createElement("img");
//         // img.classList.add("member-image");
//         // img.src = member.image;
//         back.classList = "back";


        // card.append(members)

        // document.querySelector("#card-container")

// })
// }
///practice code

// const cards = document.getElementById("")
// console.log(cards)
// const cards = document.querySelector('card-container')
// const cards = document.getElementById('members')
const cards = document.querySelectorAll('.memory-card');



///
let flippedCard = false;
let lockBoard= false;
let firstCard, secondCard;


//flip card action
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

//Check for match
function checkForMatch(){
    let isMatch = firstCard.dataset.member === secondCard.dataset.member;
    
    isMatch ? disableCards() : unflipCards();

//If does not match
function disableCards(){
        firstCard.removeEventListener("click", flipCard);
        secondCard.removeEventListener("click", flipCard);

    resetBoard();
}

//Time it takes to flip card back over
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

//Shuffle cards to different positions
function shuffle(){
    cards.forEach(card => {
        let randomPosition = Math.random() *  12;
        card.style.order = randomPosition ;
      
    });
}
shuffle();

//Event listeners
// cards.forEach(card => card.addEventListener("click", flipCard));
//[ ] NEED ONE MORE EVENT LISTENER
//[ ] EXTRA EVENT LISTENER