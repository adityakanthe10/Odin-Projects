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
  var playerSelection = choice;
  var computerSelection = getComputerChoice();
  const result = playRound(playerSelection, computerSelection);
  const roundScoreDiv = document.getElementById("roundScore");
  if (roundScoreDiv) {
    roundScoreDiv.textContent = result.message;
  } else {
    console.error("roundScoreDiv is null.Element not found");
  }
  updateScoreboard(result);
  // game(result);
  // game();
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

// Introducing variables to count round,Wins .

// Actual Logic  of per round Winner
function playRound(playerSelection, computerSelection) {
  let computerScore = 0;
  let roundsPlayed = 0;
  let playerScore = 0;
  const playerChoice = playerSelection.toLowerCase();
  if (playerChoice === computerSelection) {
    return {
      message: "It's a TIE!!!",
      playerWin: 0,
      computerWin: 0,
      rounds: 1,
    };
  } else if (
    (playerChoice === "rock" && computerSelection === "scissor") ||
    (playerChoice === "paper" && computerSelection === "rock") ||
    (playerChoice === "scissor" && computerSelection === "paper")
  ) {
    return {
      message: `You win! ${playerChoice} beats ${computerSelection} `,
      rounds: 1,
      playerWin: 1,
      computerWin: 0,
    };
  } else {
    return {
      message: ` You Lose! ${computerSelection} beats ${playerChoice}`,
      rounds: 1,
      computerWin: 1,
      playerWin: 0,
    };
  }
}

// Update Scoreboard Function

let playerScore = 0;
let computerScore = 0;
let roundsPlayed = 0;
function updateScoreboard(result) {
  playerScore += result.playerWin;
  computerScore += result.computerWin;
  roundsPlayed += result.rounds;
  const scoreboard = document.getElementById("playerScore");
  if (scoreboard) {
    scoreboard.textContent = `Player : ${playerScore} Computer : ${computerScore}`;
    const roundDisplay = document.getElementById("round");
    roundDisplay.textContent = roundsPlayed;
  } else {
    console.error("Scoreboard element not found");
  }
  checkWinner();
}

//  Write a NEW function called game(). Use the previous function inside of this one to play a best-of-five game that keeps score and reports a winner or loser at the end.

function game() {
  // Reset scores and rounds for a new game
  playerScore = 0;
  computerScore = 0;
  roundsPlayed = 0;
  // Loop until someone reaches 3 wins
  while (playerScore < 3 && computerScore < 3) {
    updateScoreboard(playRound(inputChoice(), getComputerChoice()));
  }
  checkWinner();

  const WinnerDiv = document.getElementById("Winner");
  if (WinnerDiv) {
    WinnerDiv.textContent =
      playerScore > computerScore ? "You Win!" : "You Lose!";
  } else {
    console.error("Winner Element not found");
  }
}

function checkWinner() {
  if (playerScore === 3) {
    // Player wins the game
    game();
  } else if (computerScore === 3) {
    game();
  }
}
