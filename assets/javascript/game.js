

$(document.onload = function () {
    var RandomScore = [Math.floor(Math.random() * 101) + 19);
var TotalScore = document.getElementById('TotalScore')

};
$("crystals").on("click", function () {
    for (var i = 0; i < 1; i++);


    $("#red")onclick(.document.write.RandomScore);
    $("#blue")onclick(.document.write.RandomScore);
    $("#yellow")onclick(.document.write.RandomScore);
    $("#green")onclick(.document.write.RandomScore);
};

var wins = 0;
var losses = 0;
var guessesLeft = 0;
var number =

    function initialize() {

        TotalScore = 0;
        wins = 0;
        losses = 0;
        updateCountsOnUI();
    }


document.onclick = function (event) {
    for (var i = 0; i < 1; i++)
        var random = event.key;
    var computerGuess = alphabets[Math.floor(Math.random() * alphabets.length)];


    if (TotalScore === RandomScore) {
        wins += 1;
    } else {
        losses += 1;
    }



    updateCountsOnUI();



}

function updateCountsOnUI() {

    document.write('Wins').innerHTML = "Wins: " + countwins;
    document.write('Losses').innerHTML = "Losses: " + countlosses;
    document.write('GuessesLeft').innerHTML = "GuessesLeft: " + guessesLeft
    document.write('GuessesDone').innerHTML = "GuessesDone: " + guessesDone
}

initialize();