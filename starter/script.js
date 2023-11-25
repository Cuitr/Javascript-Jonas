'use strict';
/*
when the roll dice btn was pressed :
_Generate a random number along with the point in the dice (1 to 6)
_Player press hold btn to hold their sroce and end their turn
_If the dot is 1, then reset the current score of that player and end that player turn
_If one of two players get 100 score first, he/she will win the game
_press the new game btn to start another game
*/

/* Set display */
const dice = document.querySelector(`.dice`);
const image = document.querySelector(`.dice`);
const player0El = document.querySelector(`.player--active`);
const player1El = document.querySelector(`.player--1`);
const score0El = document.getElementById(`score--0`);
const score1El = document.getElementById(`score--1`);
const current0El = document.getElementById(`current--0`);
const current1El = document.getElementById(`current--1`);
/* Set value for current score, total score of 2 player and switch player */
let currentScore = 0;
let actingPlayer = 0;// 0 is stand for player 1 and 1 is for player 2
const scores = [0, 0];//total score
/* Set beginning display */
    score0El.textContent = 0;
    score1El.textContent = 0;
    image.classList.add(`hidden`);
    current0El.textContent = 0;
    current1El.textContent = 0;
    currentScore = 0;
    /*---Set NEW GAME click event--- */
document.querySelector(`.btn--new`).addEventListener(`click`, function(){
    score0El.textContent = 0;
    score1El.textContent = 0;
    image.classList.add(`hidden`);// we need to add a .hidden class on the css file first
    current0El.textContent = 0;
    current1El.textContent = 0;
    currentScore = 0;
})
/*---Set function for ROLL RICE click event--- */
const randomDice = function(){
    const randomNum = Math.trunc(Math.random()*6 + 1);
    image.classList.remove(`hidden`);
    /*
    My approach 🤣 (so stupid right?)
    switch(randomNum){
        case 1:
            image.src = `dice-1.png`;
            break;
        case 2:
            image.src = `dice-2.png`;
            break;
        case 3:
            image.src = `dice-3.png`;
            break;
        case 4:
            image.src = `dice-4.png`;
            break;
        case 5:
            image.src = `dice-5.png`;
            break;
        case 6:
            image.src = `dice-6.png`;
            break;
    }
    */
   /*--Jonas approach-- 😍*/ 
   image.src = `dice-${randomNum}.png`;
    if(randomNum !== 1){
        currentScore += randomNum;
        document.getElementById(`current--${actingPlayer}`).textContent = currentScore;
}else{//switch the player (randomNum == 1)
    document.getElementById(`current--${actingPlayer}`).textContent = 0;
    actingPlayer = actingPlayer === 0 ? 1 : 0;
    /* the current player is 1 which stand for 0 value. if randomNum == 1, then actingPlayer will have the value of 1 which is player 2
     */
    //randumNum == 1: actingPlayer == 0 -> reasigned actingPlayer == 1
     currentScore = 0;
    player0El.classList.toggle(`player--active`);
    /*.toggle WILL ADD TH CLASS IF IT WASN'T THERE AND IF IT WAS THERE, IT WILL BE REMOVED */
    player1El.classList.toggle(`player--active`);
}
}

/*---Set function for HOLD click event---*/




document.querySelector(`.btn--roll`).addEventListener(`click`, randomDice);
document.querySelector(`.btn--hold`).addEventListener(`click`, holdScore);

