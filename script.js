function getComputerChoice(){
    let randomNum = Math.floor(Math.random() * 3); // generates 0, 1, or 2
    switch (randomNum){
        case 0:
            return "rock";
        case 1:
            return "paper";
        default:
            return "scissors";
    }
}

function getHumanChoice(){
    let humanChoice = prompt("Choose Rock, Paper or Scissors");
    humanChoice = humanChoice.toLowerCase();
    while(humanChoice !== "rock" && humanChoice !== "paper"  && humanChoice !== "scissors"){
        humanChoice = prompt("Please enter a valid choice !");
        humanChoice = humanChoice.toLowerCase();
    }
    return humanChoice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if(humanChoice === computerChoice){
        console.log("Draw!");
    }
    else if((humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock" ) ||
            (humanChoice === "scissors" && computerChoice === "paper" )){
        console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
        humanScore++;
    }
    else{
        console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
        computerScore++;
    }
    console.log(`-----Scores-----\nYou: ${humanScore}\nOpponent: ${computerScore}`);
  }
  
function playGame(){
    for(let i = 0 ; i<5 ; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    if(humanScore > computerScore){
        console.log("Congrats! you won the game.");
    }
    else if(humanScore < computerScore){
        console.log("You lost! good luck next time.");
    }
    else{
        console.log("It's a draw!");
    }
}

playGame();
