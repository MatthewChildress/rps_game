for (let i = 0; i < 5; i++) {
    let playerSelection = prompt('Rock, Paper, Scissors?');
    console.log(playerSelection);
    const computerSelection = computerPlay();
    console.log(computerSelection);
    console.log(playRound(playerSelection, computerSelection));
    console.log("Your score: " + playerScore);
    console.log("Computer's score: " + computerScore)
    console.log("You've tied " + tieScore + " times.");
}

function pImagePlay() {
    
    if (playerSelection == 'frodo') pImage.setAttribute("src", "frodo.jpg");
    
    else if (playerSelection == 'shelob') pImage.setAttribute("src", "shelob.jpg");
    
    else if (playerSelection == 'sam') pImage.setAttribute("src", "sam.jpg");
        pImage.src = "sam.jpg";
}

switch (computerSelection) {
    case 'rock':
        computerPick.textContentt = "👊"
        break
    case 'paper':
        computerPick.textcontent = "✋"
        break
    case 'scissors':
        computerPick.textcontent = "✌"
        break
}

pImagePlay(playerSelection)
cImagePlay(computerSelection)


frodoBtn.addEventListener('click',() => handleChoice('frodo'));
shelobBtn.addEventListener('click',() => handleChoice('shelob'));
samBtn.addEventListener('click',() =>handleChoice('sam'));

if (cpuChoice === 'rock') {
    computerPick.textContentt = "👊"
}
if (cpuChoice === 'paper') {
    computerPick.textcontent = "✋"
}
if (cpuChoice === 'scissors') {
    computerPick.textcontent = "✌"
}

let reset = () => {
    let rounds = 0;
    let playerScore = 0;
    let computerScore = 0;
    let tieScore = 0;
    tieScore.textContent = ' '
    cScore.textContent = ' '
    pScore.textContent = ' '
    playerPick.textContent = ' '
    computerPick.textcontent = ' '
  }

  let game = () => {
      if (playerScore === 5 || computerScore === 5) {
          reset()
      }
      else {

      }
  }

  let gameWin = () => {
    return (playerScore === 5 || computerScore === 5)
}