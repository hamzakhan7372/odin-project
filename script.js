function getComputerChoice() {
    const random = Math.random();
    if (random < 0.33) {
        return "rock";
    } 
    else if (random >= 0.33 && random <= 0.67) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function getUserInput() {
    const userInput = prompt("Please enter your choice: ");
    return userInput;
}


function playGame() {
    let computerScore = 0;
    let humanScore = 0;
    for (let i = 0; i < 3; i++) {
        let computerChoice = getComputerChoice();
        let humanChoice = getUserInput();
        console.log(computerChoice);
        console.log(humanChoice);
        humanChoice = humanChoice.toLowerCase();

        if (humanChoice === computerChoice) {
            console.log("it's a tie!");
        }
        else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            console.log("human you winn!!");
            humanScore++;
        }
        else {
            console.log("Computer you winn! :(");
            computerScore++;
        }
    }

    console.log(humanScore);
    console.log(computerScore);
    
    if (humanScore > computerScore) {
        console.log("human wins");
    }
    else if (humanScore < computerScore) {
        console.log("computer wins");
    }
    else {
        console.log("it's a tie");
    }

}


playGame();
