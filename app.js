var rollDice, newGame, holdPoint, diceImg, winPoint; 
var scores = []; 
var currentScore; 
var activePlayer; 

activePlayer = 0; 
currentScore = 0; 
winPoint = 20;
scores = [0,0]; 

btnRoll = document.querySelector('.btn-roll'); 
btnNew = document.querySelector('.btn-new'); 
btnHold = document.querySelector('.btn-hold'); 
diceImg = document.querySelector('.dice'); 
playerPan0 = document.querySelector('.player-panel-0'); 
playerPan1 = document.querySelector('.player-panel-1'); 

document.querySelector('.score-0').textContent = '0';
document.querySelector('.score-1').textContent = '0';
document.querySelector('#current-0').textContent = '0';
document.querySelector('#current-1').textContent = '0';
diceImg.style.display = 'none'; 


btnRoll.addEventListener('click', function(){

    //show randome dice
    var randNum = Math.floor(Math.random() * 6 + 1); 
    diceImg.style.display = 'block';
    diceImg.src="./img/dice-" + randNum  + ".png"; 
    
    if (randNum !== 1){
        //add value of random dice to current score
        currentScore += randNum; 
        document.querySelector('#current-' + activePlayer).textContent = currentScore;
    } else{
        nextPlayer();
    }
    //active player changes 
    //current score becomes 0
    
}); 

btnHold.addEventListener('click', function(){

    scores[activePlayer] += currentScore; 

    document.querySelector('.score-' + activePlayer).textContent = scores[activePlayer]; 

    if(scores[activePlayer] >= winPoint){
        
        document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
        document.querySelector('.player-panel-' + activePlayer).classList.add('.winner'); 
        document.querySelector('.player-panel-' + activePlayer).classList.remove('.active'); 
        
        diceImg.style.display = 'none'; 
    }else{
        nextPlayer(); 
    }

}); 

function nextPlayer(){
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0; 
    currentScore = 0; 

    document.querySelector('#current-0').textContent = '0';
    document.querySelector('#current-1').textContent = '0';

    playerPan0.classList.toggle('active'); 
    playerPan1.classList.toggle('active');

    // diceImg.style.display = 'none'; 
}