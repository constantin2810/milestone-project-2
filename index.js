// next code will change cards back to face by click on them
var clickedCard = null;

document.querySelectorAll('.card').forEach(function(card){
    card.addEventListener('click',onCardClicked);
});

function onCardClicked(e) {
    const target = e.currentTarget;
   target.getElementsByClassName('back')[0].classList.add('hidden');
   target.getElementsByClassName('front')[0].classList.remove('hidden');

    if (!clickedCard){
        clickedCard = target; 
    }else if (clickedCard){

    }
}