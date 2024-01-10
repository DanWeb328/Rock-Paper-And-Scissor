let PlayerScore= 0;
let ComputerScore= 0;

let Results = document.getElementById("Results")
let Rock = document.getElementById("rock")
let Paper = document.getElementById("paper")
let Scissor = document.getElementById("scissor")



Rock.addEventListener('click' , () => handleInputs('rock'))
paper.addEventListener('click' , () => {
    handleInputs('paper');
})
Scissor.addEventListener('click' , () => {
    handleInputs('scissor');
})
// console.log( Rock.innerHTML ,Paper.innerHTML,Scissor.innerHTML);

function handleInputs(playerSelection){
    
    let ComputerChoice = getRandomChoice()
    RoundGame(playerSelection,ComputerChoice)
}


function RoundGame(playerSelection, computerSelection){
    if(playerSelection ===  computerSelection  ){
        Results.innerHTML ='this is a tie'
        console.log('this is a tie');
    }
    if(playerSelection === 'rock' && computerSelection === 'scissor' ||
    playerSelection === 'scissor' && computerSelection === 'paper' ||
    playerSelection === 'paper' && computerSelection === 'rock' ){

        PlayerScore++
        Results.textContent  ="you won this match"
        console.log("you won this match");  
    }
    if(computerSelection === 'rock' && playerSelection === 'scissor' ||
    computerSelection === 'scissor' && playerSelection === 'paper' ||
    computerSelection === 'paper' && playerSelection === 'rock' 

    ){
        ComputerScore++;
        Results.textContent = "you lose this match"
        console.log("you lose this match");  
    }
}

// RoundGame(PlayerChoise,null)




function getRandomChoice() {
    let randomNumber = Math.floor(Math.random() * 3)
    switch (randomNumber) {
      case 0:
        // console.log('ROCK');
        return 'rock'
      case 1:
        // console.log('PAPER'); 
        return "paper"
      case 2:
        // console.log('SCISSORS'); 
        return "scissor"
    }
  }



