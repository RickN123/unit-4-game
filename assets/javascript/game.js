

$(document.onload = function () {
    var RandomScore = [Math.floor(Math.random() * 101) + 19);
var TotalScore = document.getElementById('TotalScore');

var red = [Math.floor(Math.random() * 11) + 1);
var blue = [Math.floor(Math.random() * 11) + 1);
var green = [Math.floor(Math.random() * 11) + 1);
var yellow = [Math.floor(Math.random() * 11) + 1);



};
$("crystals").click(function () {
    for (var i = 0; i < 1; i++);

}

    $("#red").click(.document.write.RandomScore);
}
$("#blue").click(.document.write.RandomScore);
}
$("#yellow").click(.document.write.RandomScore);
}
$("#green").click(.document.write.RandomScore);
};

var wins = 0;
var losses = 0;
var TotalScore = 0;
var RandomScore = [Math.floor(Math.random() * 101) + 19);

function initialize() {

    TotalScore = 0;
    wins = 0;
    losses = 0;
    updateCountsOnUI();
}


document.onclick = function (event) {
    for (var i = 0; i < 1; i++)
        var random = event.key;

    if (TotalScore === RandomScore) {
        wins += 1;
    } else {
        losses += 1;
    }

    if (wins += 1;, losses += 1) {
        reset;
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