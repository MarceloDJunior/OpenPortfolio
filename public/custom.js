$(document).ready(function() {
    var sideslider = $('[data-toggle=collapse-side]');
    var sel = sideslider.attr('data-target');
    var sel2 = sideslider.attr('data-target-2');
    var link = $('.navbar a');
    sideslider.on("click", function(){
        $(sel).toggleClass('in');
        $(sel2).toggleClass('out');
    });
    link.on("click", function(){
        $(sel).toggleClass('in');
        $(sel2).toggleClass('out');
    });

    // label flutuante
    $(".float-label").find("input, textarea").each(function () {
        if ($(this).val()) {
            $(this).addClass("active");
        } else {
            $(this).removeClass("active");
        }
    });
    $(".float-label").find("input, textarea").each(function () {
        $(this).on("change", function () {
            if ($(this).val()) {
                $(this).addClass("active");
            } else {
                $(this).removeClass("active");
            }
        });
    });
});