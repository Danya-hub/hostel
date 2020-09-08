$(document).ready(function () {
    $('a[href^="#"]').click(function () {
        var links = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(links).offset().top
        }, 800)
    });

    $('.buttonUp').click(function () {
        var topSection = $('#header');
        $('html, body').animate({
            scrollTop: $(topSection).offset().top
        }, 500)
    })
});