
  

function getComputerChoice(){
    const computerSelection = ["Rock", "Paper", "Scissors"]
    generate = Math.floor(Math.random() * computerSelection.length);
 
 return computerSelection[generate];
}


let result;

function playRound (playerSelection, computerPlay){
   computerPlay = getComputerChoice();

   if (playerSelection === "Rock") {  
    if (computerPlay === "Rock") {
      result ="It is a tie!!";
    } else if (computerPlay === "Paper") {
        result ="Computer Wins";
      } else {
        result ="You Win!";
      }
  }
  
  if (playerSelection === "Paper") {  
    if (computerPlay === "Paper") {
      result ="It is a tie!";
    } else if (computerPlay === "Scissors") {
        result = "Computer Wins";
      } else  {
        result ="You Win!";
      }
  } 
  
  else if (playerSelection === "Scissors"){
    if (computerPlay === "Scissors") {
      result = "It's a tie";
  }else if (computerPlay === "Rock") {
      result = "Computer Wins";
  }
  else {
      result= "You Win!";
  }
  }

  //const resultDiv = document.querySelector("#result");
 //resultDiv.textContent = `You chose "${playerSelection}", computer chose "${computerPlay}"."${result}"`;
//resultDiv.style.cssText = 'color: red; width; font-size: 30px;'
};




function endGame(playerScore, computerScore) {
  let buttons = document.querySelectorAll("#playerSelection")
  const resultDiv = document.querySelector("#gameWinner");

  if (playerScore > computerScore) {
    resultDiv.textContent = "Congratulations, you won the game!";
  } else {
    resultDiv.textContent = "Sorry, computer won the game!";
  }
  // Disable buttons
 buttons.forEach((button) => {
    button.disabled = true;
  });
}





function game(){

  let playerScore = 0;
  let computerScore = 0;

  const buttons = document.querySelectorAll('#playerSelection');
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      let  playerSelection = button.dataset.choice;
       playRound(playerSelection);


      
      const resultDiv = document.querySelector("#result");
      const scoreDiv = document.querySelector("#score")
      resultDiv.textContent = ` ${result};`
      scoreDiv.textContent= `Player: ${playerScore} Computer: ${computerScore}`;

      
  
      // Update UI with scores
      if(result === "You Win!"){
        const scoreDiv = document.querySelector("#score");
        scoreDiv.textContent = `Player: ${playerScore++} Computer: ${computerScore}`;
      } else if(result === "Computer Wins"){
        const scoreDiv = document.querySelector("#score")
        scoreDiv.textContent = ` Player: ${playerScore}, Computer: ${computerScore++}`;
      }

      scoreDiv.textContent = `Player: ${playerScore}, Computer: ${computerScore}`;
    
      
  
      // Check for end of game
      if (playerScore === 5 || computerScore === 5) {
        endGame(playerScore, computerScore);
      }
    });
    });
  
};




game();
