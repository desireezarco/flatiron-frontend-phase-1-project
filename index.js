/*  UNFINISHED REVISION OF PROJECT!!! */


function fetchMembers() {
    return fetch("http://localhost:3000/members")
        .then((res) => res.json())
        .then((json) => renderMembers(json));
}

function renderMembers(members) {
    
    const section = document.querySelector('section');
    members.forEach((member) => {
        // const h2 = document.createElement('h2');
        // h2.innerHTML = member.name;
        // section.appendChild(h2);

        const memberImage = document.createElement('img');
        memberImage.src = member.image;
        section.append(memberImage);
    })
}

document.addEventListener("DOMContentLoaded", function () {
    fetchMembers();
})

















// document.addEventListener("DOMContentLoaded", async() => {
//     let data = [];
// console.log(data)
//     try {
//             data = await loadData(); 
//     } catch (e) {
//         // console.log("ERROR!");
//         // console.log(e);
//     }
//     // console.log(loadData);
// })

//Create a card for each member

// function loadData(members){
//     let member = document.createElement('div');
//     // console.log(card)
//     member.classList.add('card')
    
//     let img = document.createElement('img')
    
//     img.classList.add('member-image')
//     // img.src = data.image;
    
    
//     // card.append(div, img)
//     document.body.append("game-container")
//     // console.log(member)
// }






// const API = "http://localhost:3000/members";
// const display = document.querySelector("#display-members");

// //grab json data using fetch
//async json fetch


// const members = fetch("http://localhost:3000/members")
// .then((response) => {
//     console.log('SUCCESS', response);
//     return response.json();
// })
// .then(data => {
//     // renderCards(data)
// }) 
// .catch((error) => {
//     console.log('UNSUCCESSFUL', error);
// });


// const getData = async() => {
//     const response = await fetch(API);
//     const data = await response.json();
//     return data
// }

// const displayMembers = async() => {
//     const renderCards = await getData();

// }
// displayMembers();  

  
    // const image = document.getElementById("display-members");
    // console.log(cards)
    
    // console.log(cards)
    // image.src = images
    // document.body.appendChild(cards)
    
    
    // renderCards.forEach((card) => {
        // console.log(object)
        // const member = document.getElementById('display-members')
        // console.log(renderCards)

        // card.appendChild
        // const member = document.createElement('div');
        // member.setAttribute ('src', './images/')
        // document.body.appendChild(image)
    // console.log(member)

        
    // });









//******* have each card appear **********
// function renderCards(members){
    // const cards = members.map((member) => {
    //     // const card = document.createElement("div");
    //     // const front = document.createElement("img");
    //     // const back = document.createElement("div");
    //     const front = document.createElement("div")
    //     front.textContent = member.name
    //     return members

// }

// return cards and render

// const cards = document.querySelectorAll('game-container');

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



// create 20 divs, two each for matching pair(???)
//create grid(???)



//   })
//         card.classList = "card";
//         front.classList = document.createElement("img");
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





// let flippedCard = false;
// let lockBoard= false;
// let firstCard, secondCard;


// //flip card action
// function flipCard(){
//     if (lockBoard) return;
//     if (this === firstCard) return;

//     this.classList.add('flip');

//     if (!flippedCard){
//         //first click
//         flippedCard = true;
//         firstCard = this;
    
//         return;
//     }
//         //second click
//         secondCard = this;
        
//         checkForMatch();
//     }

// //Check for match
// function checkForMatch(){
//     let isMatch = firstCard.dataset.member === secondCard.dataset.member;
    
//     isMatch ? disableCards() : unflipCards();

// //If does not match
// function disableCards(){
//         firstCard.removeEventListener("click", flipCard);
//         secondCard.removeEventListener("click", flipCard);

//     resetBoard();
// }

// //Time it takes to flip card back over
// function unflipCards(){
//     lockBoard = true;
//         setTimeout(() => {
//             firstCard.classList.remove("flip");
//             secondCard.classList.remove("flip");
            
//         resetBoard();
//         }, 1500);
//     }
// }

// function resetBoard(){
//     flippedCard = false;
//     lockBoard = false;
//     firstCard = null;
//     secondCard = null;
// }

// //Shuffle cards to different positions
// function shuffle(){
//     cards.forEach(card => {
//         let randomPosition = Math.random() *  12;
//         card.style.order = randomPosition ;
      
//     });
// }
// shuffle();


//FINISH ADDING Event listeners ***
// cards.forEach(card => card.addEventListener("click", flipCard)); (???)

//[ ] NEED ONE MORE EVENT LISTENER (Not another click event)
//[ ] EXTRA EVENT LISTENER