



$(document).ready(function () {
    console.log("ready!");

    var totalScore;
    var initialRandomScore;
    var wins = 0;
    var losses = 0;


    function initialize() {

        totalScore = 0;
        initialRandomScore = Math.floor(Math.random() * 101) + 19;
        updateTotalsOnUI();
    }



    function updateTotalsOnUI() {

        $('#Wins').text("Wins: " + wins);
        $('#Losses').text("Losses: " + losses);

        $("#RandomScore").text("Random Score: " + initialRandomScore);

    }

    function makeRandomScore() {
        totalScore += Math.floor(Math.random() * 11) + 1;

        $("#TotalScore").text(totalScore);
        console.log("Total score is ", totalScore);

        if (totalScore > initialRandomScore) {

            losses += 1;

            initialize();
        } else if (totalScore === initialRandomScore) {
            wins += 1;

            initialize();
        }
        updateTotalsOnUI();
    }


    $(".crystal").on("click", makeRandomScore)

    initialize();
});