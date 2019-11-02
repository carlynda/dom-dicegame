var rollDice, newGame, holdPoint, diceImg, winPoint, gamePlay; 
var scores = []; 
var currentScore; 
var temp_dice = []; 
var activePlayer, i; 

btnRoll = document.querySelector('.btn-roll'); 
btnNew = document.querySelector('.btn-new'); 
btnHold = document.querySelector('.btn-hold'); 
diceImg = document.querySelector('.dice'); 
playerPan0 = document.querySelector('.player-panel-0'); 
playerPan1 = document.querySelector('.player-panel-1'); 

init()
// activePlayer.rolls = []; 


btnRoll.addEventListener('click', function(){
    if(gamePlay){
        //show randome dice
        var randNum = Math.floor(Math.random() * 6 + 1); 

        //adding scores into an array
        temp_dice.push(randNum) ;

        //checking value of dice: 1 then nextPlayer(), if 2x6 then loose all score
        if(temp_dice[i] === 1){ nextPlayer(); }
        else if(temp_dice[temp_dice.length -1] === 6 && temp_dice[temp_dice.length - 2] === 6){
            scores[activePlayer] = 0; 
            document.querySelector('.score-' + activePlayer).textContent = scores[activePlayer]; 
            nextPlayer();
        }

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
    }
    
}); 

btnHold.addEventListener('click', function(){
    if(gamePlay){
        scores[activePlayer] += currentScore; 
    
        document.querySelector('.score-' + activePlayer).textContent = scores[activePlayer]; 
    
        if(scores[activePlayer] >= winPoint){
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('.player-panel-' + activePlayer).classList.add('winner'); 
            document.querySelector('.player-panel-' + activePlayer).classList.remove('active'); 
            diceImg.style.display = 'none'; 
            gamePlay = false; 
        }else{
            nextPlayer(); 
        }
    }

}); 

btnNew.addEventListener('click', init); 

function nextPlayer(){
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0; 
    currentScore = 0; 

    temp_dice.push(0);

    document.querySelector('#current-0').textContent = '0';
    document.querySelector('#current-1').textContent = '0';

    playerPan0.classList.toggle('active'); 
    playerPan1.classList.toggle('active');

    // diceImg.style.display = 'none'; 
}

function init(){
    gamePlay = true;
    activePlayer = 0; 
    currentScore = 0; 
    winPoint = 100;
    scores = [0,0]; 
    temp_dice = []; 

    document.querySelector('.score-0').textContent = '0';
    document.querySelector('.score-1').textContent = '0';
    document.querySelector('#current-0').textContent = '0';
    document.querySelector('#current-1').textContent = '0';
    diceImg.style.display = 'none'; 


    
    document.querySelector('#name-0').textContent = 'Player 1';
    document.querySelector('#name-1').textContent = 'Player 2';
    playerPan0.classList.remove('winner'); 
    playerPan1.classList.remove('winner');
    playerPan0.classList.remove('active'); 
    playerPan1.classList.remove('active');
    playerPan0.classList.add('active');

}