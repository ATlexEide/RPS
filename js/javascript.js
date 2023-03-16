
let playerScore = 0;
let computerScore = 0;
function getComputerChoice() {
    let number = Math.floor(Math.random() * 3) + 1;
    if (number === 1) { return 'rock'; }
    else if (number === 2) { return 'paper'; }
    else if (number === 3) { return 'scissors'; }
};

// Plays a round with the given input vs computers input
function playRound(playerInput) {
    const computer = getComputerChoice();
    console.log("Player: " + playerInput)
    console.log("Computer: " + computer)
    let outcome = '';
    if (playerInput === computer) { result.textContent = 'It\'s a draw' }
    if (playerInput === "rock") {
        if (computer === "paper") { result.textContent = 'You lost the round'; computerScore++; }
        if (computer === "scissors") { result.textContent = 'You won the round'; playerScore++; }
    }
    if (playerInput === "paper") {
        if (computer === "rock") { result.textContent = 'You won the round'; playerScore++; }
        if (computer === "scissors") { result.textContent = 'You lost the round'; computerScore++; }
    }
    if (playerInput === "scissors") {
        if (computer === "rock") { result.textContent = 'You lost the round'; computerScore++; }
        if (computer === "paper") { result.textContent = 'You won the round'; playerScore++; }
    }
    game.textContent = `Player : ${playerInput} | Computer: ${computer}`
    score.textContent = `Player ${playerScore} - ${computerScore} Computer`
    if (playerScore === 5) {
        winner.textContent = 'You Won The Game!';
        resetScore();

    }
    else if (computerScore === 5) {
        winner.textContent = 'You Lost The Game!';
        resetScore();

    }
}
function resetScore() {
    playerScore = 0;
    computerScore = 0;
}
// Play a game by calling the playRound function
// function game() {
//     playRound();
// }
const rock = document.querySelector('#rock');
rock.onclick = () => playRound('rock');
const paper = document.querySelector('#paper');
paper.onclick = () => playRound('paper');
const scissors = document.querySelector('#scissors');
scissors.onclick = () => playRound('scissors');

const score = document.querySelector('#score');
const winner = document.querySelector('#winner')
const game = document.querySelector('#game')
const result = document.querySelector('#roundResult')