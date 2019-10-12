$(document).ready(function() {
    var randomNumber = Math.floor(Math.random() * 101) + 19;

    $("#randomNumber").append(randomNumber);

    var wins = 0;
    var losses = 0;
    var userTotal = 0;
    
    var crystal1 = $(".blackcrystal"); 
    var crystalNumber1 = Math.floor(Math.random() * 12) + 1;
    $(crystal1).on("click", function() {
        crystalNumber1 = parseInt(crystalNumber1);
        userTotal += crystalNumber1;
        $("#scoretext").text(userTotal);
    })

    
    var number2 = Math.floor(Math.random() * 12) + 1;
    var number3 = Math.floor(Math.random() * 12) + 1;
    var number4 = Math.floor(Math.random() * 12) + 1;

  
})