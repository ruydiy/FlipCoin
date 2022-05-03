let heads = 0;
let tails = 0;
let coin = document.querySelector(".coin");
let flipBtn = document.querySelector("#flip-button");
let resetBtn = document.querySelector("#reset-button");
let playerOneWins = 0;
let playerTwoWins = 0;
let player = 1; // Player 1 start the game
const wins = [1, 2, 3, 4, 5];
let suggestion = 0;
let playersSuggest = document.querySelector(".suggestionPlayer");
let playerName = document.getElementById("player");
let scorePlayer1 = document.querySelector(".scorePlayer1");
let scorePlayer2 = document.querySelector(".scorePlayer2");
let gameWon = document.querySelector(".winner");


flipBtn.addEventListener("click", () => {

    let i = Math.floor(Math.random() * 2);
    console.log(i);
    let guessPlayer1 = document.getElementsByName("playerOneSuggest");
    let isChecked = false;

    for (var j = 0; j <  guessPlayer1.length; j++) {
        if (guessPlayer1[j].checked) {
            isChecked = true;
            suggestion = guessPlayer1[j].value;
            setTimeout(function(){
                guessPlayer1[j].checked = false;
            }, 3000);
            console.log(guessPlayer1[j].value);
            break;
        }
    }

    if(!isChecked){
        alert("Please choose heads or tails!");
        return false;
    }else{

        if(player == 1){    
            if( i == suggestion) {
                playerOneWins++;
                let point = document.createElement("div");
                point.innerHTML = wins[playerOneWins - 1];
                point.setAttribute("class", "numberCirclePlayer1");
                setTimeout(function(){
                    scorePlayer1.appendChild(point);
                }, 3000);
                
                console.log("Player 1 guess right");
            }else{
                console.log("Looooser 1");
            }
            setTimeout(function(){
                playersSuggest.style.left = "80%";
                playerName.innerHTML = "Player 2";
            }, 3000);
            player++;

        }else{
            if( i == suggestion){
                playerTwoWins++;
                let point = document.createElement("div");
                point.innerHTML = wins[playerTwoWins - 1];
                point.setAttribute("class", "numberCirclePlayer1");
                setTimeout(function(){
                    scorePlayer2.appendChild(point);
                }, 3000);
                console.log("Player 2 guess right");
            }else{
                console.log("Looooser 2");
            }
            player--;
            setTimeout(function(){
                playersSuggest.style.left = "20%";
                playerName.innerHTML = "Player 1";
            }, 3000);    
        }
    }
    coin.style.animation = "none";
    if(i){
        setTimeout(function(){
            coin.style.animation = "spin-heads 3s forwards";
        }, 100);
        heads++;
    }
    else{
        setTimeout(function(){
            coin.style.animation = "spin-tails 3s forwards";
        }, 100);
        tails++;
    }
    setTimeout(updateStatus, 3000);
    disableButton();

    if(playerOneWins == 5){
        let winner = document.createElement("p");
        winner.innerHTML = "Player 1 Win";
        winner.setAttribute("clas", "winner");
        setTimeout(function(){
            gameWon.appendChild(winner);
            playersSuggest.style.visibility = "hidden";
        }, 3000);
    }
    if(playerTwoWins == 5){
        let winner = document.createElement("p");
        winner.innerHTML = "Player 2 Win";
        winner.setAttribute("clas", "winner");
        setTimeout(function(){
            gameWon.appendChild(winner);
            playersSuggest.style.visibility = "hidden";
        }, 3000);
    }

});
function updateStatus(){
    document.querySelector("#heads-count").
    textContent = `Heads: ${heads}`;
    document.querySelector("#tails-count").
    textContent = `Tails: ${tails}`;
}
function disableButton(){
    flipBtn.disabled = true;
    setTimeout(function(){
        flipBtn.disabled = false;
    }, 3000);
}
resetBtn.addEventListener("click", () => {
    gameWon.innerHTML = "";
    playerName.innerHTML = "Player 1";
    coin.style.animation = "none";
    playersSuggest.style.left = "20%";
    playersSuggest.style.visibility = "visible";
    heads = 0;
    tails = 0;
    player = 1;
    playerOneWins = 0;
    playerTwoWins = 0;
    updateStatus();

    while(scorePlayer1.firstChild){
        scorePlayer1.removeChild(scorePlayer1.firstChild);
    }
    while(scorePlayer2.firstChild){
        scorePlayer2.removeChild(scorePlayer2.firstChild);
    }
})
