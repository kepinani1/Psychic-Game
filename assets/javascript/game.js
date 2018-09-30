//psedo code
//1 - at start, wins, losses are 0
//2- user guesses, and then computer guesses
//3 - user has up to 9 guesses to determine guess letter chose by computer
//4 - if user guesses correct letter, wins go up by 1
//5 - if user cannot guesses correct letter, losses go up by 1
//6 - game resets and computer chooses a new letter
//7 - with each win, wins go up by 1
//8 - with each loss, losses go up by 1

var ranOptions = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var guesses = 10;
var lettersGuessed = [];
var computerGuess = [];
var userGuess;

window.onload = function () {
    var compGuess = ranOptions[Math.floor(Math.random() * ranOptions.length)];
    computerGuess.push(compGuess);
    console.log(computerGuess);
}

document.onkeyup = function (event) {
    userGuess = event.key;
   lettersGuessed.textContent=lettersGuessed;
   lettersGuessed.push(userGuess);
    console.log(userGuess);
    console.log(computerGuess);
}

if (userGuess === computerGuess && guesses <= 10) {
    wins++; //could not get wins, guesses, and losses to change
    guesses--;
} else if (userGuess !== computerGuess && guesses > 10) {
    losses++;
    guesses--;
}

function reset() { //I am not sure if game is actually resetting here
    wins = 0;
    losses = 0;
    guesses = 10;
    userGuess = [];
}

function quit() {
}

var html = "<h1>The Psychic Game</h1>" +
    "<p>Wins: " + wins + "</p>" +
    "<p>Losses: " + losses + "</p>" +
    "<p>Guesses: " + guesses + "</p>" +
    "<p>Your Guesses so far: " + lettersGuessed + "</p>"; //Despite referencing letterGuessed, I am unable to display what the user inputs onto the html page
document.querySelector('#game').innerHTML = html;