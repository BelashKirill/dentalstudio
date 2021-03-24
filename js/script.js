$(document).ready(function () {
    var i;
    $('.owl-carousel').owlCarousel({
        loop: false,
        margin: 0,
        nav: false,
        items: 1,
        dots: true,
        autoplay: true,
        startPosition: 0,
        rewind: true,
        autoplayTimeout: 4000,
        onDragged: function (event) {
            i = event.item.index + 1;
            $('.block-slider__num-slide').html('0' + i);
        },
        responsive: {
            0: {
                dots: false
            },
            1199: {
                dots: true
            }
        },
        onTranslate: function(event) {
            i = event.item.index + 1;
            $('.block-slider__num-slide').html('0' + i);
        }
    });
    
    $('.block-top-line__burger').click(function (e) {
        e.preventDefault();
        $('.mobile-menu').css({
            left: 0 + 'px'
        });
    });

    $('.close-menu').click(function (e) {
        e.preventDefault();
        $('.mobile-menu').css({
            left: '-' + 320 + 'px'
        });
    });

    new WOW().init();
});
