//  DOM to take input .
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissor = document.getElementById("scissor");

rock.addEventListener("click", function () {
  inputChoice("rock");
});
paper.addEventListener("click", function () {
  inputChoice("paper");
});
scissor.addEventListener("click", function () {
  inputChoice("scissor");
});

function inputChoice(choice) {
  playerSelection = choice;
  computerSelection = getComputerChoice();
  const result = playRound(playerSelection, computerSelection);
  const roundScoreDiv = document.getElementById("roundScore");
  if (roundScoreDiv) {
    roundScoreDiv.textContent = result.meassage;
  } else {
    console.error("roundScoreDiv is null.Element not found");
  }
}
// Introduced choices
let playerSelection;
let computerSelection;

// Random Computer Choice.
function getComputerChoice() {
  let randomChoice = Math.floor(Math.random() * 3);
  if (randomChoice === 0) {
    return "rock";
  } else if (randomChoice === 1) {
    return "scissor";
  } else if (randomChoice === 2) {
    return "paper";
  }
}

// Introducing variables to cound round,Wins .

// Actual Logic  of per round Winnnwe
function playRound(playerSelection, computerSelection) {
  let computerWin = 0;
  let rounds = 0;
  let playerWin = 0;
  const playerChoice = playerSelection.toLowerCase();
  if (playerChoice === computerSelection) {
    return {
      message: "It's a TIE!!!",
      playerWin,
      computerWin,
      rounds,
    };
  } else if (
    (playerChoice === "rock" && computerSelection === "scissor") ||
    (playerChoice === "paper" && computerSelection === "rock") ||
    (playerChoice === "scissor" && computerSelection === "paper")
  ) {
    rounds++;
    playerWin++;
    return {
      message: `You win! ${playerChoice} beats ${computerSelection} `,
      rounds,
      playerWin,
    };
  } else {
    rounds++;
    computerWin++;
    return {
      message: ` You Lose! ${computerSelection} beats ${playerChoice}`,
      rounds,
      computerWin,
    };
  }
}

//  Write a NEW function called game(). Use the previous function inside of this one to play a best-of-five game that keeps score and reports a winner or loser at the end.
function game(playerSelection) {}
