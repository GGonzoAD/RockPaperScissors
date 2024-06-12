
        console.log("Hello World")
        

        function getComputerChoice(){
          let comeChoice = ["Rock","Paper","Scissors"];
          let randomIndex = Math.floor(Math.random()*3);
          let randomChoice = comeChoice[randomIndex];
          return randomChoice
        }
    
        console.log(getComputerChoice());

        function getPlayerChoice(){
         
         let choice = prompt("Rock, Paper or Scissors?");   
         if (choice == "Rock" || "rock"); 
         else if (choice == "Paper" || "paper");
         else (choice == "Scissors" || "scissors");
         return choice;
        }
        console.log(getPlayerChoice());

        function playRound(humanChoice, computerChoice){
            if (humanChoice == "rock" || "Rock" && computerChoice == "Scissors") {
                humanScore = ++humanScore; 
                alert("You win rock beats Scissors");
            } 
            else if (humanChoice == "paper" || "Paper" && computerChoice == "Rock") {
                humanScore = ++humanScore;
                alert("You win Paper beats Rock");
            }
            else if (humanChoice == "scissors" || "Scissors" && computerChoice == "Paper"){
                humanScore = ++humanScore;
                alert("You win Scissors beats Paper");
            }
            else if (humanChoice == "scissors" || "Scissors" && computerChoice ==  "Rock"){
                computerScore = ++computerScore;
                alert("You lose Rock beats Scissors");
            }
            else if (humanChoice == "rock" || "Rock" && computerChoice == "Paper"){
                computerScore = ++computerScore
                alert("You lose Paper beats Rock");
            }
            else if (humanChoice == "paper" || "Paper" && computerChoice == "Scissors"){
                computerScore = ++computerScore
                alert("You lose Scissors beats Paper");
            }
            else if (humanChoice == "paper" || "Paper" && computerChoice == "Paper"){
                alert(`It is a draw Human chose ${humanScore} vs Computer: ${computerScore}`)
            }
            else if (humanChoice == "rock" || "Rock" && computerChoice == "Rock"){
                alert(`It is a draw Human chose' ${humanScore} vs Computer: ${computerScore}`)
            }
            else (humanChoice == "scissors" || "Scissors" && computerChoice == "Scissors");{
                alert(`It is a draw Human chose ${humanScore} vs Computer: ${computerScore}`)
            }
        }

        const humanSelection = getPlayerChoice;
        const computerSelection = getComputerChoice;
        let humanScore = 0;
        let computerScore = 0;
        playRound(humanSelection, computerSelection);

        // buttons is a node list. It looks and acts much like an array
         const btns = document.querySelectorAll("button");

         // we use the .forEach method to iterate through each button
         btns.forEach((button) => {
            // we use the forEach method to iterate through each button
            button.addEventListener("click", () => {
                alert(button.id);

            });
         });


