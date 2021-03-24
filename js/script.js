(function($) {
    "use strict";
    let v = document.getElementById("video")

    // $('.ham').click(function(e){
    //     e.preventDefault()
    //     $('.ham').toggleClass("is-active");
    //     $('.menu').toggleClass("_active");
    //     $('.menuBg').toggleClass("_active");
    //     $('.menuWrapper').toggleClass("_active");
    // });

    $('.smoothScroll').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000); // The number here represents the speed of the scroll in milliseconds
                return false;
            }
        }
    });


})(jQuery);