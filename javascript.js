function computerPlay(){
    computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice === 0){
        return("Rock");
        }
    else if (computerChoice === 1){
        return("Paper");
    }
    else (computerChoice === 2);{
        return("Scissors");
    }
}

function playRound(playerChoice, computerChoice){
        let playerSelection = playerChoice.toLowerCase();
        let computerPlay = computerChoice.toLowerCase();
        if (playerSelection === computerPlay){
            return("Computer chose " + computerPlay + " and you chose " +playerSelection + ". Its a draw!");
        }
        else if (playerSelection === "rock"){
                if (computerPlay === "paper"){
                    return("Computer chose " + computerPlay + " and you chose " +playerSelection + ". You lose, paper beats rock!")
                }
                else if(computerPlay === "scissors"){
                    return("Computer chose " + computerPlay + " and you chose " +playerSelection + ". You win, rock beats scissors!")
                }
                }
        else if (playerSelection === "paper"){
                if (computerPlay === "rock"){
                    return("Computer chose " + computerPlay + " and you chose " +playerSelection + ". You win, paper beats rock!")
                }
                else if(computerPlay === "scissors"){
                    return("Computer chose " + computerPlay + " and you chose " +playerSelection + ". You lose, scissors beats scissors!")
                }
                } 
        else if (playerSelection === "scissors"){
                if (computerPlay === "rock"){
                    return("Computer chose " + computerPlay + " and you chose " +playerSelection + ". You lose, rock beats scissors!")
                }
                else if(computerPlay === "paper"){
                    return("Computer chose " + computerPlay + " and you chose " +playerSelection + ". You win, scissors beats paper!")
                }
                } 
        else{
            console.log("Next time pick rock paper scissors.")
        }       
        }
 
        
function game(){
    for (let i = 0; i<5; i++){
        let userInput = prompt();
        console.log(playRound(userInput, computerPlay()))
    }
}

console.log(game());