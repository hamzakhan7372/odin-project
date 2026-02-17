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

let computerScore = 0;
let humanScore = 0;


const resultsDiv = document.querySelector("#results");
const scoreDiv = document.querySelector("#score");
const winnerDiv = document.querySelector("#winner");
const buttons = document.querySelectorAll(".buttons button");

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        resultsDiv.textContent = "it's a tie!";
    } 
    else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        resultsDiv.textContent = "you win!";
        humanScore++;
        scoreDiv.textContent = `You: ${humanScore} | Computer: ${computerScore}`;
    } 
    else {
        resultsDiv.textContent = "computer win!";
        computerScore++;
        scoreDiv.textContent = `You: ${humanScore} | Computer: ${computerScore}`;
    }
    checkWin();
}


buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        const humanChoice = button.id;
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    });
});

function checkWin() {
    if (humanScore === 5) {
        winnerDiv.textContent = "Human you win!!!";
        buttons.forEach(function(button) {
            button.disabled = true;
        });
    }
    else if (computerScore === 5) {
        winnerDiv.textContent = "Computer you win!!!";
        buttons.forEach(function(button) {
            button.disabled = true;
        });
    }
    else {
        winnerDiv.textContent = "nobody won yet";
    }
}
