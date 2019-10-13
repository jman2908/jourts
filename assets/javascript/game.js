$(document).ready(function() {
    var randomNumber = Math.floor(Math.random() * 101) + 19;
    $("#randomNumber").text(randomNumber);

    var wins = 0;
    var losses = 0;
    var userTotal = 0;

    $("#numberWins").text(wins);
    $("#numberLosses").text(losses);

//win and losr functions
    function winner() {
        alert("you won!");
        wins++;
        $("#numberWins").text(wins);
        reset();
    }

    function loser() {
        alert("you lose");
        losses++;
        $("#numberLosses").text(losses);
        reset();
    }

    function reset() {
        randomNumber = Math.floor(Math.random() * 101) + 19;
        console.log(randomNumber)
        $("#randomNumber").text(randomNumber)
        var crystalNumber1 = Math.floor(Math.random() * 12) +1;
        var crystalNumber2 = Math.floor(Math.random() * 12) +1;
        var crystalNumber3 = Math.floor(Math.random() * 12) +1;
        var crystalNumber4 = Math.floor(Math.random() * 12) +1;
        userTotal = 0;
        $("#finalTotal").text(userTotal);
    }
    //end of win and loser functions
    
    var crystal1 = $(".blackcrystal"); 
    var crystalNumber1 = Math.floor(Math.random() * 12) +1;
    $(crystal1).on("click", function() {
        crystalNumber1 = parseInt(crystalNumber1);
        userTotal += crystalNumber1;
        $("#scoretext").text(userTotal);
        if(userTotal == randomNumber) {
            winner();
        }
        else if (userTotal > randomNumber) {
            loser();
        }
    })

    var crystal2 = $(".bluecrystal");
    var crystalNumber2 = Math.floor(Math.random() * 12) + 1;
    $(crystal2).on("click", function() {
        crystalNumber2 = parseInt(crystalNumber2);
        userTotal += crystalNumber2;
        $("#scoretext").text(userTotal);
        if(userTotal == randomNumber) {
            winner();
        }
        else if (userTotal > randomNumber) {
            loser();
        }
    })

    var crystal3 = $(".browncrystal");
    var crystalNumber3 = Math.floor(Math.random() * 12) +1;
    $(crystal3).on("click", function() {
        crystalNumber3 = parseInt(crystalNumber3);
        userTotal += crystalNumber3;
        $("#scoretext").text(userTotal);
        if(userTotal == randomNumber) {
            winner();
        }
        else if (userTotal > randomNumber) {
            loser();
        }
    })

    var crystal4 = $(".greencrystal");
    var crystalNumber4 = Math.floor(Math.random() * 12) + 1;
    $(crystal4).on("click", function() {
        crystalNumber4 = parseInt(crystalNumber4);
        userTotal += crystalNumber4;
        $("#scoretext").text(userTotal);
        if(userTotal == randomNumber) {
            winner();
        }
        else if (userTotal > randomNumber) {
            loser();
        }
    })
})