'use strict';

let secretNum = Math.trunc(Math.random() *10) + 1;
let score = 20;
let highScore = 0;

const domStrings = {
  guess: document.querySelector('.guess'),
  body: document.querySelector('body'),
  number: document.querySelector('.number'),
  highscore: document.querySelector('.highscore'),
  score: document.querySelector('.score'),
};


const printMessage = function(message) {
  document.querySelector('.message').textContent = message
};


const checkNumber = function() {
  const guess = Number(domStrings.guess.value);
     
        // When there is no input
        if(!guess) {
         printMessage('⛔️ No number!');

        // When player wins
        } else if(guess === secretNum) {
          // document.querySelector('.message').textContent = '🎉 Correct Number!';
             printMessage('🎉 Correct Number!');
             domStrings.body.style.backgroundColor = '#60b347';
             domStrings.number.style.width = '30rem';
             domStrings.number.textContent = secretNum;

             if(score > highScore) {
                 highScore = score;
                 domStrings.highscore.textContent = highScore;
             }

        // Guess the correct number
        } else if (guess !== secretNum) {
          printMessage(guess > secretNum ? '📈 Heigher Number!' : '📉 Lower Number!');
          score--;
          domStrings.score.textContent = score;
        }
        // else if (guess < secretNum) {
        //     if(score > 1) {
        //         domStrings.message.textContent = '📉 Lower Number!';
        //         score--;
        //         domStrings.score.textContent = score;
        //     } else {
        //         domStrings.message.textContent = '❌ You Lose!';
        //         domStrings.score.textContent = 0;
        //     }
        
        // // Guess is to heigh
        // } else if(guess > secretNum) {
        //     if(score > 1) {
        //         domStrings.message.textContent = '📈 Heigher Number!';
        //         score--;
        //         domStrings.score.textContent = score;
        //     }
             else {
                printMessage('❌ You Lose!');
                domStrings.score.textContent = 0;
            }
}

// Callback for Enter key
const keyDownEvt = function(el) {
  if(el.key === 'Enter') {
    checkNumber();
  }
}

// for pressing the ENTER key
document.addEventListener('keydown', keyDownEvt);

document.querySelector('.check').addEventListener('click',  checkNumber);


// Restart the game via the again button
document.querySelector('.again').addEventListener('click', function() {
    // Restore all values to initial
    score = 20
    secretNum = Math.trunc(Math.random() *10) + 1;
    domStrings.number.textContent = '?';
    domStrings.number.value = secretNum;
    domStrings.number.style.width = '15rem';
    printMessage('Start guessing...');
    domStrings.score.textContent = score;
    domStrings.body.style.backgroundColor = '#222';
    domStrings.guess.value = '';
})


