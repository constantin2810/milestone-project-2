// next code will change cards back to face by click on them

function onCardClicked(e) {
    const target = e.currentTarget;
    console.log(target.className);
    target.className = target.className
    .replace('back','front front-hidden')
    .trim();

    if (!clickedCard){
        clickedCard = target; 
    }else if (clickedCard){

    }
}