const popUp = document.getElementById('pop-up');
const closeButton = document.getElementById('close-pop-up');
const roundScoreYou = document.getElementById('round-score-1');
const totalScoreYou = document.getElementById('total-score-1');
const roundScoreOpponent = document.getElementById('round-score-2');
const totalScoreOpponent = document.getElementById('total-score-2');

closeButton.addEventListener('click', function (){
    popUp.style.display = "none";
    resetGame();
});


const newGameButton  = document.getElementById('new-game');
const rollButton   = document.getElementById('roll');

const dice1 = document.getElementById('dice1');
const dice2 = document.getElementById('dice2');
const dice3 = document.getElementById('dice3');
const dice4 = document.getElementById('dice4');

let totalScore1 = 0;
let totalScore2 = 0;
let roundNum =0;

rollButton.addEventListener('click', rollDie);

function rollDie(){

    
    roundNum++;

    if(roundNum <= 3){

    let dice1Num = Math.floor(Math.random() * 6) + 1;
    let dice2Num = Math.floor(Math.random() * 6) + 1;
    let dice3Num = Math.floor(Math.random() * 6) + 1;
    let dice4Num = Math.floor(Math.random() * 6) + 1;

    dice1.src = `images/${dice1Num}.png`;
    dice2.src = `images/${dice2Num}.png`;
    dice3.src = `images/${dice3Num}.png`;
    dice4.src = `images/${dice4Num}.png`;

    let roundScore1 = 0;
   

    if(dice1Num == 1 || dice2Num == 1){
        roundScore1  = 0;
    }else if(dice1Num === dice2Num){
        roundScore1 = dice2Num*4;
        totalScore1 += dice2Num*4;
    }else{
        roundScore1 = dice1Num + dice2Num;
        totalScore1 += dice1Num + dice2Num;
    }

    roundScoreYou.innerHTML = `Score this round: ${roundScore1}`;
    totalScoreYou.innerHTML = `Total Score: ${totalScore1}`;

    let roundScore2 = 0;

    if(dice3Num == 1 || dice4Num == 1){
        roundScore2  = 0;
    }else if(dice3Num === dice4Num){
        roundScore2 = (dice4Num*4);
        totalScore2 += dice4Num*4;
    }else{
        roundScore2 = (dice3Num + dice4Num);
        totalScore2 += dice3Num + dice4Num;
    }

    roundScoreOpponent.innerHTML   = `Score this round: ${roundScore2}`;
    totalScoreOpponent.innerHTML = `Total Score: ${totalScore2}`;

}
if(roundNum == 3){
    if(totalScore1 > totalScore2){
        document.getElementById('pop-up-text').innerHTML = `You Won!`;
        popUp.style.display = "block";
    }else if(totalScore2 > totalScore1){
        document.getElementById('pop-up-text').innerHTML = `You Lost!`;
        popUp.style.display = "block";
    }else{
        document.getElementById('pop-up-text').innerHTML = `It's a draw!`;
        popUp.style.display = "block";
    }
}

}

newGameButton.addEventListener('click', resetGame);
const originalSrc = `images/1.png`;

function resetGame(){
    dice1.src = originalSrc;
    dice2.src = originalSrc;
    dice3.src = originalSrc;
    dice4.src = originalSrc;

    totalScore1 =0;
    totalScore2 =0;
    roundNum =0;

    roundScoreOpponent.innerHTML   =`Score this round: 0`;
    totalScoreOpponent.innerHTML   =`Total Score: 0`;
    roundScoreYou.innerHTML        =`Score this round: 0`;
    totalScoreYou.innerHTML        =`Total Score: 0`;
}
