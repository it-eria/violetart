//= vendors/jquery-3.3.1.min.js
//= vendors/slick.min.js
//= vendors/aos.js
//= vendors/bootstrap.min.js




$('.room-1-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.room-1-slider-sub'
});
$('.room-1-slider-sub').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.room-1-slider',
    dots: false,
    autoplay: true,
    focusOnSelect: true
});

$('.room-2-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.room-2-slider-sub'
});
$('.room-2-slider-sub').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.room-2-slider',
    dots: false,
    autoplay: true,
    focusOnSelect: true
});
$('.room-3-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.room-3-slider-sub'
});
$('.room-3-slider-sub').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.room-3-slider',
    dots: false,
    autoplay: true,
    focusOnSelect: true
});

$(document).ready(function() {

// Hide Header on on scroll down
    var didScroll;
    var lastScrollTop = 0;
    var delta = 5;
    var navbarHeight = $('.menu-wrapp').outerHeight();

    $(window).scroll(function (event) {
        didScroll = true;
    });

    setInterval(function () {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 250);

    function hasScrolled() {
        var st = $(this).scrollTop();

        // Make sure they scroll more than delta
        if (Math.abs(lastScrollTop - st) <= delta)
            return;

        // If they scrolled down and are past the navbar, add class .nav-up.
        // This is necessary so you never see what is "behind" the navbar.
        if (st > lastScrollTop && st > navbarHeight) {
            // Scroll Down
            $('.menu-wrapp').removeClass('nav-down').addClass('nav-up');
        } else {
            // Scroll Up
            if (st + $(window).height() < $(document).height()) {
                $('.menu-wrapp').removeClass('nav-up').addClass('nav-down');
            }
        }

        lastScrollTop = st;
    }
});


$('.header-slider-container__width-1630__slider-block__header-slider').slick({
    dots: true,
    infinite: true,
    speed: 1000,
    fade: true,
    cssEase: 'linear',
    arrows: false,
    autoplay: true,
    appendDots: $(".dots-container")
});
$('.interior-slider').slick({
    dots: false,
    infinite: true,
    speed: 1200,
    fade: true,
    cssEase: 'linear',
    arrows: false,
    autoplay: true

});

$('.clothes-container__width-1630__clothes-content__clothes-slider').slick({
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    responsive: [
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }

    ]

});
$('.want-container__width-1630__want-content__want-slider').slick({
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
    responsive: [

        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }

    ]

});

$('.blog-container__width-1630__blog-content__blog-slider').slick({
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    responsive: [

        {
            breakpoint: 700,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }

    ]

});

$('.left-arrow-header').click(function(){
    $('.header-slider-container__width-1630__slider-block__header-slider').slick('slickPrev');
});

$('.right-arrow-header').click(function(){
    $('.header-slider-container__width-1630__slider-block__header-slider').slick('slickNext');
});
$('.left-arrow-interior').click(function(){
    $('.interior-slider').slick('slickPrev');
});

$('.right-arrow-interior').click(function(){
    $('.interior-slider').slick('slickNext');
});

$('.left-arrow-clothes').click(function(){
    $('.clothes-container__width-1630__clothes-content__clothes-slider').slick('slickPrev');
});

$('.right-arrow-clothes').click(function(){
    $('.clothes-container__width-1630__clothes-content__clothes-slider').slick('slickNext');
});
$('.left-arrow-want').click(function(){
    $('.want-container__width-1630__want-content__want-slider').slick('slickPrev');
});

$('.right-arrow-want').click(function(){
    $('.want-container__width-1630__want-content__want-slider').slick('slickNext');
});

$('.left-arrow-blog').click(function(){
    $('.blog-container__width-1630__blog-content__blog-slider').slick('slickPrev');
});

$('.right-arrow-blog').click(function(){
    $('.blog-container__width-1630__blog-content__blog-slider').slick('slickNext');
});


$(document).ready(function(){
    $('.form-element').focus(function(){
        $(this).siblings('label').addClass('focus');
    });
    $('.form-element').focusout(function(){
        if ($(this).val() === ''){
            $(this).siblings('label').removeClass('focus');
        }
    });
});

AOS.init({
    duration: 1200
});

$(document).ready(function(){
    $("#flip").click(function(){
        $("#panel").slideToggle("slow");
        $("#panel li").on("click", function(){
            $("#panel").hide("slow");
        })
    });
});




var menu = document.querySelector( "#menu-burger" )

menu.addEventListener( "click", function(){
    this.classList.toggle( "active" );
});





$('.our-video-container__width-1630__width-1420__video-slider').slick({
    autoplay: true,
    arrows: false,
    fade: true
});

$('.our-video-container__width-1630__width-1420__interior-arrows__left-arrow-interior').click(function(){
    $('.our-video-container__width-1630__width-1420__video-slider').slick('slickPrev');
});

$('.our-video-container__width-1630__width-1420__interior-arrows__right-arrow-interior').click(function(){
    $('.our-video-container__width-1630__width-1420__video-slider').slick('slickNext');
});