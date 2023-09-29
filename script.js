playerSelection = prompt("What is your selection, scissors, paper or rock");

playRound(playerSelection)

function getComputerChoice () {              //Randomly return Scissors, Paper, or Rock for the computers choice
    let computerCalculation = Math.random();     //Generate random number
    let computerSelection = "Text"
    if (computerCalculation < 0.33){
        return computerSelection = "scissors";
    } else if (computerCalculation > 0.33 && computerCalculation < 0.66) {
        return computerSelection = "paper";
    } else if (computerCalculation > 0.66) {
        return computerSelection = "rock";
    }
}

function playRound (playerSelection,computerSelection) {
    playerSelection = playerSelection.toLowerCase();                // converts playerSelection to lowercase
    computerSelection = getComputerChoice()                         // gets the computers choice randomly each time playRound is called
    console.log("The player chose " + playerSelection);
    console.log("The computer chose " + computerSelection);
    if (playerSelection === "scissors") {                           // player chose scissors
        if (computerSelection === playerSelection) {
            console.log("ITS A TIE!");
        } else if (computerSelection === "paper") {
            console.log("YOU WIN!");
        } else {
            console.log("YOU LOSE!");
        }
    } else if (playerSelection === "paper") {                       // player chose paper
        if (computerSelection === playerSelection) {
            console.log("ITS A TIE!");
        } else if (computerSelection === "rock"){
            console.log("YOU WIN!");
        } else {
            console.log("YOU LOSE!");
        }
   
    } else if (playerSelection === "rock") {                        // player chose rock
        if (computerSelection === playerSelection) {
            console.log("ITS A TIE!");
        } else if (computerSelection === "scissors"){
            console.log("YOU WIN!");
        } else {
            console.log("YOU LOSE!");
        }
    }
}

