// Javascript Rock Paper Scissors
function playGame(playerChoice) {
  var choices = ["rock", "paper", "scissors"];
  var computerChoice = choices[Math.floor(Math.random() * 3)];

  var result = determineWinner(playerChoice, computerChoice);

  displayResult(playerChoice, computerChoice, result);
}

function determineWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "It's a tie!";
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    return "You win!";
  } else {
    return "You lose!";
  }
}

function displayResult(playerChoice, computerChoice, result) {
  var message = `You chose ${playerChoice}, the computer chose ${computerChoice}. ${result}`;
  document.getElementById("result").innerText = message;
}
