let humanScore = 0;
let computerScore = 0;
let ties = 0;
let humanSelection;


const buttons = document.querySelectorAll("button"); 
buttons.forEach((button) => {

button.addEventListener("click", function(event) {

    function game() {
    humanSelection = button.id;
    let computerChoice = getComputerChoice();
    return playRound(humanSelection, computerChoice);

        function getComputerChoice(){
        let comeChoice = ["Rock","Paper","Scissors"];
        let randomIndex = Math.floor(Math.random()*3);
        let randomChoice = comeChoice[randomIndex];
        return randomChoice;
        }

            function playRound(humanSelection, computerChoice){
            if (humanSelection === "You Chose Rock" && computerChoice === "Scissors") {
            humanScore = ++humanScore; 
            alert("You win Rock beats Scissors");
                
            } else if (humanSelection === "You Chose Paper" && computerChoice === "Rock") {
              alert("You win Paper beats Rock");
              humanScore = ++humanScore;
              alert(`Human: ${humanScore} vs Computer: ${computerScore}`);
            } else if (humanSelection === "You Chose Scissors" && computerChoice === "Paper"){
              alert("You win Scissors beats Paper");
              humanScore = ++humanScore;
              alert(`Human: ${humanScore} vs Computer: ${computerScore}`);
            } else if (humanSelection === "You Chose Scissors" && computerChoice ===  "Rock"){
              alert("You lose Rock beats Scissors");
              computerScore = ++computerScore;
              alert(`Human: ${humanScore} vs Computer: ${computerScore}`);
            } else if (humanSelection === "You Chose Rock" && computerChoice === "Paper"){
              alert("You lose Paper beats Rock");
              computerScore = ++computerScore;
              alert(`Human: ${humanScore} vs Computer: ${computerScore}`);
            } else if (humanSelection === "You Chose Paper" && computerChoice === "Scissors"){
              alert("You lose Scissors beats Paper");
              computerScore = ++computerScore;
              alert(`Human: ${humanScore} vs Computer: ${computerScore}`);
            } else if (humanSelection === "You Chose Paper" && computerChoice === "Paper"){
              alert(`It is a draw Human chose ${humanScore} vs Computer: ${computerScore}`);
              alert(`Human: ${humanScore} vs Computer: ${computerScore}`);
            } else if (humanSelection === "You Chose Rock" && computerChoice === "Rock"){
              alert(`It is a draw Human chose' ${humanScore} vs Computer: ${computerScore}`);
              alert(`Human: ${humanScore} vs Computer: ${computerScore}`);
            } else if (humanSelection === "You Chose Scissors" && computerChoice === "Scissors");{
              alert(`It is a draw Human chose ${humanSelection} vs Computer: ${computerChoice}`);
              alert(`Human: ${humanScore} vs Computer: ${computerScore}`);
            }
            alert("Player score is " + humanScore, "Computer score is " + computerScore, "Ties =" + ties);
            }
           }
          });
         });
