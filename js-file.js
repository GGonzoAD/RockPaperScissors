        console.log("Hello World")
        

        function getComputerChoice(){
          let comeChoice = ["Rock","Paper","Scissors"];
          let randomIndex = Math.floor(Math.random()*3);
          let randomChoice = comeChoice[randomIndex];
          return randomChoice
        }
    
        console.log(getComputerChoice());


        let humanScore = 0;
        let computerScore = 0;
        let humanSelection;
        const buttons = document.querySelectorAll("button");

        buttons.forEach((button) => {
            button.addEventListener("click", () => {
                alert(button.id);
                console.log(button.id) 
                return button.id;
                
            }); 
           humanSelection = button.id;
        });

        if(humanSelection = "You Chose Rock"){
            humanSelection ="Rock"
        }
        else if (humanSelection = "You Chose Paper"){
            humanSelection = "Paper"
        }
        else (humanSelection = "You Chose Scissors") => {
            humanSelection = "Scissors"
        }
            console.log(humanSelection)
        function playRound(humanSelection, computerChoice){
            if (humanSelection == "Rock" && computerChoice == "Scissors") {
                humanScore = ++humanScore; 
                alert("You win rock beats Scissors");
                humanScore.addEventListener("click", () => {
                    alert(humanScore);
                });
            } 
            else if (humanSelection == "Paper" && computerChoice == "Rock") {
                alert("You win Paper beats Rock");
                humanScore = ++humanScore;
                alert(`Human: ${humanScore} vs Computer: ${computerScore}`);
            }
            else if (humanSelection == "Scissors" && computerChoice == "Paper"){
                alert("You win Scissors beats Paper");
                humanScore = ++humanScore;
                alert(`Human: ${humanScore} vs Computer: ${computerScore}`);
            }
            else if (humanSelection == "Scissors" && computerChoice ==  "Rock"){
                alert("You lose Rock beats Scissors");
                computerScore = ++computerScore;
                alert(`Human: ${humanScore} vs Computer: ${computerScore}`);
            }
            else if (humanSelection == "Rock" && computerChoice == "Paper"){
                alert("You lose Paper beats Rock");
                computerScore = ++computerScore
                alert(`Human: ${humanScore} vs Computer: ${computerScore}`);
            }
            else if (humanSelection == "Paper" && computerChoice == "Scissors"){
                alert("You lose Scissors beats Paper");
                computerScore = ++computerScore
                alert(`Human: ${humanScore} vs Computer: ${computerScore}`);
            }
            else if (humanSelection == "Paper" && computerChoice == "Paper"){
                alert(`It is a draw Human chose ${humanScore} vs Computer: ${computerScore}`)
                alert(`Human: ${humanScore} vs Computer: ${computerScore}`);
            }
            else if (humanSelection == "Rock" && computerChoice == "Rock"){
                alert(`It is a draw Human chose' ${humanScore} vs Computer: ${computerScore}`);
                alert(`Human: ${humanScore} vs Computer: ${computerScore}`);
            }
            else (humanSelection == "Scissors" && computerChoice == "Scissors");{
                alert(`It is a draw Human chose ${humanSelection} vs Computer: ${computerChoice}`)
                alert(`Human: ${humanScore} vs Computer: ${computerScore}`)
            }
        }
        
        
        
        //const computerSelection = getComputerChoice;
        //playRound(humanSelection, computerSelection);



