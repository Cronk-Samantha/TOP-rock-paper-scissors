function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3) + 1;
    if(randomNum === 1) {
        return "rock";
    } else if(randomNum === 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

let getHumanChoice = () => {
    let humanChoice;
    while(true) {
        humanChoice = prompt("rock, paper, or scissors?: ").toLowerCase();
        if(humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors") {
            return humanChoice;
        }
        alert("Not a valid option, please try again.");
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if(humanChoice === computerChoice) {
        console.log(`You both chose ${humanChoice}, its a tie!`);
    } else if(
        (humanChoice == "rock" && computerChoice == "scissors") ||
        (humanChoice == "paper" && computerChoice == "rock") ||
        (humanChoice == "scissors" && computerChoice == "paper") 
    ) {
        humanScore++;        
        console.log(`${humanChoice} beats ${computerChoice}, you win!!`);
    } else {
        computerScore++;
        console.log(`${computerChoice} beats ${humanChoice}, you lose :(`);
    }
}

function playGame() {
    humanScore = 0;
    computerScore = 0;
    for(let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    if(humanScore > computerScore) {
        console.log(`You won ${humanScore} out of 5 games, congrats!!`);
    } else if(humanScore < computerScore) {
        console.log(`You only won ${humanScore} out of 5 games, you lose....`);
    } else if(humanScore === computerScore) {
        console.log("You tied!! Play again to see who is really the better player...");
    }
}

playGame();