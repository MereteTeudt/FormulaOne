$(document).ready(function() {
    if ($(window).width() > 1100) {
        $("button").hide();
    

    }
    $("button").click(function() {
        $("#menu").slideToggle("slow");
    });
    });
