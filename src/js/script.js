//= vendors/jquery-3.3.1.min.js
//= vendors/slick.min.js
//= vendors/aos.js
//= vendors/bootstrap.min.js


$(document).ready(function() {
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
        if (Math.abs(lastScrollTop - st) <= delta)
            return;
        if (st > lastScrollTop && st > navbarHeight) {
            $('.menu-wrapp').removeClass('nav-down').addClass('nav-up');
        } else {
            if (st + $(window).height() < $(document).height()) {
                $('.menu-wrapp').removeClass('nav-up').addClass('nav-down');
            }
        }
        lastScrollTop = st;
    }
});

$('.tematic-left-1').click(function(){
    $('.tematic-slider-1-main').slick('slickPrev');
});

$('.tematic-right-1').click(function(){
    $('.tematic-slider-1-main').slick('slickNext');
});

$('.slider-interior-1-left-arrow').click(function(){
    $('.slider-interior-1').slick('slickPrev');
});

$('.slider-interior-1-right-arrow').click(function(){
    $('.slider-interior-1').slick('slickNext');
});

$('.photosession-arrow-left-3').click(function(){
    $('.photosession-slider-3').slick('slickPrev');
});

$('.photosession-arrow-right-3').click(function(){
    $('.photosession-slider-3').slick('slickNext');
});

$('.photosession-arrow-left-2').click(function(){
    $('.photosession-slider-2').slick('slickPrev');
});

$('.photosession-arrow-right-2').click(function(){
    $('.photosession-slider-2').slick('slickNext');
});

$('.photosession-arrow-left-1').click(function(){
    $('.photosession-slider-1').slick('slickPrev');
});

$('.photosession-arrow-right-1').click(function(){
    $('.photosession-slider-1').slick('slickNext');
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

var menu = document.querySelector( "#menu-burger" );
menu.addEventListener( "click", function(){
    this.classList.toggle( "active" );
});

$('.our-video-container__width-1630__width-1420__interior-arrows__left-arrow-interior').click(function(){
    $('.our-video-container__width-1630__width-1420__video-slider').slick('slickPrev');
});

$('.our-video-container__width-1630__width-1420__interior-arrows__right-arrow-interior').click(function(){
    $('.our-video-container__width-1630__width-1420__video-slider').slick('slickNext');
});

var x, i, j, selElmnt, a, b, c;

x = document.getElementsByClassName("custom-select");
for (i = 0; i < x.length; i++) {
    selElmnt = x[i].getElementsByTagName("select")[0];
    a = document.createElement("DIV");
    a.setAttribute("class", "select-selected");
    a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
    x[i].appendChild(a);
    b = document.createElement("DIV");
    b.setAttribute("class", "select-items select-hide");
    for (j = 1; j < selElmnt.length; j++) {
        c = document.createElement("DIV");
        c.innerHTML = selElmnt.options[j].innerHTML;
        c.addEventListener("click", function(e) {
            var i, s, h;
            s = this.parentNode.parentNode.getElementsByTagName("select")[0];
            h = this.parentNode.previousSibling;
            for (i = 0; i < s.length; i++) {
                if (s.options[i].innerHTML == this.innerHTML) {
                    s.selectedIndex = i;
                    h.innerHTML = this.innerHTML;
                    break;
                }
            }
            h.click();
        });
        b.appendChild(c);
    }
    x[i].appendChild(b);
    a.addEventListener("click", function(e) {
        e.stopPropagation();
        closeAllSelect(this);
        this.nextSibling.classList.toggle("select-hide");
        this.classList.toggle("select-arrow-active");
    });
}
function closeAllSelect(elmnt) {
    var x, y, i, arrNo = [];
    x = document.getElementsByClassName("select-items");
    y = document.getElementsByClassName("select-selected");
    for (i = 0; i < y.length; i++) {
        if (elmnt == y[i]) {
            arrNo.push(i)
        } else {
            y[i].classList.remove("select-arrow-active");
        }
    }
    for (i = 0; i < x.length; i++) {
        if (arrNo.indexOf(i)) {
            x[i].classList.add("select-hide");
        }
    }
}

document.addEventListener("click", closeAllSelect);
function setupDropdowns() {
    function createDropdown(element) {
        var elementTitle = element.getElementsByTagName("h2");
        return function(){
            console.log("function", elementTitle[0]);
        };
    }

    var fauxSelects = document.getElementsByClassName("guacamole-select");
    var x, y, myFauxSelects = [];
    for (x = 0; x < fauxSelects.length; x++) {
        myFauxSelects[x] = createDropdown( fauxSelects[x] );
        myFauxSelects[x]();
    }
}
setupDropdowns();

(function() {
    window.inputNumber = function(el) {
        var min = el.attr('min') || false;
        var max = el.attr('max') || false;
        var els = {};
        els.dec = el.prev();
        els.inc = el.next();
        el.each(function() {
            init($(this));
        });
        function init(el) {
            els.dec.on('click', decrement);
            els.inc.on('click', increment);
            function decrement() {
                var value = el[0].value;
                value--;
                if(!min || value >= min) {
                    el[0].value = value;
                }
            }

            function increment() {
                var value = el[0].value;
                value++;
                if(!max || value <= max) {
                    el[0].value = value++;
                }
            }
        }
    }
})();

inputNumber($('.input-number'));
(function() {
    window.inputNumber2 = function(el) {
        var min = el.attr('min') || false;
        var max = el.attr('max') || false;
        var els = {};
        els.dec = el.prev();
        els.inc = el.next();
        el.each(function() {
            init2($(this));
        });

        function init2(el) {
            els.dec.on('click', decrement2);
            els.inc.on('click', increment2);

            function decrement2() {
                var value = el[0].value;
                value--;
                if(!min || value >= min) {
                    el[0].value = value;
                }
            }

            function increment2() {
                var value = el[0].value;
                value++;
                if(!max || value <= max) {
                    el[0].value = value++;
                }
            }
        }
    }
})();

inputNumber2($('.input-number2'));

$(function(){
    $(".register").on("click", function(){
        $('#exampleModal-2').modal('hide');

    });
});

$(function(){
    $(".signin").on("click", function(){

        $('#exampleModal-3').modal('hide');
    });
});

$('.accordion a').on('click', function() {
    $(this).toggleClass('active');
    if($(this).hasClass('active')) {
        $(this).next().addClass('active');
    } else {
        $(this).next().removeClass('active');
    }
});

$(function() {
    $('body').css({
        'padding-top': $('.menu-wrapp').height() + 80
    });
    $(window).resize(function() {
        $('body').css({
            'padding-top': $('.menu-wrapp').height() + 80
        });
    });
});


$(function() {
    $('body').css({
        'padding-top': $('.home-menu-wrap').height()
    });
    $(window).resize(function() {
        $('body').css({
            'padding-top': $('.home-menu-wrap').height()
        });
    });
});