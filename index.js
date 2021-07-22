// next code will change cards back to face by click on them
var clickedCard = null;

document.querySelectorAll('.card').forEach(function(card){
    card.addEventListener('click',onCardClicked);
});

function onCardClicked(e) {
   const target = e.currentTarget;
   if(
       target === clickedCard ||
       target.className.includes('done')){
       return;
   }

   target.getElementsByClassName('back')[0].classList.add('hidden');
   target.getElementsByClassName('front')[0].classList.remove('hidden');
   target.className += 'done';

    if (!clickedCard){
        // if we haven't clicked a card ,keep track of the card
        clickedCard = target; 
    }else if (clickedCard){
        // if we have already clicked a card , check if the new card matches the old card
        if(
            clickedCard.getElementsByClassName('back') !==
            target.getElementsByClassName('front')
        ){
            preventClick = true;
            setTimeout(() => {
                clickedCard.className.replace('done','');
                clickedCard = null;
                preventClick = false;
            },500);
        }else{
            clickedCard = null;
        }
    }
}