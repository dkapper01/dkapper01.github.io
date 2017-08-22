init(); 
var score = [0,0]; 
var roundScore = 0; 
var activePlayer = 0; 

document.querySelector(".roll-btn").addEventListener("click", function() { 

	var diceOne = Math.floor(Math.random() * 6) + 1; 
	var diceTwo = Math.floor(Math.random() * 6) + 1;

	document.querySelector(".dice-0").src = "img/dice-" + diceOne + ".png";
	document.querySelector(".dice-1").src = "img/dice-" + diceTwo + ".png"; 


	if(diceOne !== 1 && diceTwo !== 1) {
		roundScore += diceOne + diceTwo; 
		document.getElementById('current-' + activePlayer).textContent = roundScore; 
		if (diceOne === 6 && diceTwo === 6) {
			document.getElementById('score-' + activePlayer).textContent = '0'; 
			document.getElementById('current-' + activePlayer).textContent = '0'; 
			score[activePlayer] = 0; 
			nextPlayer(); 
		}

	} else { 
		document.getElementById('current-' + activePlayer).textContent = '0';

	nextPlayer(); 

	}
}); 

document.querySelector('.hold-btn').addEventListener('click', function () {

	score[activePlayer] += roundScore;
	document.getElementById('score-' + activePlayer).textContent = score[activePlayer]; 
	document.getElementById('current-' + activePlayer).textContent = '0'; 

	if(score[activePlayer] >= 100) {
		document.querySelector('.panel-' + activePlayer).textContent = 'Winner!'; 

		if(activePlayer === 1) {
			document.querySelector('.panel-0').textContent = 'Loser!';
		} else {
			document.querySelector('.panel-1').textContent = 'Loser!';
		}
	} 
	 
	nextPlayer(); 
});

document.querySelector('.play-btn').addEventListener('click', starteGame); 
document.querySelector('.start-btn').addEventListener('click', starteGame)

function nextPlayer () {
	roundScore = 0

	if(activePlayer === 0) {
		activePlayer = 1; 
	} else {
		activePlayer = 0
	}
}

function starteGame () {
	score = [0,0]
	roundScore = 0; 
	document.querySelector('.play-btn').style.display = 'none'; 

	document.querySelector(".dice-0").style.display = 'block';
	document.querySelector('.dice-1').style.display = 'block'; 
	document.querySelector('.start-btn').style.display = 'block'; 
	document.querySelector('.roll-btn').style.display = 'block'; 
	document.querySelector('.hold-btn').style.display = 'block';  

	document.querySelector('.player-score-0').textContent = "0"; 
	document.querySelector('.current-score-0').textContent = "0"; 

	document.querySelector('.player-score-1').textContent = '0'; 
	document.querySelector('.current-score-1').textContent = '0'; 

	document.querySelector('.player-name-0').classList.add('bg-success'); 
	document.querySelector('.player-name-1').classList.add('bg-danger');
}

function init () {

	document.querySelector(".dice-0").style.display = 'none';
	document.querySelector('.dice-1').style.display = 'none'; 
	document.querySelector('.start-btn').style.display = 'none'; 
	document.querySelector('.roll-btn').style.display = 'none'; 
	document.querySelector('.hold-btn').style.display = 'none';  

	document.querySelector('.player-score-0').textContent = "0"; 
	document.querySelector('.current-score-0').textContent = "0"; 

	document.querySelector('.player-score-1').textContent = '0'; 
	document.querySelector('.current-score-1').textContent = '0'; 

	document.querySelector('.player-name-0').classList.remove('bg-success'); 
	document.querySelector('.player-name-1').classList.remove('bg-danger');


}





























// init(); 
// var roundScore = 0; 
// var totalScore = 0;
// var activePlayer = 0; 
// var totalScore = [0,0]; 
// var gamePlaying = true; 



// document.querySelector(".btn-roll-dice").addEventListener("click", function () {
// 	var dice = Math.floor(Math.random() * 6) + 1; 
	
	
// 	document.querySelector(".dice").src = 'img/dice-' + dice + '.png'; 
// 	console.log(dice); 

// 	if(dice != 1) {
// 		roundScore += dice; 
// 		document.querySelector('.current-' + activePlayer).textContent = roundScore; 
// 	} else {
// 		roundScore = 0;
// 		// next player 
// 		console.log('next player'); 

// 		nextPlayer(); 
// 	}
	
// });


// document.querySelector('.btn-hold-dice').addEventListener('click', function () {
	
// 		totalScore[activePlayer] += roundScore; 

// 		document.getElementById('score-' + activePlayer).textContent = totalScore[activePlayer]; 
		
// 		document.querySelector('.current-' + activePlayer).textContent = '0';   

// 		if(totalScore[activePlayer] >= 20) {
// 			document.querySelector('.title-' + activePlayer).innerHTML = '<h1>Winner!</h1>'

// 			if(activePlayer == 0) {
// 				document.querySelector('.title-1').innerHTML = '<h1>Loser!</h1>'
// 				document.querySelector('.player-1-panel').classList.remove('active');


// 			} else {
// 				document.querySelector('.title-0').innerHTML = '<h1>Loser!</h1>'
// 				document.querySelector('.player-1-panel').classList.remove('active');

// 			}

// 		}

// 		nextPlayer();
// }); 

// document.querySelector(".btn-new-game").addEventListener("click", init); 

// function init () { 

// 	gamePlaying = true; 
// 	document.querySelector('.current-0').textContent = '0';
// 	document.getElementById('score-0').textContent = '0';

// 	document.querySelector('.current-1').textContent = '0';
// 	document.getElementById('score-1').textContent = '0';
// 	document.querySelector('.player-0-panel').classList.add('active');
// 	document.querySelector('.player-1-panel').classList.remove('active');
// }

// function nextPlayer () {
// 	roundScore = 0
// 	if(activePlayer === 0) {
// 		activePlayer = 1; 
// 		document.querySelector('.player-0-panel').classList.remove('active');
// 		document.querySelector('.player-1-panel').classList.add('active');
// 	} else {
// 		activePlayer = 0; 
// 		document.querySelector('.player-1-panel').classList.add('active');
// 		document.querySelector('.player-1-panel').classList.remove('.active');
// 	}
// }
