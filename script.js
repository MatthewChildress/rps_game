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


// array for computer choices
const choices = ['rock','paper','scissors']

let computerPlay = () => {
    // randomized choice for PC when function is triggered
    const cpuChoice = choices[Math.floor(Math.random() * choices.length)];
    switch (cpuChoice) {
        case 'rock':
            computerPick.textContent = "👊"
            break
        case 'paper':
            computerPick.textContent = "✋"
            break
        case 'scissors':
            computerPick.textContent = "✌"
            break
    }
    return cpuChoice;
}

// if/else to determine round winner
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
        scoreMessage.textContent = `${playerSelection} is just ${computerSelection}.`;
        return tie;
    }
}

// defaults for scores & strings for .textContent
let playerScore = parseInt(0);
let computerScore = parseInt(0);
let tieScore = parseInt(0);
let win = "You win!"
let lose = "You lose!"
let tie = "It's a tie."

// event listenrs for button clicks to trigger playRound()
rockBtn.addEventListener('click',() => handleChoice('rock'));
paperBtn.addEventListener('click',() => handleChoice('paper'));
scissorsBtn.addEventListener('click',() =>handleChoice('scissors'));

// function to determine if board needs to be reset
// otherwise sets up computer choice for playRound()
function handleChoice(playerSelection) {
    if (gameWin()) {
        reset()
        return
    }
    const computerSelection = computerPlay();
    playRound(playerSelection, computerSelection)
    clickPlay(playerSelection)

}
let clickPlay = (playerSelection,) => {
    switch (playerSelection) {
        case 'rock':
            playerPick.textContent = "👊"
            break
        case 'paper':
            playerPick.textContent = "✋"
            break
        case 'scissors':
            playerPick.textContent = "✌"
            break
    }
}

// ties back into handleChoice() to see if game is over
let gameWin = () => {
    return (playerScore === 5 || computerScore === 5)
}

// ties back into handleChoice() to reset game gameWin() is triggered
// resets all .textContent that displays everything from a function
let reset = () => {
    playerScore = parseInt(0);
    computerScore = parseInt(0);
    tieScore = parseInt(0);
    tScore.textContent = ' '
    cScore.textContent = ' '
    pScore.textContent = ' '
    playerPick.textContent = ' '
    computerPick.textContent = ' '
    scoreInfo.textContent = 'Choose Your Move'
    scoreMessage.textContent = 'First To Five Wins!'
  }

