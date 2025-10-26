var randomNumber = parseInt(Math.random() * 100 + 1);

var userInput = document.getElementById('guessField');
var submit = document.getElementById('subt');
var previousGuesses = document.querySelector('.guesses');
var remaining = document.querySelector('.lastResult');
var messageDisplayer = document.querySelector('.lowOrHi');
var startOver = document.querySelector('.resultParas');

var p = document.createElement('p');

var playGame = true;

// var remGuessNo = 10;
var noOfGuesses = 0;

if (playGame == true) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guessedNo = parseInt(userInput.value);
    checkValidity(guessedNo);
  });
}

function checkValidity(guessedNo) {
  if (isNaN(guessedNo)) {
    alert('Please Enter a Valid Number.');
  } else if (guessedNo < 1) {
    alert('Please Enter a Number greater that 0.');
  } else if (guessedNo > 100) {
    alert('Please Enter a Number less that 100.');
  } else {
    if (noOfGuesses == 10) {
      displayGuessedNo(guessedNo);
      displayMessage(`Game Over. The Random Number was: ${randomNumber}`);
      endGame();
    } else {
      displayGuessedNo(guessedNo);
      checkGuessedNo(guessedNo);
    }
  }
}

function checkGuessedNo(guessedNo) {
  if (guessedNo > randomNumber) {
    displayMessage(`Too High!`);
  } else if (guessedNo < randomNumber) {
    displayMessage(`Too Low!`);
  } else {
    displayMessage(`You guessed it right.`);
    endGame();
  }
}

function displayGuessedNo(guessedNo) {
  userInput.value = '';
  previousGuesses.innerHTML += `${guessedNo}, `;
  noOfGuesses++;
  remaining.innerHTML = `${10 - noOfGuesses}`;
}

function displayMessage(message) {
  messageDisplayer.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  // userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id ="newGame">Start New Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGame = document.querySelector('#newGame');
  newGame.addEventListener('click', function () {
    randomNumber = parseInt(Math.random() * 100 + 1);
    previousGuesses.innerHTML = '';
    noOfGuesses = 0;
    remaining.innerHTML = `${10 - noOfGuesses}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
  });
}
