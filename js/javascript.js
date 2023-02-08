
// Get CPU's choice from the random number generator
let computerChoice = getComputerChoice();

// Get users input (function takes input and makes it all lowercase)
let userInput = getUserChoice();

// Gets a number from 1 - 3 after text input has been converted by choiceNumbered
let userChoice = convertInputToNumber();


function getComputerChoice() {
    let number = Math.floor(Math.random() * 3) + 1;
    return number
}

// Get users choice through a promt and make it lowercase to avoid "RoCK", "ROCK etc"
function getUserChoice() {
    input = prompt("Rock, Paper or Scissors?");
    inputLowerCase = input.toLowerCase();
    return inputLowerCase;
}
function convertInputToNumber(inputLowerCase) {
    if (userInput === 'rock') {
        return 1;
    } else if (userInput === 'paper') {
        return 2;
    } else if (userInput === 'scissors') {
        return 3;
    }

}



// 1 = Rock
// 2 = Paper
// 3 = Scissors

// Lose Conditions
userChoice === computerChoice ? alert(`It's a draw!`) :
    userChoice === 1 && computerChoice === 2 ? alert(`You lose!\n\nYou used "Rock" and lost to CPU's "Paper"`) :
        userChoice === 2 && computerChoice === 3 ? alert(`You lose!\n\nYou used "Paper" and lost to CPU's "Scissors"`) :
            userChoice === 3 && computerChoice === 1 ? alert(`You lose!\n\nYou used "Scissors" and lost to CPU's "Rock"`) :

                // Win Conditions
                userChoice === 1 && computerChoice === 3 ? alert(`You win!\n\nYou used "Rock" and beat CPU's "Scissors"`) :
                    userChoice === 2 && computerChoice === 1 ? alert(`You win!\n\nYou used "Paper" and beat CPU's "Rock"`) :
                        userChoice === 3 && computerChoice === 2 ? alert(`You win!\n\nYou used "Scissors" and beat CPU's "Paper"`) :
                            userChoice !== 1 || 2 || 3 ? alert(`Please enter a valid option`) : null;
