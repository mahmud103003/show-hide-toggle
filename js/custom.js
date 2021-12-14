// click function

// hide arrow
$(".up").click(function (){
    $("p").hide();
});

// show arrow
$(".down").click(function(){
    $("p").show();
});

// show both arrow
$('.both').click(function(){
    $('p').toggle();
});