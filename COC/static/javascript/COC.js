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
    return Math.ceil(Math.random() * 6);
}

function rollThreeDice() {
    return rollOneDice() + rollOneDice() + rollOneDice();
}

function rollTwoDicePlus6 () {
    return rollOneDice() + rollOneDice() + 6;
}


$( document ).ready(function() {
    $( "#btnCat1" ).click();
    $(".label-dice").css("display", "none");
    $("#roll-dice").click(function() {
        for (i = 1; i <= 7; i++) {
            $("#D1-" + i.toString()).text((rollThreeDice() * 5).toString())
                                    .css("display", "inline-block");
        }
        for (i = 1; i <= 4; i++) {
            $("#D2-" + i.toString()).text((rollTwoDicePlus6() * 5).toString())
                                    .css("display", "inline-block");
        }
        for (i = 1; i <= 2; i++) {
            $("#D3-" + i.toString()).text((rollThreeDice() * 5).toString())
                                    .css("display", "inline-block");
        }
    });

});

