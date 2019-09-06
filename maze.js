var flag = 1;
var show = 0;

$(document).ready(function () {
    $("#start").click(function () {
        $(".boundary").css("background-color", "#eeeeee");
        flag = 0;
        show = 0;
    });

    $("#maze").mouseleave(function () {
        flag = 1;
    });

    $("#maze").mouseover(function () {
        flag = 0;
    });

    $('#start').mouseover(function () {

        $(".boundary").mouseover(function () {
            $(".boundary").css("background-color", "#A30000");
            if (show == 0) {
                alert("You Lost!");
                document.getElementById("status").innerHTML = "You Lost!";
                show = 1;
            }
            flag = 1;
        });

        $("#end").mouseover(function () {
            if (flag == 0) {
                if (show == 0) {
                    alert("You Win!");
                    document.getElementById("status").innerHTML = "You Win!";
                    show = 1;
                }
            } else {
                if (show == 0) {
                    $(".boundary").css("background-color", "#A30000");
                    alert("You Lost!");
                    document.getElementById("status").innerHTML = "You Lost!";
                    show = 1;
                }
            }
        });
    });


});