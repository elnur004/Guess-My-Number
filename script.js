'use strict';

const secretNum = document.querySelector('.number').textContent = Math.trunc(Math.random() *10) + 1;

    document.querySelector('.check').addEventListener('click', function() {
        const guess = Number(document.querySelector('.guess').value);
        console.log(secretNum);
        console.log(guess, typeof guess);
     
        if(!guess) {
         document.querySelector('.message').textContent = '⛔️ No number!';
        } else if(guess === secretNum) {
             document.querySelector('.message').textContent = '🎉 Correct Number!'
        } else if (guess < secretNum) {
             document.querySelector('.message').textContent = '📉 Lower Number!'
        } else if(guess > secretNum) {
             document.querySelector('.message').textContent = '📈 Heigher Number!'
        }
     })




