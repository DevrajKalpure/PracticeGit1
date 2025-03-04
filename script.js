let userscore=0;
let compscore=0;


const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
       // console.log("choice was clicked", userchoice);
        playgame(userchoice);
    });
});

let showWinner=(userwin,userchoice,compChoice)=> {
    if(userwin){
       // console.log("you win");
       userscore++;
       userscorepara.innerText = userscore;
        msg.innerText=`you win! your ${userchoice} beats ${compChoice}`;
        msg.style.backgroundColor="green"; 
    }else{
       // console.log("You loose");
       compscore++;
       compscorepara.innerText = compscore;
        msg.innerText=`you loose!  ${compChoice} beats ${userchoice}`;
        msg.style.backgroundColor="red"; 
    }
}

let playgame = (userchoice) => {
   // console.log("user choice:", userchoice);
    let compChoice = gencompchoice();
   // console.log("comp choice:", compChoice);

    if (userchoice == compChoice) {
        drawgame();
    } else {
        let userwin = true;
        if(userchoice === "Rock") {
            userwin=compChoice === "Paper" ? false : true;
        }else if(userchoice === "Paper"){
            userwin=compChoice === "scissor" ? false : true ;
        }else{
            userwin=compChoice === "Rock" ? false : true;
        }
        showWinner(userwin ,userchoice,compChoice);
    }
};

let drawgame = () => {
   // console.log("game was a draw");
    msg.innerText="Game was draw, play again";
    msg.style.backgroundColor="black"; 
};

let gencompchoice = () => {
    let options = ["Rock", "Paper", "scissor"];
    let randomind = Math.floor(Math.random() * 3);
    return options[randomind];
};

/*
//to select which choice 
let choicess=document.querySelectorAll(".choice");
//track click event
choicess.forEach((choice) => {
    choice.addEventListener("click", () => {
        let userchoice=choice.getAttribute("id");
       // console.log("choice was clicked",userchoice);
        playgame(userchoice);
    });
});


let playgame=(userchoice)=> {
    console.log("userchoice ", userchoice);
     let  compChoice=gencompchoice();
     console.log("comp choice ", compChoice);
     
     console.log(userchoice);
     console.log(compChoice);
    if(userchoice === compChoice) {
         console.log("Game was draw");
        //drawgame();
    }
}
     



let gencompchoice =() => {
    let options=["rock","paper","scissor"];
    let randomind=Math.floor(Math.random()*3);
    return options[randomind];
}**/
