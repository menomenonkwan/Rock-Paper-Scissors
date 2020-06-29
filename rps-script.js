let playerSelection = playerPlay();
let computerSelection = "";
let playerScore = 0;
let computerScore = 0;
const computerScoreboard = document.getElementById("computer-score");
const playerScoreboard = document.getElementById("player-score");
const resetScore = document.getElementById("btn");
const rockChoice = 'far fa-hand-rock';
const paperChoice = 'fas fa-toilet-paper';
const scissorsChoice = 'fas fa-cut';
let playerResultIcon = '';
let computerResultIcon = '';

// player selection
function playerPlay() {
	const playerChoice = document.querySelectorAll('.selection');

	// using .forEach() to iterate through each selection option
	playerChoice.forEach((option) => {
	    option.addEventListener('click', (e) => {
		playerSelection = option.id;
		game(playerSelection);
  });
});

}


// computer selection
function computerPlay() {
	// computer choose random number
	let choice = Math.ceil(Math.random() * 3);

	// assign number to rock/paper/scissors
	let computerSelection = "";
	
	switch (choice) {
		case 1:
			computerSelection = "rock";
			computerResultIcon = rockChoice;
			break;
		case 2:
			computerSelection = "paper";
			computerResultIcon = paperChoice;      
			break;
		default:
			computerSelection = "scissors";
			computerResultIcon = scissorsChoice;
			break;
	}
	return computerSelection;
}

// playing the game function
function game(playerRPS) {
  let computerRPS = computerPlay(); 
  let winner = whoWon(playerRPS,computerRPS);
      if (playerSelection == 'rock') {
		playerResultIcon = rockChoice; 
      } else if (playerSelection == 'paper') {
		playerResultIcon = paperChoice; 
      } else { 
		playerResultIcon = scissorsChoice;
    };
  
// show results
  document.getElementById("result").innerHTML = "<i class='" + playerResultIcon + "'></i> vs <i class='" + computerResultIcon + "'></i>";
  document.getElementById("declaration").innerHTML = winner;
      if (computerScore == 5) {
		document.getElementById("declaration").innerHTML = "Game Over! The llama is champion of the world!";
        resetTheGame();
      }
      if (playerScore == 5) {
		document.getElementById("declaration").innerHTML = "Congrats! You won it all!";
        resetTheGame();      
      }
}


// compare player and computer selections
function whoWon(player,computer) {
  let winner = '';
	if (player === computer) {
		winner = "We've Got a tie";
	} else if (player == "rock" && computer == "scissors") {
		winner = "You Won!";
		playerScore++;
		playerScoreboard.innerHTML = "<p>" + playerScore + "</p>";    
	} else if (player == "paper" && computer == "rock") {
		winner = "You Won!";
		playerScore++;
		playerScoreboard.innerHTML = "<p>" + playerScore + "</p>";      
	} else if (player == "scissors" && computer == "paper") {
		winner = "You Won!";
		playerScore++;
		playerScoreboard.innerHTML = "<p>" + playerScore + "</p>";      
	} else {
		winner = "The llama wins!";  
		computerScore++;
		computerScoreboard.innerHTML = "<p>" + computerScore + "</p>";
	}
  return winner;
}


// NEW GAME / reset button 
 resetScore.addEventListener('click', function() {
   playerScore = 0;
   computerScore = 0;
   playerScoreboard.innerHTML = "<p>" + playerScore + "</p>";
   computerScoreboard.innerHTML = "<p>" + computerScore + "</p>"; 
   document.getElementById('game').style.display = "flex";  
   document.getElementById('declaration').classList.remove("pulsing");
   document.getElementById("declaration").innerHTML = "";
});

function resetTheGame() {
  document.getElementById('game').style.display = "none";
  document.getElementById('declaration').classList.add("pulsing");
}