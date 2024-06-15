
        console.log("Hello World")
        

        function getComputerChoice(){
          let comeChoice = ["Rock","Paper","Scissors"];
          let randomIndex = Math.floor(Math.random()*3);
          let randomChoice = comeChoice[randomIndex];
          return randomChoice
        }
    
        console.log(getComputerChoice());

        //function getPlayerChoice(){
         
         //let choice = prompt("Rock, Paper or Scissors?");   
         //if (choice == "Rock" || "rock"); 
         //else if (choice == "Paper" || "paper");
         //else (choice == "Scissors" || "scissors");
         //return choice;
        //}
        //console.log(getPlayerChoice());

        let humanScore = 0;
        let computerScore = 0;

        const buttons = document.querySelectorAll("button");

        buttons.forEach((button) => {
            button.addEventListener("click",playRound, () => {
                alert(button.id);
            });
        });
        let humanSelection = buttons;
        
        
        

        function playRound(humanSelection, computerChoice){
            if (humanSelection == "Rock" && computerChoice == "Scissors") {
                humanScore = ++humanScore; 
                alert("You win rock beats Scissors");
            } 
            else if (humanSelection == "Paper" && computerChoice == "Rock") {
                alert("You win Paper beats Rock");
                humanScore = ++humanScore;
            }
            else if (humanSelection == "Scissors" && computerChoice == "Paper"){
                alert("You win Scissors beats Paper");
                humanScore = ++humanScore;
            }
            else if (humanSelection == "Scissors" && computerChoice ==  "Rock"){
                alert("You lose Rock beats Scissors");
                computerScore = ++computerScore;
            }
            else if (humanSelection == "Rock" && computerChoice == "Paper"){
                alert("You lose Paper beats Rock");
                computerScore = ++computerScore
            }
            else if (humanSelection == "Paper" && computerChoice == "Scissors"){
                alert("You lose Scissors beats Paper");
                computerScore = ++computerScore
            }
            else if (humanSelection == "Paper" && computerChoice == "Paper"){
                alert(`It is a draw Human chose ${humanScore} vs Computer: ${computerScore}`)
            }
            else if (humanSelection == "Rock" && computerChoice == "Rock"){
                alert(`It is a draw Human chose' ${humanScore} vs Computer: ${computerScore}`)
            }
            else (humanSelection == "Scissors" && computerChoice == "Scissors");{
                alert(`It is a draw Human chose ${humanScore} vs Computer: ${computerScore}`)
            }
        }
        
        
        
        
        const computerSelection = getComputerChoice;
        //playRound(humanSelection, computerSelection);



