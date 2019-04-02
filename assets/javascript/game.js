

window.onload = function () {
    $("#redcrystal").on("click", recordLap);
    $("#bluecrystal").on("click", stop);
    $("#yellowcrystal").on("click", reset);
    $("#greencrystal").on("click", start);
};


var wins = 0;
var losses = 0;
var guessesLeft = 0;
var alphabets = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var guessesDone = 0;
var correctGuess = null;

function initialize() {

    wins = 0;
    losses = 0;
    guessesLeft = 10;
    guessesDone = 0;
    correctGuess = 0;
    updateCountsOnUI();
}


document.onclick = function (event) {
    if (guessesDone >= 10) {
        return;
    }
    var userGuess = event.key;
    var computerGuess = alphabets[Math.floor(Math.random() * alphabets.length)];


    if (userGuess === computerGuess) {
        wins += 1;
    } else {
        losses += 1;
    }
    guessesLeft -= 1;
    guessesDone += 1;


    updateCountsOnUI();



}

function updateCountsOnUI() {

    document.getElementById('Wins').innerHTML = "Wins: " + countwins;
    document.getElementById('Losses').innerHTML = "Losses: " + countlosses;
    document.getElementById('GuessesLeft').innerHTML = "GuessesLeft: " + guessesLeft
    document.getElementById('GuessesDone').innerHTML = "GuessesDone: " + guessesDone
}

initialize();
/*

    }



*/