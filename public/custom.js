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
});