// next code will change cards back to face by click on them
var clickedCard = null;
var card1 = null;
var card2 = null;
var currentScore = 0;
var moveCounter = 0;
var counter = 100;
var time;
var isTimerOn = false;

document.querySelectorAll('.card').forEach(function(card){
    card.addEventListener('click',onCardClicked);
});


function checkForMatch(card1, card2){
    let card1Name = card1.getAttribute('data-card-name');
    let card2Name = card2.getAttribute('data-card-name');

    if (card1Name.localeCompare(card2Name) === 0 ){
        console.log('Its a match');
        card1.removeEventListener('click', onCardClicked);
        card2.removeEventListener('click', onCardClicked);
        currentScore = currentScore + 1;
    }
    else{
        console.log('Not a match');
        unFlipCard(card1);
        unFlipCard(card2);
    }

}

function checkForWin(){
    if (currentScore===8){
        setTimeout(() => {
            alert('You won the game');
        },700);
    }
}


function flipCard(card){
    console.log(card)
    card.getElementsByClassName('front')[0].classList.remove('hidden');
    card.getElementsByClassName('back')[0].classList.add('hidden');
}


function unFlipCard(card){
    setTimeout(() => {
        card.getElementsByClassName('back')[0].classList.remove('hidden');
        card.getElementsByClassName('front')[0].classList.add('hidden');
    },700);
}

function countdown(){
    document.getElementById('time-remaining').value = counter;
    counter--;
    time = setTimeout("countdown()",1000);
}

function startMe() {
    if (!isTimerOn){
        isTimerOn = true;
        countdown();
    }
}
    
function updateMoveCounter(){
    document.getElementById('moves').innerText = moveCounter;
}

function onCardClicked(e) {
    moveCounter = moveCounter + 1;
    updateMoveCounter();
    if (card1 === null){
        card1 = e.currentTarget;
        flipCard(card1);
    }
    else{
        card2 = e.currentTarget;
        flipCard(card2);
        checkForMatch(card1, card2);
        checkForWin();
        card1 = null;
        card2 = null;
    }
}