let getComputerChoice = () => {
    const choice = ["Rock", "Paper", "Scissors"];

    // Random choice between 0-2.
    // Floor to make sure its random.
    return choice[Math.floor(Math.random() * 3)];
}

let playRound = (player, computer) => {
    switch (computer) {
        case "Rock":
            if (player.toLowerCase() === "rock") {
                return "Tie!";
            }

            else if (player.toLowerCase() === "paper") {
                return "You Win! Paper beats Rock";
            }

            else if (player.toLowerCase() === "scissors") {
                return "You Lose! Rock beats Scissors";
            }

            else {
                return "Invalid Option.";
            }

        case "Paper":
            if (player.toLowerCase() === "rock") {
                return "You Lose! Paper beats Rock";
            }

            else if (player.toLowerCase() === "paper") {
                return "Tie!";
            }

            else if (player.toLowerCase() === "scissors") {
                return "You Win! Scissor beats Paper";
            }

            else {
                return "Invalid Option.";
            }

        case "Scissors":
            if (player.toLowerCase() === "rock") {
                return "You Win! Rock beats Scissors";
            }

            else if (player.toLowerCase() === "paper") {
                return "You Lose! Scissors beats Paper";
            }

            else if (player.toLowerCase() === "scissors") {
                return "Tie!";
            }

            else {
                return "Invalid Option.";
            }
    }
}

// let game = () => {
//     // Play the rock paper scissors 5 times.
//     for (let i = 0; i < 5; i++) {
//         const playerSelection = prompt("Enter rock, paper, or scissors");
//         const computerSelection = getComputerChoice();
//         console.log(playRound(playerSelection, computerSelection));
//     }
// }

// game();

const rps = document.querySelectorAll('button');
const result = document.querySelector('.results');

// Create eventListeners for each button.
rps.forEach((value) => {
    value.addEventListener("click", () => {
        // Run the function depending on the class name.
        if (value.className === 'rock') {
            result.textContent = playRound("rock", getComputerChoice());
        }

        else if (value.className === 'paper') {
            result.textContent = playRound("paper", getComputerChoice());
        }

        else if (value.className === "scissors") {
            result.textContent = playRound("scissors", getComputerChoice());
        }
    })
})