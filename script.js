'use strict';

let secretNum = Math.trunc(Math.random() *10) + 1;
let score = 20;

    document.querySelector('.check').addEventListener('click', function() {
        const guess = Number(document.querySelector('.guess').value);
        console.log(secretNum);
        console.log(guess, typeof guess);
     
        // When there is no input
        if(!guess) {
         document.querySelector('.message').textContent = '⛔️ No number!';

        // Player wins
        } else if(guess === secretNum) {
             document.querySelector('.message').textContent = '🎉 Correct Number!';
             document.querySelector('body').style.backgroundColor = '#60b347';
             document.querySelector('.number').style.width = '30rem';
             document.querySelector('.number').textContent = secretNum;


        // Guess is too low
        } else if (guess < secretNum) {
            if(score > 1) {
                document.querySelector('.message').textContent = '📉 Lower Number!';
                score--;
                document.querySelector('.score').textContent = score;
            } else {
                document.querySelector('.message').textContent = '❌ You Lose!';
                document.querySelector('.score').textContent = 0;
            }
        
        // Guess is to heigh
        } else if(guess > secretNum) {
            if(score > 1) {
                document.querySelector('.message').textContent = '📈 Heigher Number!';
                score--;
                document.querySelector('.score').textContent = score;
            } else {
                document.querySelector('.message').textContent = '❌ You Lose!';
                document.querySelector('.score').textContent = 0;
            }
        }
     })


// Restart the game via the again button
document.querySelector('.again').addEventListener('click', function() {
    // Restore all values to initial
    score = 20
    secretNum = Math.trunc(Math.random() *10) + 1;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.number').value = secretNum;
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.guess').value = '';
})


