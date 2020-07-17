$(document).ready(function(){
    $('.slider').slick({
        arrows: true,
        dots: true,
        adaptiveHeight: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 600,
        infinite: false, //?
        autoplay: true,
        autoplaySpeed: 2500, 
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