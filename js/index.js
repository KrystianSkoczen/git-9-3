'use strict'

var roundCounter = 5;
var choiceStone = document.getElementById('stone'), choicePaper = document.getElementById('paper'), choiceScissors = document.getElementById('scissors');

choiceStone.addEventListener('click', function() { playerClick('stone') });
choicePaper.addEventListener('click', function() { playerClick('paper') });
choiceScissors.addEventListener('click', function() { playerClick('scissors') });

function checkRoundWinner(playerClick, compClick) {
  playerResultElem.innerHTML = computerResultElem.innerHTML = '';

  var winnerIs = 'player';

    if (playerClick == compClick) {
        winnerIs = 'noone'; // remis
    } else if (
        (compClick == 'stone' &&  playerClick == 'scissors') ||
        (compClick == 'scissors' &&  playerClick == 'paper') ||
        (compClick == 'paper' &&  playerClick == 'stone')) {
        
        winnerIs = 'computer';
    }

    if (winnerIs == 'player') {
        playerResultElem.innerHTML = "Win!";
        player.score++;
    } else if (winnerIs == 'computer') {
        computerResultElem.innerHTML = "Win!";
        comp.score++;
    setGamePoints();
    }
  if((player.score == roundCounter) || (comp.score == roundCounter))
  endOfTheGame();
}

var gameState = 'notStarted',  
    
    player = {
        score: 0
    },
    comp = {
        score: 0
    };

document.getElementById('score');

var playerPointsElem = document.getElementById('player_point'),
    computerPointsElem = document.getElementById('comp_point');

function newGame() {
    player.score = comp.score = 0;
    gameState = 'started';
    
    setGamePoints();
}

var x = Math.random();

Math.floor(Math.random()*3)

function getComputerPick() {
    var possiblePicks = ['stone', 'paper', 'scissors'];
    return possiblePicks[Math.floor(Math.random()*3)];
}

var playerPickElem = document.getElementById('js-playerClick'),
    computerPickElem = document.getElementById('js-computerClick'),
    playerResultElem = document.getElementById('js-playerResult'),
    computerResultElem = document.getElementById('js-computerResult');

function playerClick(playerClick) {
    var compClick = getComputerPick();
    
    playerPickElem.innerHTML = playerClick;
    computerPickElem.innerHTML = compClick;
    
    checkRoundWinner(playerClick, compClick);
}

function setGamePoints() {
    playerPointsElem.innerHTML = player.score;
    computerPointsElem.innerHTML = comp.score;
}

function endOfTheGame() {
    if (player.score == roundCounter) {
        alert("The winner is player!");
    } 
    else if (comp.score == roundCounter) {
        alert("The winner is machine");
    }
    
};