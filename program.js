const rps = document.querySelectorAll('button');
const result = document.querySelector('.results');
const playerScoreTotal = document.querySelector('.playerScore');
const computerScoreTotal = document.querySelector('.computerScore');

let playerScore = 0;
let computerScore = 0;

// Create eventListeners for each button.
rps.forEach((value) => {
    // Figure out how to call callback functions with parameters.
    value.addEventListener("click", () => {
        // Run the function depending on the class name.
        result.textContent = playRound(value.className, getComputerChoice());

        // Update the score after each game.
        if (playerScore === 5) {
            result.textContent = "Player Wins!";
        }

        else if (computerScore === 5) {
            result.textContent = "Computer Wins!";
        }

        playerScoreTotal.textContent = `Player: ${playerScore}`;
        computerScoreTotal.textContent = `Computer: ${computerScore}`;
    })
})

// Functions
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
                playerScore++;
                return "You Win! Paper beats Rock";
            }

            else if (player.toLowerCase() === "scissors") {
                computerScore++;
                return "You Lose! Rock beats Scissors";
            }

            else {
                return "Invalid Option.";
            }

        case "Paper":
            if (player.toLowerCase() === "rock") {
                computerScore++;
                return "You Lose! Paper beats Rock";
            }

            else if (player.toLowerCase() === "paper") {
                return "Tie!";
            }

            else if (player.toLowerCase() === "scissors") {
                playerScore++;
                return "You Win! Scissor beats Paper";
            }

            else {
                return "Invalid Option.";
            }

        case "Scissors":
            if (player.toLowerCase() === "rock") {
                playerScore++;
                return "You Win! Rock beats Scissors";
            }

            else if (player.toLowerCase() === "paper") {
                computerScore++;
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