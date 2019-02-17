"use strict";
{
let greeting1 = confirm('Would you like to play a game?');

if (greeting1 === true) {
    let username = prompt("Pick a username?", "Juggling Jessica");

    let userHealthPoints = 40;
    let grantHealthPoints = 10;
    let wins = 0;

    console.log(`Let's Start! \n \n \t>> ${username} is starting with ${userHealthPoints} health points \n \t>> Grant is starting with ${grantHealthPoints} health points`);
   
    while (grantHealthPoints > 0) {

        console.log(`\n${username}'s Health: ${userHealthPoints -= Math.floor((Math.random()* 2) + 1)}`);
        console.log(`Grant's Health: ${grantHealthPoints -= Math.floor((Math.random() * 2) + 1)}`);

        if (userHealthPoints <= 0) {
            console.log(`\n \n Better Luck Next Time - The Almighty Grant Won!`);
            document.getElementById("result").innerHTML = `Better Luck Next Time - The Almighty Grant Won!`;
            break;
        }    
        if (grantHealthPoints <= 0 && wins <= 2) {
            wins++;
            console.log(`\n${username} is WINNER of round ${wins} of 3.`);  
            grantHealthPoints = 10;
        } 
        if (wins === 3) {
            console.log(`
            >>>>>GAME OVER<<<<<
            \n \nCongratulations ${username}! You've won!`);
            document.getElementById("result").innerHTML = `Congratulations ${username}! You've won!`;
            break;
        }
    
    }
}
else if (greeting1 === false) {
    console.log(`That's cool - Maybe next time!`);
    document.getElementById("result").innerHTML = "That's cool - Maybe next time!";
}


}




