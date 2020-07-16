$(document).ready(function(){
    $('.slider').slick({
        arrows: true,
        dots: true,
        adaptiveHeight: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 600,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        pauseOnFocus: false,
        draggable: false,
        waitForAnimate: false,
        centerMode: true,
        variableWidth: true,
        responsive:[{
            breakpoint: 768,
            settings:{
                arrows: false
            }
        }]
    });
});