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

function rollTwoDicePlus6() {
    return rollOneDice() + rollOneDice() + 6;
}

// 提示1. 可以操作的class標籤
//     label-dice-disabled: 骰子點數被使用過的話，設為此class
//     label-dice-d1: 骰子是D1的範圍，且沒被使用的時候，設為此class
// 提示2. 如何移除class、增加class、判斷是否已擁有class?
//     $("XXX").removeClass("label-dice-disabled"); <-- 移除標籤
//     $("XXX").addClass("label-dice-disabled"); <-- 增加標籤
//     $("XXX").hasClass("label-dice-disabled"); <-- 詢問是否擁有label-dice-disabled標籤
function updateWhenD1Blur() {
    // Step 1: 將所有骰子點數的標籤設回"沒被使用過"
    for (i = 1; i <= 7; i++) {
        // TODO: 移除任何label-dice-disabled標籤，並加上label-dice-d1
    }
    
    // Step 2: 看過五個D1的數值空格，對每一個空格內的值呼叫disableD1Label
    disableD1Label(parseInt($("#input-str").val()));
    // TODO: 對其他四個格子做一樣的事情
}

function disableD1Label(v) {
    for (i = 1; i <= 7; i++) {
        var obj = $("#D1-" + i.toString());
        if ((parseInt(obj.text()) == v) && ! obj.hasClass("label-dice-disabled")) {
            // TODO: 已找到這次被使用的骰子點數，須將其設為label-dice-disabled
        }
    }
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
    
// 註冊updateWhenD1Blur在input的blur事件
    $("#input-str").blur(updateWhenD1Blur);
    // TODO: 對其他四個格子一樣註冊事件
});

