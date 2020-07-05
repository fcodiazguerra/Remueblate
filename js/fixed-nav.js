$('a[href^="#"]').click(function (event) {
    var id = $(this).attr("href");
    var target = $(id).offset().top;
    $('html, body').animate({
        scrollTop: target
    }, 500);
    event.preventDefault();
});

var offset = $('nav').offset().top;
$(window).scroll(function () {
    if ($(this).scrollTop() >= offset) {
        $('header').addClass('isFixed');
        $('html').addClass('whiteSpace');
    } else {
        $('header').removeClass('isFixed');
        $('html').removeClass('whiteSpace');
    }
});
