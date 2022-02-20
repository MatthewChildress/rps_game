let computerPlay = () => {
    const choices = ['rock', 'paper', 'scissors'];
    const choice = choices[Math.floor(Math.random() * choices.length)];
    return choice;
}
let playRound = (playerSelection,computerSelection) => {
    if ((playerSelection.toLowerCase() === 'rock' && computerSelection === 'scissors') ||
        (playerSelection.toLowerCase() === 'paper' && computerSelection === 'rock') ||
        (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'paper')) {
        playerScore++;
        return win;        
    }
    else if ((playerSelection.toLowerCase() === 'rock' && computerSelection === 'paper') ||
        (playerSelection.toLowerCase() === 'paper' && computerSelection === 'scissors') ||
        (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'rock')) {
        computerScore++;
        return lose;        
    }
    else {
        tieScore++;
        return tie;
    }
}
let playerScore = parseInt(0);
let computerScore = parseInt(0);
let tieScore = parseInt(0);
let win = "You win!"
let lose = "You lose!"
let tie = "It's a tie."
