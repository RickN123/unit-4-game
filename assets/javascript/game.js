

window.onload = function () {
    var RandomNumber = [Math.floor(Math.random() * 101 + 19);

};
$("crystals").on("click", function () {
    for (var i = 0; i < 1; i++)

}
$("#red").onclick(.documentwrite.RandomNumber);
$("#blue").onclick(.text(RandomNumber);
$("#yellow").onclick(.text(RandomNumber);
$("#green").onclick(.text(RandomNumber);
};

var wins = 0;
var losses = 0;
var guessesLeft = 0;
var number = 
var guessesDone = 0;
var correctGuess = null;

function initialize() {

    totalscore = 0;
    wins = 0;
    losses = 10;
    guessesDone = 0;
    correctGuess = 0;
    updateCountsOnUI();
}


document.onclick = function (event) {
    for (var i = 0; i < 1; i++)
        var random = event.key;
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

    document.write('Wins').innerHTML = "Wins: " + countwins;
    document.write('Losses').innerHTML = "Losses: " + countlosses;
    document.write('GuessesLeft').innerHTML = "GuessesLeft: " + guessesLeft
    document.write('GuessesDone').innerHTML = "GuessesDone: " + guessesDone
}

initialize();