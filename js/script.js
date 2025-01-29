"use strict";

let gameRunning = true;

const randomNum = Math.floor(Math.random()* 101);

while (gameRunning){
    let guess = prompt("Guess a number between 0 and 100");

    guess = Number(guess);

    if(isNaN(guess)){
        console.log("Please enter a valid number");
        continue;
    }


    if(guess === randomNum){
        console.log("Congratulations you guessed right!");
        alert("You won! The correct number was" + randomNum);
        gameRunning = false;
        break;
    }
    else if(guess < randomNum){
        console.log("Try a higher number.");
    }
    
    else{
        console.log("Try a smaller number");
    }

    
}