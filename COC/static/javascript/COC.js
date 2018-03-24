function openCatalog(evt, catalogName) {
    // Get all elements with class="tabcontent" and hide them
    $(".tabcontent").css("display", "none");

    // Get all elements with class="tablinks" and remove the class "active"
    $(".tablinks").removeClass("active");

    // Show the current tab, and add an "active" class to the link that opened the tab
    $("#" + catalogName).css("display", "block");
    $(evt.target).addClass("active");
}

function rollOneDice() {
return Math.ceil(Math.random()*6)
}

function rollThreeDice() {
return rollOneDice()+rollOneDice()+rollOneDice()
}

function rollTwoDicePlus6 () {
return rollOneDice()+rollOneDice()+6
}


$( document ).ready(function() {
    $( "#btnCat1" ).click();
    $(".label-dice").css("display", "none");
    $("#roll-dice").click(
    function() {
    $("#D1-1").text((rollThreeDice()*5).toString()).css("display", "inline-block");
    $("#D1-2").text((rollThreeDice()*5).toString()).css("display", "inline-block");
    $("#D1-3").text((rollThreeDice()*5).toString()).css("display", "inline-block");
    $("#D1-4").text((rollThreeDice()*5).toString()).css("display", "inline-block");
    $("#D1-5").text((rollThreeDice()*5).toString()).css("display", "inline-block");
    $("#D1-6").text((rollThreeDice()*5).toString()).css("display", "inline-block");
    $("#D1-7").text((rollThreeDice()*5).toString()).css("display", "inline-block");
    $("#D2-1").text((rollTwoDicePlus6()*5).toString()).css("display", "inline-block");
    $("#D2-2").text((rollTwoDicePlus6()*5).toString()).css("display", "inline-block");
    $("#D2-3").text((rollTwoDicePlus6()*5).toString()).css("display", "inline-block");
    $("#D2-4").text((rollTwoDicePlus6()*5).toString()).css("display", "inline-block");
    $("#D3-1").text((rollThreeDice()*5).toString()).css("display", "inline-block");
    $("#D3-2").text((rollThreeDice()*5).toString()).css("display", "inline-block");
    });

});

