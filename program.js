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
                return "You Lose! Rock beats Scissor";
            }

            else {
                return "Invalid Option.";
            }

            break;

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

            break;

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

            break;
    }
}

let game = () => {
    // Play the rock paper scissors 5 times.
    for (let i = 0; i < 5; i++) {
        const playerSelection = "rock";
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
}

game();