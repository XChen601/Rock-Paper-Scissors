game = () => {
    let wins = 0;
    let losses = 0;
    let playerSelection = "rock";

    console.log("wins: "+wins)
    console.log("losses: "+losses)
}

playRound = (playerSelection, computerSelection) => {
    console.log(`player: ${playerSelection}, bot: ${computerSelection}`)
    playerSelection = playerSelection.toLowerCase()
    if (playerSelection === computerSelection) {
        return "It was a tie!";
    }
    else if ((playerSelection === "rock" && computerSelection === "scissors") 
    || (playerSelection === "paper" && computerSelection === "rock") 
    || (playerSelection === "scissors" && computerSelection === "paper") ){
        return "You win!";
    }
    else {
        return "You lost!";
    }
}

const btns = document.querySelectorAll("button")

btns.forEach(btn => btn.addEventListener('click', function (e) {
    result = playRound(e.target.id, getComputerChoice());
    resultText.textContent = result;
}))

resultText = document.querySelector(".result p");

let options = ["rock", "paper", "scissors"];
const getComputerChoice = () => options[Math.floor(Math.random() * options.length)];

