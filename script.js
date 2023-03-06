"use strict";

//ACCESSING ELEMENTS
//querySelector and getElementById



//getElementById to select the span
// const currentscore = document.getElementById("current-score");
// const attemptsleft = document.getElementById("attempts-left");
// console.log(currentscore);
// console.log(attemptsleft);


//querySelector to select the span

// const currentscore = document.querySelector("#current-score");
// const attemptsleft = document.querySelector("#attempts-left");
// const inputNum = document.querySelector(".number-section .input-number");
// const subheading = document.querySelector("h2");
// const btn = document.querySelector(".btn");
// console.log(currentscore);
// console.log(attemptsleft);
// console.log(inputNum);
// console.log(subheading);
// console.log(btn);


// //changing content
// //textcontent, innerHtml, innertext
// subheading.textContent = "Javascript DOM";




//select element
//button
const body = document.querySelector('body');
const btnNew = document.querySelector('.new-game');
const btnCheck = document.querySelector('.btn-check');

//highscore current score and attempts left

const highscoreEl = document.querySelector('.current-high-score');
const currentscoreEl = document.querySelector('#current-score');
const attemptsleftEl = document.querySelector('#attempts-left');



//message input and secret


const messageEl = document.querySelector('.message');
const inputEl = document.querySelector('.input-number');
const secretNumEl = document.querySelector('.secret-number');

//create global variable


let currentscore = 20;
let highscore = 0;
let attemptsleft = 10;

//generate random number

let secretNum = Math.trunc(Math.random() * 20) + 1;
// console.log(secretNum);


btnCheck.addEventListener('click' , function() {
    if (attemptsleft > 0) {
        attemptsleft--;
        attemptsleftEl.textContent = attemptsleft;
        let guess = +inputEl.value;

        if (!guess) {
            messageEl.textContent = "🙄 No number or 0 is entered"
        } else if (guess === secretNum) {
            messageEl.textContent = "You won ✨😂";
            secretNumEl.textContent = secretNum;

            body.style.backgroundColor = "blue";
            btnCheck.classList.add('disabled');

            highscore = currentscore > highscore ? currentscore : highscore;
            highscoreEl.textContent = highscore;
            
        }else if (guess !== secretNum) {
            let message =
            guess > secretNum ? "You guess too high" : "You guess too low";
            messageEl.textContent = message;

            currentscore--;
            currentscoreEl.textContent = currentscore;
            body.style.backgroundColor = 'orangered'
            setTimeout(function() {
                body.style.backgroundColor = '#000'
            }, 200)
        }
    }else {
        //lost game

        messageEl.textContent = "You lost the game🙄";
        body.style.backgroundColor = "orangered";

    }
})
 
btnNew.addEventListener("click" , function() {
    currentscore = 20;
    currentscoreEl.textContent = currentscore;
    attemptsleft = 10;
    attemptsleftEl.textContent = attemptsleft;

    body.style.backgroundColor = "#000";

    inputEl.value = "";

    secretNum = Math.trunc(Math.random() * 20) + 1;
    secretNumEl.textContent = "?";

    btnCheck.classList.remove('disabled');
    messageEl.textContent = "Guess a number between 1-20";

})



