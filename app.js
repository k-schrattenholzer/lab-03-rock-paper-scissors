// import functions and grab DOM elements
import { getRandomThrow, didUserWin } from "./utils.js";
// initialize global state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
const playButton = document.getElementById('play-button');

playButton.addEventListener('click', () => {
  const userChoice = document.querySelector('input:checked');
  const computerChoice = getRandomThrow();
  const winOrLose = didUserWin(userChoice.value, computerChoice);
  console.log(winOrLose);
})

