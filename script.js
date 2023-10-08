//playerSelection = prompt("What is your selection, scissors, paper or rock");

const scissors = document.querySelector("scissors");
const paper = document.querySelector("paper");
const rock = document.querySelector("rock");
const output = document.querySelector("output");

scissors.addEventListener("click", () => {
  output.textContent = "Scissors clicked";
});

paper.addEventListener("click", () => {
  output.textContent = "Paper clicked";
});

rock.addEventListener("click", () => {
  output.textContent = "Rock clicked";
});

let playerSelection = document.querySelector("button");

console.log(playerSelection);

game(playerSelection);
// playRound(playerSelection)

function getComputerChoice() {
  //Randomly return Scissors, Paper, or Rock for the computers choice
  let computerCalculation = Math.random(); //Generate random number
  let computerSelection = "";
  if (computerCalculation < 0.33) {
    return (computerSelection = "scissors");
  } else if (computerCalculation > 0.33 && computerCalculation < 0.66) {
    return (computerSelection = "paper");
  } else if (computerCalculation > 0.66) {
    return (computerSelection = "rock");
  }
}

function addPlayerWinCount(playerWinCount) {
  return (playerWinCount = playerWinCount + 1);
}

function addComputerWinCount(computerWinCount) {
  return (computerWinCount = computerWinCount + 1);
}

function addTieCount(tieCount) {
  return (tieCount = tieCount + 1);
}

function game() {
  // plays 5 rounds
  let playerWinCount = 0;
  let computerWinCount = 0;
  let tieCount = 0;
  playRound();

  console.log(
    "You won " +
      playerWinCount +
      " times, the computer won " +
      computerWinCount +
      " times, with " +
      tieCount +
      " tie games."
  );
  function playRound() {
    playerSelection = playerSelection.toLowerCase(); // converts playerSelection to lowercase
    computerSelection = getComputerChoice(); // gets the computers choice randomly each time playRound is called
    console.log("The player chose " + playerSelection);
    console.log("The computer chose " + computerSelection);
    if (playerSelection === "scissors") {
      // player chose scissors
      if (computerSelection === playerSelection) {
        console.log("ITS A TIE!");
        tieCount = addTieCount(tieCount);
      } else if (computerSelection === "paper") {
        console.log("YOU WIN!");
        playerWinCount = addPlayerWinCount(playerWinCount);
      } else {
        console.log("YOU LOSE!");
        computerWinCount = addComputerWinCount(computerWinCount);
      }
    } else if (playerSelection === "paper") {
      // player chose paper
      if (computerSelection === playerSelection) {
        console.log("ITS A TIE!");
        tieCount = addTieCount(tieCount);
      } else if (computerSelection === "rock") {
        console.log("YOU WIN!");
        playerWinCount = addPlayerWinCount(playerWinCount);
      } else {
        console.log("YOU LOSE!");
        computerWinCount = addComputerWinCount(computerWinCount);
      }
    } else if (playerSelection === "rock") {
      // player chose rock
      if (computerSelection === playerSelection) {
        console.log("ITS A TIE!");
        tieCount = addTieCount(tieCount);
      } else if (computerSelection === "scissors") {
        console.log("YOU WIN!");
        playerWinCount = addPlayerWinCount(playerWinCount);
      } else {
        console.log("YOU LOSE!");
        computerWinCount = addComputerWinCount(computerWinCount);
      }
    }
  }
}
