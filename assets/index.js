// next code will change cards back to face by click on them
var clickedCard = null;
var card1 = null;
var card2 = null;
var currentScore = 0;
var moveCounter = 0;
var counter = 100;
var time;
var isTimerOn = false;


document.getElementById('start-game').addEventListener('click', startMe);
document.getElementById('reset-game').addEventListener('click', resetMe);

function shuffle(array) {
    var currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
}


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
        clearInterval(time);
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
   
    time = setInterval(function(){
        if (counter > -1){
            document.getElementById('time-remaining').innerText = counter;
            counter--;
        }
    }, 1000);
    setTimeout(function(){
        if (currentScore < 8){
            alert('Time is out, you loose');
            clearInterval(time);
        }
        
    }, 101000);
}


function createGameBoard(){
    let gameBoard = document.getElementById('game-board');
    let cardArray = [];
    document.querySelectorAll('.card').forEach(function(card){
       cardArray.push(card);
    });
    let suffledCardArray = shuffle(cardArray);
    gameBoard.innerHTML = '';
    suffledCardArray.forEach(function(card){
        console.log(card.getAttribute('data-card-name'));
        gameBoard.append(card);
        card.addEventListener('click',onCardClicked);
     });
}


function startMe() {
    if (!isTimerOn){
        createGameBoard()
        isTimerOn = true;
        countdown();
    }
}

function resetMe() {
    if (!isTimeout===currentScore===8){
        clearInterval(time);
        clearInterval(moves); 
        createGameBoard()
          
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