// import functions and grab DOM elements
import { getRandomThrow, didUserWin } from "./utils.js";
// initialize global state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
const playButton = document.getElementById('play-button');
const whoWon = document.getElementById('who-won');
const totalWins = document.getElementById('total-wins')
const computerThrow = document.getElementById('computer-throw');

let winCounter = 0;
let lossCounter = 0;
let drawCounter = 0;

playButton.addEventListener('click', () => {
  const userChoice = document.querySelector('input:checked');
  const computerChoice = getRandomThrow();
  let winOrLose = didUserWin(userChoice.value, computerChoice);
  
  computerThrow.textContent = 'The computer chose ' + computerChoice;

  if (winOrLose === 'win') {
    winCounter++;
    whoWon.textContent = 'You won!'
  }
  if (winOrLose === 'draw') {
    drawCounter++;
    whoWon.textContent = 'You drew.'
  }
  if (winOrLose === 'lose') {
    lossCounter++;
    whoWon.textContent = 'You lost.'
  }
  totalWins.textContent = `${winCounter} wins, ${lossCounter} losses, ${drawCounter} draws.`
})

