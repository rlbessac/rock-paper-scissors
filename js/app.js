const playerScore = document.getElementById('p-score');
const computerScore = document.getElementById('c-score');
const resetBtn = document.getElementById('reset-btn');
const choices = document.querySelectorAll('.choice');
const roundText = document.getElementById('round-text');
const playerImage = document.getElementById('player-img');
const computerImage = document.getElementById('computer-img')
const resultsText = document.getElementById('results-text');
const resultsContainer = document.getElementById('results-container');
const nextBtn = document.getElementById('next-btn');

const scoreboard = {
    round: 1,
    player: 0,
    computer: 0
}

function resetGame(){
    scoreboard.round = 1;
    scoreboard.player = 0;
    scoreboard.computer = 0;
    playerScore.innerHTML = `Player Score: ${scoreboard.player}`;
    computerScore.innerHTML = `Computer Score: ${scoreboard.computer}`;
}

function getComputerChoice(){
    const random = Math.random();
    if (random < 0.34) {
        return 'rock';
    } else if (random <= 0.67) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function determineWinner(pChoice, cChoice) {
    if(pChoice == 'rock'){
        if(cChoice == 'rock'){
            return 'draw'
        } else if(cChoice == 'paper'){
            return 'computer'
        } else {
            return 'player'
        }
    } else if (pChoice == 'paper'){
        if(cChoice == 'rock'){
            return 'player'
        } else if(cChoice == 'paper'){
            return 'draw'
        } else {
            return 'computer'
        }
    } else {
        if(cChoice == 'rock'){
            return 'computer'
        } else if(cChoice == 'paper'){
            return 'player'
        } else {
            return 'draw'
        }
    }
}

function displayResults(p,c,w) {
    resultsContainer.style.display = 'flex';
    roundText.innerHTML = `Round ${scoreboard.round} Results:`
    playerImage.src = `img/${p}.png`
    computerImage.src = `img/${c}.png`;
    if(w == 'player'){
        scoreboard.player++;
        resultsText.innerHTML = 'You win!';
    } else if (w == 'computer'){
        scoreboard.computer++;
        resultsText.innerHTML = 'You lose!';
    } else {
        resultsText.innerHTML = "It's a draw!";
    }
}

function nextRound() {
    scoreboard.round++;
    playerScore.innerHTML = `Player Score: ${scoreboard.player}`;
    computerScore.innerHTML = `Computer Score: ${scoreboard.computer}`;
    resultsContainer.style.display = 'none';
}

function game(e) {
    const playerChoice = e.target.parentNode.id;
    const computerChoice = getComputerChoice();
    const winner = determineWinner(playerChoice, computerChoice);
    displayResults(playerChoice,computerChoice,winner);
}


resetBtn.addEventListener('click', resetGame);
choices.forEach(choice => choice.addEventListener('click', game));
nextBtn.addEventListener('click', nextRound);