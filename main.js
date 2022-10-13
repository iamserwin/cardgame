const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let firstCard, secondCard;

let lockBoard = false;

let i = 1;

function flipCard() {
    console.log(this)

    this.classList.add('flip');

    if (lockBoard) return;
    this.classList.add('flip');

    if (this === firstCard) return;
    this.classList.add('flip');

    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
        
        return;

    }

    secondCard = this;
    hasFlippedCard = false;

    checkForMatch();

}

function checkForMatch() {
    if (firstCard.dataset.framework === 
        secondCard.dataset.framework) {
            disableCards();
            i++;

            if (i > 6) {
            let conf = false;
            conf = confirm('Are You Winning Son?');
            if (conf == true) document.body.className = "AnErrorHasOccured";
            else document.body.className = "AnErrorHasOccured2";
            }

            return;
            
    }

    unflipCards();
}

function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    resetBoard();



}

function unflipCards() {
    lockBoard = true;

    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        resetBoard();

       

    }, 500)

}

function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];

    

}

(function shuffle() {
    cards.forEach(card => {
        let ramdomPos = Math.floor(Math.random() * 12);
        card.style.order = ramdomPos;

    });
}) ();

cards.forEach(card => card.addEventListener('click', flipCard));