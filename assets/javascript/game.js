



$(document).ready(function () {
    console.log("ready!");

    var totalScore;
    var initialRandomScore;
    var wins = 0;
    var losses = 0;


    function initialize() {

        totalScore = 0;
        initialRandomScore = Math.floor(Math.random() * 101) + 19;
        updateCountsOnUI();
    }



    function updateCountsOnUI() {

        $('#Wins').text("Wins: " + wins);
        $('#Losses').text("Losses: " + losses);

        $("#RandomScore").text("Random Score: " + initialRandomScore);

    }

    function makeRandomScore() {
        totalScore += Math.floor(Math.random() * 11) + 1;

        $("#TotalScore").text(totalScore);
        console.log("Total score is ", totalScore);

        // if the score goes over, it is a loss
        if (totalScore > initialRandomScore) {
            // this is a loss
            losses += 1;
            // Game is lost initialize again
            initialize();
        } else if (totalScore === initialRandomScore) {
            wins += 1;
            // Game is won initialize again
            initialize();
        }
        updateCountsOnUI();
    }


    $(".crystal").on("click", makeRandomScore)

    initialize();
});

/*

$(document.onload = function () {
    var RandomScore = Math.floor(Math.random() * 101) + 19;
    var TotalScore = document.getElementById('TotalScore');

    var red = Math.floor(Math.random() * 11) + 1;
    var blue = Math.floor(Math.random() * 11) + 1;
    var green = Math.floor(Math.random() * 11) + 1;
    var yellow = Math.floor(Math.random() * 11) + 1;

};

document.onclick = function  {

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




document.onclick = function (event) {

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

initialize();
*/