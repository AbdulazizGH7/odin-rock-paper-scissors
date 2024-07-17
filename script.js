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