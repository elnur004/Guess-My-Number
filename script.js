'use strict';

const secretNum = document.querySelector('.number').textContent = Math.trunc(Math.random() *10) + 1;
let score = 20;

    document.querySelector('.check').addEventListener('click', function() {
        const guess = Number(document.querySelector('.guess').value);
        console.log(secretNum);
        console.log(guess, typeof guess);
     
        if(!guess) {
         document.querySelector('.message').textContent = '⛔️ No number!';
        } else if(guess === secretNum) {
             document.querySelector('.message').textContent = '🎉 Correct Number!'
        } else if (guess < secretNum) {
            if(score > 1) {
                document.querySelector('.message').textContent = '📉 Lower Number!'
                score--;
                document.querySelector('.score').textContent = score;
            } else {
                document.querySelector('.message').textContent = '❌ You Lose!'
                document.querySelector('.score').textContent = 0;
            }
             
        } else if(guess > secretNum) {
            if(score > 1) {
                document.querySelector('.message').textContent = '📈 Heigher Number!'
                score--;
                document.querySelector('.score').textContent = score;
            } else {
                document.querySelector('.message').textContent = '❌ You Lose!'
                document.querySelector('.score').textContent = 0;
            }
        }
     })




