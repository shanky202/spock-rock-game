
const playerScoreEle = document.getElementById('playerScore');
const playerChoiceEle = document.getElementById('playerChoice');
const computerScoreEle = document.getElementById('computerScore');
const computerChoiceEle = document.getElementById('computerChoice');
const resultText = document.getElementById('resultText');

const playerRock = document.getElementById('playerRock');
const playerPaper = document.getElementById('playerPaper');
const playerScissors = document.getElementById('playerScissors');
const playerLizard = document.getElementById('playerLizard');
const playerSpock = document.getElementById('playerSpock');

const computerRock = document.getElementById('computerRock');
const computerPaper = document.getElementById('computerPaper');
const computerScissors = document.getElementById('computerScissors');
const computerLizard = document.getElementById('computerLizard');
const computerSpock = document.getElementById('computerSpock');

const allGameIcons = document.querySelectorAll('.far')


const choices = {
  rock: { name: 'Rock', defeats: ['scissors', 'lizard'] },
  paper: { name: 'Paper', defeats: ['rock', 'spock'] },
  scissors: { name: 'Scissors', defeats: ['paper', 'lizard'] },
  lizard: { name: 'Lizard', defeats: ['paper', 'spock'] },
  spock: { name: 'Spock', defeats: ['scissors', 'rock'] },
};

let playerScoreNumber = 0;
let computerScoreNumber = 0;  
let computerChoice = '';

// Reset all 'selected' icons
function resetSelected() {
  allGameIcons.forEach((icon) => {
    icon.classList.remove('selected');
  });
}

// Ramdom Computer Choice
function computerRandomChoice() {
  const computerChoiceNumber = Math.floor(Math.random() * 5);
  if (computerChoiceNumber === 0) {
    computerChoice = 'rock'
  } else if (computerChoiceNumber === 1) {
    computerChoice = 'paper'
  } else if (computerChoiceNumber === 2) {
    computerChoice = 'scissors'
  } else if (computerChoiceNumber === 3) {
    computerChoice = 'lizard'
  } else {
    computerChoice = 'spock'
  }
}

// Add selected styling & computer choice
function displayComputerChoice() {
  switch (computerChoice) {
    case 'rock':
      computerRock.classList.add('selected');
      computerChoiceEle.textContent = ' --- Rock';
      break;
    case 'paper':
      computerPaper.classList.add('selected');
      computerChoiceEle.textContent = ' --- Paper';
      break;
    case 'scissors':
      computerScissors.classList.add('selected');
      computerChoiceEle.textContent = ' --- Scissors';
      break;
    case 'lizard':
      computerLizard.classList.add('selected');
      computerChoiceEle.textContent = ' --- Lizard';
      break;
    case 'spock':
      computerSpock.classList.add('selected');
      computerChoiceEle.textContent = ' --- Spock';
      break;
  }
}

// Check result, increase scores, update resultText
function updateScore(playerChoice) {
  if (playerChoice === computerChoice) {
    resultText.textContent = "It's a tie."
  } else {
    const choice = choices[playerChoice];
    console.log(choice.defeats.indexOf(computerChoice));
    if (choice.defeats.indexOf(computerChoice) > -1) {
      resultText.textContent = 'You Won!'; 
      playerScoreNumber++;
      playerScoreEle.textContent = playerScoreNumber;
    } else {
      resultText.textContent = 'You Lost!'; 
      computerScoreNumber++;
      computerScoreEle.textContent = computerScoreNumber;
    }
  }
}

// Call function to process turn 
function checkResult(playerChoice) {
  resetSelected();
  computerRandomChoice();
  displayComputerChoice();
  updateScore(playerChoice)
}

// Passing player selection value and styling icon
function select(playerChoice) {
  checkResult(playerChoice);
  // Add 'selected' styling & playerchoise
  switch (playerChoice) {
    case 'rock':
      playerRock.classList.add('selected');
      playerChoiceEle.textContent = ' --- Rock';
      break;
    case 'paper':
      playerPaper.classList.add('selected');
      playerChoiceEle.textContent = ' --- Paper';
      break;
    case 'scissors':
      playerScissors.classList.add('selected');
      playerChoiceEle.textContent = ' --- Scissors';
      break;
    case 'lizard':
      playerLizard.classList.add('selected');
      playerChoiceEle.textContent = ' --- Lizard';
      break;
    case 'spock':
      playerSpock.classList.add('selected');
      playerChoiceEle.textContent = ' --- Spock';
      break;
  }

}


