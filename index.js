/*  UNFINISHED REVISION OF PROJECT!!! */


// const API = "http://localhost:3000/members"

// fetch(API)
//     .then((res) => res.json())
//     .then(renderMembers);

// function renderMembers(members){
//     members.forEach(renderMembers);
// }

// function renderMembers(member){
//     const memberDiv = ('member-card')
//     const memberImage = document.createElement("img");
//     memberImage.src = member.image;
//     memberDiv.append(memberImage)
// }





// //grab json data using fetch

// fetch ("http://localhost:3000/members")
//     .then((resp) => resp.json())
//     .then((data) => renderCards(data))
//     .catch(error => console.log("ERROR"))
//     .catch(error => {
//         console.log(error);
//     })


//async json fetch
// method: 'POST',
// headers: {
    //     'Content-Type': 'application/json'
    // },
    // body: JSON.stringify({'id':1})
    // })
    
    
const members = fetch("http://localhost:3000/members")
    .then((response) => {
        console.log('SUCCESS', response);
        return response.json();
    })
    .then(data => {
        console.log(data);
        renderCards(data)
    }) 
    .catch((error) => {
        console.log('UNSUCCESSFUL', error);
    });
console.log(members)
  



// const response = await fetch("http://localhost:3000/members");
// const json = await response.json();
// console.log(JSON.stringify(json))



//******* have each card appear (???)**********
function renderCards(members){
    const cards = members.map((member) => {
        // const card = document.createElement("div");
        // const front = document.createElement("img");
        // const back = document.createElement("div");
        const front = document.createElement("h2")
        front.textContent = member.name
        return front
    })
    console.log(cards)
}

// return cards and render





// create 20 divs, two each for matching pair(???)
//create grid(???)



//   })
//         card.classList = "card";
//         front.classList = document.createElement("img");
//         // img.classList.add("member-image");
//         // img.src = member.image;
//         back.classList = "back";


        // card.append(members)

        // document.querySelector("#card-container")

// })
// }
///practice code -- (not sure if i'm going the right direction somewhere here)

// const cards = document.getElementById("")
// console.log(cards)
// const cards = document.querySelector('card-container')
// const cards = document.getElementById('members')

const cards = document.querySelectorAll('.memory-card');




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


//FINISH ADDING Event listeners ***
// cards.forEach(card => card.addEventListener("click", flipCard)); (???)

//[ ] NEED ONE MORE EVENT LISTENER (Not another click event)
//[ ] EXTRA EVENT LISTENER