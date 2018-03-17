function openCatalog(evt, catalogName) {
    // Get all elements with class="tabcontent" and hide them
    $(".tabcontent").css("display", "none");

    // Get all elements with class="tablinks" and remove the class "active"
    $(".tablinks").removeClass("active");

    // Show the current tab, and add an "active" class to the link that opened the tab
    $("#" + catalogName).css("display", "block");
    evt.target.addClass("active");
}

$( document ).ready(function() {
    $( "#btnCat1" ).click();
});