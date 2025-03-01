const buttons = document.querySelectorAll("button");
const scoreboard = document.querySelector("#scoreboard");

let humanScore = 0;
let computerScore = 0;
let roundsPlayed = 0;


// FUNCTION TO GENERATE COMPUTER CHOICE
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

// ASSIGNS VALUE TO EACH BUTTON & UPDATES THE HUMAN CHOICE VARIABLE;
buttons.forEach(button => {
    button.addEventListener("click", function() {
        if(button.id === "rockbtn") {
            humanChoice = "rock";
        } else if(button.id === "paperbtn") {
            humanChoice = "paper";
        } else if(button.id === "scissorsbtn") {
            humanChoice = "scissors";
        }
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    });
});


function playRound(humanChoice) {
    if(roundsPlayed < 5) {
        let computerChoice = getComputerChoice();
        if(
            (humanChoice == "rock" && computerChoice == "scissors") ||
            (humanChoice == "paper" && computerChoice == "rock") ||
            (humanChoice == "scissors" && computerChoice == "paper") 
        ) {
            humanScore++
        } else if(humanChoice !== computerChoice) {
            computerScore++;
        }
        roundsPlayed++;
        runningScore();
    } else if(roundsPlayed === 5) {
        finalScore(humanScore, computerScore);
   } 
}


// FUNCTION TO UPDATE THE SCOREBOARD DIV 
function runningScore() {
    scoreboard.textContent = `Your Score: ${humanScore} | Computer Score: ${computerScore}`;
}


//FUNCTION TO DETERMINE THE OVERALL WINNER
function finalScore(humanScore, computerScore) {
    if(humanScore > computerScore) {
        scoreboard.textContent = "You beat the machines! Congrats!!!";
    } else if(humanScore < computerScore) {
        scoreboard.textContent = "You have been defeated, try again :("; 
    } else if(humanScore === computerScore) {
        scoreboard.textContent = "It's a tie. Play again to see who is really the best!";
    }
}