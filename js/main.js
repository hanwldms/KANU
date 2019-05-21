// main slider
$('.slide1, .slide2, .slide3').hide();



var slides = $('ul li.slide'),
i = 0;


$(slides[0]).show();
(function loop() {
slides.delay(3000).fadeOut(1000).eq(++i%slides.length).fadeIn(1000, function() {

loop();
  
});
}()); 

// nav background
$(window).scroll(function(){
        var wScroll = $(this).scrollTop();
        if (wScroll >= $("#section02").offset().top - 100){
            $("nav").css({"background-color":"rgba(0, 0, 0, 0.9)"});
        } else {
            //$("nav").slideUp();
            $("nav").css("background-color", "transparent");
        }
    });