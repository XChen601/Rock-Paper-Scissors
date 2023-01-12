let playerScore = 0;
let computerScore = 0;
let roundResult = "";
let gameResult = "";

playGame = (player, computer) => {
    roundResult = playRound(player, computer);
    printResults();
    if (playerScore === 5 || computerScore === 5){
        if (playerScore === 5){
            gameResult = "You won the game!"
        }
        else{
            gameResult = "You got beat :("
        }
        modalText.textContent = gameResult;
        updateModal();
        toggleModal();
        resetGame();
        printResults();
    }

}

resetGame = () => {
    playerScore = 0;
    computerScore = 0;
    roundResult = "Pick a choice!";
}
// updates score and returns who wins
playRound = (playerSelection, computerSelection) => {
    console.log(`player: ${playerSelection}, bot: ${computerSelection}`)
    playerSelection = playerSelection.toLowerCase()
    if (playerSelection === computerSelection) {
        return "It was a tie!";
    }
    else if ((playerSelection === "rock" && computerSelection === "scissors") 
    || (playerSelection === "paper" && computerSelection === "rock") 
    || (playerSelection === "scissors" && computerSelection === "paper") ){
        playerScore++;
        return "You win!";
    }
    else {
        computerScore++;
        return "You lost!";
    }
}

const rpsBtns = document.querySelectorAll(".options button")

rpsBtns.forEach(btn => btn.addEventListener('click', function (e) {
    playGame(e.target.id, getComputerChoice());


}))

function getComputerChoice(){
    const options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random() * options.length)];
}

roundResultText = document.querySelector(".result p");
domPlayerScore = document.querySelector("#playerScore")
domComputerScore = document.querySelector("#computerScore")

function printResults() {
    roundResultText.textContent = roundResult;
    domPlayerScore.textContent = `You: ${playerScore}`;
    domComputerScore.textContent = `Computer: ${computerScore}`;
}



//modal
const modal = document.querySelector(".modal");
const closeButton = document.querySelector(".close-button");
const playAgainButton = document.querySelector(".modal button");
let modalText = document.querySelector(".modal h1")

function toggleModal() {
    modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

let playerModalScore = document.querySelector(".modal-playerScore");
let computerModalScore = document.querySelector(".modal-computerScore")
function updateModal() {
    playerModalScore.textContent = `You: ${playerScore}`;
    computerModalScore.textContent = `Computer: ${computerScore}`;
}

playAgainButton.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);

