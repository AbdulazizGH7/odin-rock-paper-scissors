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

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    const status = document.querySelector("#status");
    const humanScoreText = document.querySelector("#humanScore");
    const computerScoreText = document.querySelector("#aiScore");
    if(humanChoice === computerChoice){
        status.textContent = "Draw!";
    }
    else if((humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock" ) ||
            (humanChoice === "scissors" && computerChoice === "paper" )){
        humanScore++;
        humanScoreText.textContent = "" + humanScore;
        status.textContent = `You win! ${humanChoice} beats ${computerChoice}.`;
    }
    else{
        computerScore++;
        computerScoreText.textContent = "" + computerScore;
        status.textContent = `You lose! ${computerChoice} beats ${humanChoice}.`;
    }
    if(isThereWinner()){
        determineWinner();
        setTimeout(() => location.reload(), 3000);
    }
  }
  
function determineWinner(){
    const status = document.querySelector("#status");
    if(humanScore === 5){
        status.textContent = "Congratulations you've won!";
    }
    else{
        status.textContent = "Good luck in the next one; you lost this time!";
    }
}

function isThereWinner(){
    if(humanScore === 5 || computerScore === 5){
        return true;
    }
    else{
        return false;
    }
}

const buttons = document.querySelectorAll("button");
buttons.forEach((button) =>{
    button.addEventListener("click", () =>{
        button.style.backgroundColor = "#161c27";
        setTimeout(() => button.style.backgroundColor = "#434b5a", 100);
        if(!isThereWinner()){
            playRound(button.id, getComputerChoice());
        }
    });
});




