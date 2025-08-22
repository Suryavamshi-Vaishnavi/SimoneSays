let gameSeq = [];
let playerSeq = [];
let level = 0;
let started = false; 
let buttons = ["bisque", "lightblue", "lightgreen", "lightpink"];
let h3 = document.querySelector("h3");
document.addEventListener("keypress", function(){
    if(!started){
        started = true;
        levelUp();
    }
});

function buttonFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },350);
}

function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },250);
}


function levelUp(){
    level++;
    h3.innerText = `Level ${level}`;
    let randomNum = Math.floor(Math.random()*buttons.length);
    let randomButton = buttons[randomNum];
    let btnn = document.querySelector(`.${randomButton}`);
    gameSeq.push(randomButton);
    buttonFlash(btnn);
}

function btnPress(){
    let buttonClicked = this;
    userFlash(buttonClicked);    
    let buttonColor = this.getAttribute("id");
    playerSeq.push(buttonColor);
    let currentIndex = playerSeq.length - 1;
    if(gameSeq[currentIndex] === playerSeq[currentIndex]){
        if(playerSeq.length === gameSeq.length){
        setTimeout(function(){
            playerSeq = [];
            levelUp();
        },1000);
    }
    }else{
        h3.innerText = `Wrong! Your score is ${level}\n Press any key to restart.`;
        document.body.classList.add("wrongAnswer");
        setTimeout(function(){
            document.body.classList.remove("wrongAnswer");
        },2000);
        gameSeq = [];
        playerSeq = [];
        level = 0;
        started = false;
    }
}

let allButtons = document.querySelectorAll(".btn");
for(btn of allButtons){
    btn.addEventListener("click",btnPress);
}