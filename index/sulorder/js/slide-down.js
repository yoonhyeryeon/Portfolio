$(document).ready(function () {
    $(".provider-tab1").click(function () {
    
        $('.user-provider-wrap').slideToggle("slow");
       
        $('.provider-tab1 .fa-chevron-down').toggleClass('trans');
        
        
    });
    $(".purchaser-tab2").click(function () {
        $(this).addClass("on");
        $(this).removeClass("on");
        $('.user-purchaser-wrap').slideToggle("slow");
        $('.purchaser-tab2 .fa-chevron-down').toggleClass('trans');
    });

});