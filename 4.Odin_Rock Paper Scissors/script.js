// Javascript Rock Paper Scissors
// create a function getComputerChoice  that will return Rock Paper Scissors,
// getComputerChoice is the function that makes the computer play
// creater a function playRound that takes two parameters playerSelection and
// computerSelection and returns a string that declares the winner of the round
// return- "You Lose! Paper beats Rock"
// users input must be case-insensitive
// ties should be accounted by replaying round.

function getComputerChoice() {
  let randomChoice = Math.floor(Math.random() * 3);
  if (randomChoice === 0) {
    return "rock";
  } else if (randomChoice === 1) {
    return "scissors";
  } else if (randomChoice === 2) {
    return "paper";
  }
}

function playRound(playerSelection, computerSelection) {
  const playerChoice = playerSelection.toLowerCase();

  if (playerChoice === computerSelection) {
    return "It's a TIE!!!";
  } else if (
    (playerChoice === "rock" && computerSelection === "scissors") ||
    (playerChoice === "paper" && computerSelection === "rock") ||
    (playerChoice === "scissors" && computerSelection === "rock")
  ) {
    return `You win! ${playerChoice} beats ${computerSelection} `;
  } else {
    return ` You Lose! ${computerSelection} beats ${playerChoice}`;
  }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

//  Write a NEW function called game(). Use the previous function inside of this one to play a best-of-five game that keeps score and reports a winner or loser at the end.
