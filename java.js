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
    let humanChoice = prompt("rock, paper, or scissors?: ").toLowerCase();
    if(humanChoice != "rock" || humanChoice != "paper" || humanChoice != "scissors") {
        humanChoice = prompt("Not a valid choice, please enter again: ").toLowerCase;
    } else {
        return humanChoice;
    }
}

let humanScore = 0;
let computerScore = 0;