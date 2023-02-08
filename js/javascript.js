
function getComputerChoice() {
    let number = Math.floor(Math.random() * 3) + 1;
    if (number === 1) { return 'rock'; }
    else if (number === 2) { return 'paper'; }
    else if (number === 3) { return 'scissors'; }
};


function playRound(player, computer) {
    player = player.toLowerCase();
    console.log("player: " + player)
    console.log("computer: " + computer)
    if (player === computer) { console.log("Draw") }
    else if (player === "rock" && computer === "scissors") { console.log(`You win! ${player} beats ${computer}!`) }
    else if (player === "paper" && computer === "rock") { console.log(`You win! ${player} beats ${computer}!`) }
    else if (player === "scissors" || "scissor" && computer === "paper") { console.log(`You win! ${player} beats ${computer}!`) }
    else { console.log(`You lose! ${computer} beats ${player}`) }
}



playRound(prompt("Rock, Paper or Scissors"), getComputerChoice())