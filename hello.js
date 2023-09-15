
var form = document.querySelector("form");
var gameBody = document.querySelector(".body");
var input = form.children[1];
var button = form.querySelector("div button");
var winLostMsg = gameBody.children[1];
var attemptsMsg = gameBody.children[2];
var totalRes = document.createElement("p");
gameBody.appendChild(totalRes);


var totalAttempts = 5;
var attempts = 0;
var winNmbr = 0;
var lostNmbr = 0;

const myFun = (e)=>{
    e.preventDefault();
    attempts++;
    if(attempts>4){
        input.disabled = true;
        input.style.backgroundColor = "rgba(225,225,202)";
        button.disabled = true;
        button.style.opacity = ".4";
    }
    let randomNmbr = Math.floor(Math.random() * 5) * 1;
    let guessNmbr = parseInt(input.value);
    if(guessNmbr===randomNmbr){
        winNmbr++;
        winLostMsg.innerHTML = "You have won";
    }else{
        lostNmbr++;
        winLostMsg.innerHTML = `You have lost. The random number was ${randomNmbr}`;
    }
    input.value = "";
    totalRes.innerHTML = `Win: ${winNmbr}, Lost: ${lostNmbr}`;
    totalRes.classList.add("totRes");

    attemptsMsg.innerHTML = `Remaining Attempts: ${totalAttempts - attempts}`
    attemptsMsg.classList.add("atmpt");
}
form.addEventListener("submit", myFun);





