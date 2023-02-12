let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let number = Math.floor(Math.random() * 3) + 1;
    if (number === 1) { return 'rock'; }
    else if (number === 2) { return 'paper'; }
    else if (number === 3) { return 'scissors'; }
    // return "paper";
};


// Checks if the input is a valid option?
function isValidInput(input) {
    if (input === "rock" || input === "paper" || input === "scissors") {
        return true;
    } else {
        return false;
    }
}
function getInput() {
    input = prompt("Rock, Paper or Scissors?")
    input = input.toLowerCase()
    console.log("getInput: " + input)
    return input;
}
function playRound() {
    const playerInput = getInput();
    const computer = getComputerChoice();
    if (isValidInput(playerInput)) {
        console.log("Player: " + playerInput)
        console.log("Computer: " + computer)
        if (playerInput === computer) { console.log("Draw") }
        if (playerInput === "rock") {
            if (computer === "paper") { console.log("You lose"); computerScore++; }
            if (computer === "scissors") { console.log("You win"); playerScore++; }
        }
        if (playerInput === "paper") {
            if (computer === "rock") { console.log("You win"); playerScore++; }
            if (computer === "scissors") { console.log("You lose"); playerScore++; }
        }
        if (playerInput === "scissors") {
            if (computer === "rock") { console.log("You lose"); playerScore++; }
            if (computer === "paper") { console.log("You win"); playerScore++; }
        }
    } else { alert("Please enter valid option"), game() };
    console.log(`Score: Player[${playerScore}] : Computer [${computerScore}]`)
    replay();
}
function replay() {
    if (playerScore < 5) {
        if (computerScore < 5) { game() }
    }
}
// Play a game by calling the playRound function
function game() {
    playRound();
}

// Calls the game function to play the game
game();