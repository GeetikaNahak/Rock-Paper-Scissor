const userChoiceDisplay=document.getElementById("yourchoice")
const computerChoiceDisplay=document.getElementById("computerchoice")

const result=document.getElementById("result")
const possibleChoices=document.querySelectorAll('button')
let userChoice
let computerChoice
let resultfinal
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click',(e)=>{
    userChoice = e.target.id
    userChoiceDisplay.innerHTML=userChoice
    generateComputerChoice()
    generateResult()
}))

function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random()*3)+1
    // computerChoiceDisplay.innerHTML=randomNumber
    if(randomNumber===1){
        computerChoice='Scissor'
    }
    if(randomNumber===2){
        computerChoice='Rock'
    }
    if(randomNumber===3){
        computerChoice='Paper'
    }
    computerChoiceDisplay.innerHTML=computerChoice

}

function generateResult(){
    if(userChoice===computerChoice){
        resultfinal='!!-Its a draw-!!'
    }
    else if(userChoice==='Rock'&&computerChoice==='Scissor'){
        resultfinal='!!-You Win-!!'
    }
    else if(userChoice==='Scissor'&&computerChoice==='Paper'){
        resultfinal='!!-You Win-!!'
    }
    else if(userChoice==='Paper'&&computerChoice==='Rock'){
        resultfinal='!!-You Win-!!'
    }
    else{
        resultfinal='!!-You Lost-!!'
    }
    result.innerHTML=resultfinal;
    
}