$(document).ready(function () {
    var $moveHorizontal = $('.triangle-topleft');

    $(window).scroll(function () {
        var s = $(this).scrollTop(),
            d = $(document).height(),
            c = $(this).height();

        scrollPercent = (s / (d - c));

        var position = (scrollPercent * ($(document).width() - $moveHorizontal.width()));
        $moveHorizontal.css({
          transform: 'translateX('+ -position/15 +'%)'
        });
    });
});
