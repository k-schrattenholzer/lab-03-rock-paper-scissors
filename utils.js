const sideArray = ['rock', 'paper', 'scissors']

export function getRandomThrow() {
    const randomNum = Math.floor(Math.random()*3);
    return sideArray[randomNum];
}

export function didUserWin(player, computer) {
    if ((player === 'rock' && computer === 'scissors') || (player === 'paper' && computer === 'rock') 
    || (player === 'scissors' && computer === 'paper')) {
        return "win";
    }
    if (player === computer) {
        return "draw";
    }
    if ((player === 'scissors' && computer === 'rock') || (player === 'paper' && computer === 'scissors') 
    || (player === 'rock' && computer === 'paper')) {
        return "lose";
    }
}