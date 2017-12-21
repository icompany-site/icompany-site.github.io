$(document).ready(function(){

    // anchor nav
    $(window).scroll(function () {
        var scrollDistance = $(window).scrollTop();

        $('section').each(function (i) {
            if ($(this).position().top - 51 <= scrollDistance) {
                $('a[href*="#"]:not([href="#"]).active').removeClass('active');
                $('a').eq(i).addClass('active');
            }
        });

    }).scroll();

    $(function () {
        $('a[href*="#"]:not([href="#"])').click(function () {
            if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top - 1
                    }, 500);
                    return false;
                }
            }
        });
    });

    // aos init
    if ($(window).width() > 750) {
        AOS.init();
    }

    if ($(window).width() < 750) {
        $('section, div, footer').removeAttr('data-aos');
    }
});
