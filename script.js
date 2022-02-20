let rockBtn = document.getElementById('rock');
let paperBtn = document.getElementById('paper');
let scissorsBtn = document.getElementById('scissors');
let playerPick = document.getElementById('playerPick');
let computerPick = document.getElementById('computerPick');
let pScore = document.getElementById('playerScore');
let cScore = document.getElementById('computerScore');
let tScore = document.getElementById('tieScore');
let scoreInfo = document.getElementById('scoreInfo');
let scoreMessage = document.getElementById('scoreMessage');

const choices = ['rock', 'paper', 'scissors'];

let computerPlay = () => {
    const cpuChoice = choices[Math.floor(Math.random() * choices.length)];
    return cpuChoice;
}
let playRound = (playerSelection,computerSelection) => {
    if ((playerSelection.toLowerCase() === 'rock' && computerSelection === 'scissors') ||
        (playerSelection.toLowerCase() === 'paper' && computerSelection === 'rock') ||
        (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'paper')) {
        playerScore++;
        pScore.textContent = playerScore;
        scoreInfo.textContent = "You won this round!";
        scoreMessage.textContent = `${playerSelection} beats ${computerSelection}`;
        return win;        
    }
    else if ((playerSelection.toLowerCase() === 'rock' && computerSelection === 'paper') ||
        (playerSelection.toLowerCase() === 'paper' && computerSelection === 'scissors') ||
        (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'rock')) {
        computerScore++;
        cScore.textContent = computerScore;
        scoreInfo.textContent = "You lost this round!";
        scoreMessage.textContent = `${playerSelection} loses to ${computerSelection}`;
        return lose;        
    }
    else {
        tieScore++;
        tScore.textContent = tieScore;
        scoreInfo.textContent = "It's a tie.";
        scoreMessage.textContent = `${playerSelection} is the same as ${computerSelection}. Multiverse?`;
        return tie;
    }
}
let playerScore = parseInt(0);
let computerScore = parseInt(0);
let tieScore = parseInt(0);
let win = "You win!"
let lose = "You lose!"
let tie = "It's a tie."

rockBtn.addEventListener('click',() => handleChoice('rock'));
paperBtn.addEventListener('click',() => handleChoice('paper'));
scissorsBtn.addEventListener('click',() =>handleChoice('scissors'));

function handleChoice(playerSelection) {
    const computerSelection = computerPlay();
    playRound(playerSelection, computerSelection)
    clickPlay(playerSelection, computerSelection)
}

let clickPlay = (playerSelection, computerSelection) => {
    switch (playerSelection) {
        case 'rock':
            playerPick.textContent = 'ROCK'
            break
        case 'paper':
            playerPick.textContent = 'PAPER'
            break
        case 'scissors':
            playerPick.textContent = 'SCISSORS'
            break
    }
    switch (computerSelection) {
        case 'rock':
            computerPick.textContent = 'ROCK'
            break
        case 'paper':
            computerPick.textContent = 'PAPER'
            break
        case 'scissors':
            computerPick.textContent = 'SCISSORS'
            break
    }
}
