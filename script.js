let userScore=0;
let computerScore=0;

function getRandInt(max){
    return Math.floor(Math.random()*max)
}

function getComputerChoice(){
    let arr=["rock","paper","scissor"];
    let num=parseInt(getRandInt(3));
    return arr[num].toUpperCase();
}

function logic(comp_choice,user_choice){
    if (comp_choice==="ROCK" && user_choice==="PAPER"){
        alert("Paper beats Rock");
        alert("User won!!");
        userScore++;
    }
    else if(comp_choice==="PAPER" && user_choice==="SCISSOR"){
        alert("Scissor beats Paper");
        alert("User won!!");
        userScore++;
    }
    else if(comp_choice==="SCISSOR" && user_choice==="ROCK"){
        alert("Rock beats Scissor");
        alert("User won!!");
        userScore++;
    }

    else if(user_choice===comp_choice){
        alert("Its a draw");
    }
    else{
        alert(comp_choice+" beats "+user_choice);
        alert("Computer won!!")
        computerScore++;
    }
}

const playRoundRock=()=>{
    let user="ROCK";
    let computer=getComputerChoice();
    logic(computer,user);
    updateScore()
}

const playRoundPaper=()=>{
    let user="PAPER";
    let computer=getComputerChoice();
    logic(computer,user);
    updateScore()
}

const playRoundScissors=()=>{
    let user="SCISSOR";
    let computer=getComputerChoice();
    logic(computer,user);
    updateScore()
}

let btnRock=document.querySelector("#rock");
let btnPaper=document.querySelector("#paper");
let btnScissors=document.querySelector("#scissors");

btnRock.addEventListener("click",playRoundRock);
btnPaper.addEventListener("click",playRoundPaper);
btnScissors.addEventListener("click",playRoundScissors);

let uScorePara=document.querySelector("#uScore");
let cScorePara=document.querySelector("#cScore");

function updateScore(){
    uScorePara.innerText="Your score : "+userScore.toString();
    cScorePara.innerText="Computer score : "+computerScore.toString();
}

function resetScore(){
    userScore=0;
    computerScore=0;
    updateScore();
}

let resetBtn=document.createElement("button");
resetBtn.innerText="RESET";
resetBtn.addEventListener("click",resetScore);
document.querySelector("body").appendChild(resetBtn);
