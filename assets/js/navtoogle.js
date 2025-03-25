jQuery(document).ready(function ($) {
    var overlayNav = $('.cd-overlay-nav'),
        overlayContent = $('.cd-overlay-content'),
        navigation = $('.cd-primary-nav'),
        toggleNav = $('.cd-nav-trigger');

    layerInit();
    $(window).on('resize', function () {
        window.requestAnimationFrame(layerInit);
    });

    toggleNav.on('click', function (event) {
        event.preventDefault();
        if (!toggleNav.hasClass('close-nav')) {
            // Open navigation
            toggleNav.addClass('close-nav');
            navigation.addClass('fade-in');
            $('body').addClass('overflow-hidden');
        } else {
            // Close navigation
            toggleNav.removeClass('close-nav');
            navigation.removeClass('fade-in');
            $('body').removeClass('overflow-hidden');
        }
    });

    function layerInit() {
        var diameterValue = (Math.sqrt(Math.pow($(window).height(), 2) + Math.pow($(window).width(), 2)) * 2);
        overlayNav.children('span').velocity({
            scaleX: 0,
            scaleY: 0,
            translateZ: 0,
        }, 50).velocity({
            height: diameterValue + 'px',
            width: diameterValue + 'px',
            top: -(diameterValue / 2) + 'px',
            left: -(diameterValue / 2) + 'px',
        }, 0);
    }
});