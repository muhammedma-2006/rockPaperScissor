const choice = ["Rock", "Paper", "Scissor"];

const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScore");
const computerScoreDisplay = document.getElementById("computerScore");

let playerscore = 0;
let computerscore = 0;

function playGame(playerChoice) {
    const computerChoice = choice[Math.floor(Math.random() * 3)];
    console.log(computerChoice);
    let result = "";

    if (computerChoice === playerChoice) {
        result = "It's a tie";
    } else {
        switch (playerChoice) {
            case "Rock":
                result = (computerChoice === "Scissor") ? "YOU WIN" : "you lose";
                break;
            case "Paper":
                result = (computerChoice === "Rock") ? "YOU WIN" : "you lose";
                break;
            case "Scissor":
                result = (computerChoice === "Paper") ? "YOU WIN" : "you lose";
                break;
        }
    }

    if (result === "YOU WIN") {
        playerscore += 1;
    } else if (result === "you lose") {
        computerscore += 1;
    }
    if(playerscore == 10){
        alert("Congrats \n You win");
        playerscore = 0;
        computerscore = 0;
    }
    else if(computerscore == 10){
        alert("computer win\n better Luck next time");
        playerscore = 0;
        computerscore = 0;
    }
    resultDisplay.classList.remove("greenText","redText")
    playerDisplay.textContent = `Player: ${playerChoice}`;
    computerDisplay.textContent = `Computer: ${computerChoice}`;
    resultDisplay.textContent = result;
    switch(result){
        case "YOU WIN":
            resultDisplay.classList.add("greenText");
            break;
        case "you lose":
            resultDisplay.classList.add("redText");
            break;
    }
    playerScoreDisplay.textContent = `Player Score: ${playerscore}`;
    computerScoreDisplay.textContent = `Computer Score: ${computerscore}`;
}
