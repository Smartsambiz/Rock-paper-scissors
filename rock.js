function getComputerChoice(){
    const computerSelection = ["Rock", "Paper", "Scissors"]
  generate = Math.floor(Math.random() * computerSelection.length) + 1;
 
  if(generate === 1){ 
    return "Rock";
 } if (generate === 2) {
    return "Paper";
 } if (generate === 3) {
    return "Scissors";
 }
 return computerSelection;
}
  
let input1 = "Rock", input2 = "Paper", input3 = "Scissors";

function playRound (playerSelection, computerSelection){
 
   if (playerSelection.toLowerCase() === input1.toLowerCase()) {  
    if (computerSelection === "Rock") {
      return "It is a tie!!";
    } else if (computerSelection === "Paper") {
        return "Computer Wins";
      } else {
        return "You Win!";
      }
  }
  
  if (playerSelection.toLowerCase() === input2.toLowerCase()) {  
    if (computerSelection === "Paper") {
      return "It is a tie!";
    } else if (computerSelection === "Scissors") {
        return "Computer Wins";
      } else  {
        return "You Win!";
      }
  } 
  
  else if (playerSelection.toLowerCase() === input3.toLowerCase()){
    if (computerSelection === "Scissors") {
      return "It's a tie";
  }else if (computerSelection === "Rock") {
      return "Computer Wins";
  }
  else {
      return "You Win!";
  }
  }

}




    
    function game(){
      let playerScore = 0;
      let computerScore = 0;

      for (let i = 0; i< 5; i ++){
        const computerSelection = getComputerChoice();
        const playerSelection= prompt ("Input your selection: ");
        var result = playRound(playerSelection, computerSelection);
        alert(result);

        if (result === "You Win!") {
          playerScore++;
        } else if (result === "Computer Wins"){
          computerScore++;
        }
      }

      if (playerScore > computerScore){
        alert("You win the game!");
      } else if (playerScore < computerScore){
        alert("Computer wins the game!")
      } else {
        alert("It's a tie game!");
      }
    }


  game();

