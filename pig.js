"use strict";
const winningTotal = 50;

const generateRandomNumber = max => {

    let randomNumber = null;
    if (!isNaN(max)) {
        // value >= 0.0 and < 1.0
        random = Math.random();
        // value is an integer between 0 and max - 1
        random = Math.floor(random * max);
        // value is an integer between 1 and max
        random = random + 1;
    }
    // if max is not a number, will return null
    return random;
}

const changePlayer = () => {
    if ($("#current").text() == $("#player1").val()) {
        $("#current").text($("#player2").val());
    } else {
        $("#current").text($("#player1").val());
    }
    $("#die").val("0");
    $("#total").val("0");
    $("#roll").focus();
};

$(document).ready(() => {

    $("#new_game").click(() => {
        $("#score1").val("0");
        $("#score2").val("0");
        if ($("#player1").val() == "" || $("#player2").val() == "") {
            alert("Please enter two player names.");
        } else {
            $("#turn").removeClass("hide");
            changePlayer();
        }
    });
    $("#roll").click(() => {
        let total = parseInt($("#total").val());
        const die = generateRandomNumber(6);
        if (die == 1) {
            total = 0;
            changePlayer();
        } else {
            total = total + die;
        }
        $("#die").val(die);
        $("#total").val(total);
    });

    $("#hold").click(() => {
        let score = 0;
        const total = parseInt($("#total").val());
        if ($("#current").text() == $("#player1").val()) {
            score = $("#score1");
        } else {
            score = $("#score2");
        }
        score.val(parseInt(score.val()) + total);
        if (score.val() >= winningTotal) {
            alert($("#current").text() + " WINS!");
        } else {
            changePlayer();
        }
    });
    $("#winning_total").text(winningTotal);
    $("#player1").focus();
});
