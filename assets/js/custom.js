$(function() {


    // ========================================================================= //
    //      [ Typed Js ]
    // ========================================================================= //


    'use strict';
    var typed = new Typed('#typed-slide-1', {
        strings: ['Quiet Innovator', 'Backend Engineer' , 'API Builder' ,'GCP DevOps Engineer' , 'Life Long Learner'],
        typeSpeed: 60,
        backSpeed: 60,
        loop: true
    });

    


    // ========================================================================= //
    //      [ To top Bottom ]
    // ========================================================================= //


    var scrollToTopButton = document.getElementById('js-top'),
        scrollFunc = () => {
            let y = window.scrollY;

            if (y > 0) {
                scrollToTopButton.className = "top-link show";
            } else {
                scrollToTopButton.className = "top-link hide";
            }
        };
    window.addEventListener("scroll", scrollFunc);

    const scrollToTop = () => {
        const c = document.documentElement.scrollTop || document.body.scrollTop;


        if (c > 0) {
            window.requestAnimationFrame(scrollToTop);
            window.scrollTo(0, c - c / 10);
        }
    };

    scrollToTopButton.onclick = function(e) {
        e.preventDefault();
        scrollToTop();
    }


    // ========================================================================= //
    //      [ Smoh Scroll ]
    // ========================================================================= //


    $('a[href*="#"]:not([href="#"])').on('click', function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').stop().animate({
                    scrollTop: target.offset().top - 69 
                }, 900);
                return false;
            }
        }
    });


    // ========================================================================= //
    //      [ Cursor Animation ]
    // ========================================================================= //


    'use strict';
    const cursor = document.querySelector('.cursor');

    document.addEventListener('mousemove', e => {
        cursor.setAttribute("style", "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;")
    })

    document.addEventListener('click', () => {
        cursor.classList.add("expand");

        setTimeout(() => {
            cursor.classList.remove("expand");
        }, 500)
    })


    // ========================================================================= //
    //      [ Navbar ]
    // ========================================================================= //


    var header = $(".navfixed, .nav-styletwo");

    $(window).on('scroll', function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 50) {
            header.addClass("scrolled");
        } else {
            header.removeClass("scrolled");
        }
    });

    /* Navbar style Two */

    $(".nav-styletwo .navbar .menu-toggle").on("click", function() {
        $(".nav-styletwo .navbar").toggleClass("menu-active");
    });


    // ========================================================================= //
    //      [ Navbar Menu Exit in click ]
    // ========================================================================= //


    var overlayNav = $('.cd-overlay-nav'),
        overlayContent = $('.cd-overlay-content'),
        navigation = $('.cd-primary-nav'),
        toggleNav = $('.cd-nav-trigger');


    $(".navbar-wrapper .mainmenunav .navbar .navbar-collapse li .nav-link").on("click", function() {

        toggleNav.removeClass('close-nav');
        $("body").css('overflow-y', 'scroll');

        overlayContent.children('span').velocity({
            translateZ: 0,
            scaleX: 1,
            scaleY: 1,
        }, 500, 'easeInCubic', function() {
            navigation.removeClass('fade-in');
            overlayNav.children('span').velocity({
                translateZ: 0,
                scaleX: 0,
                scaleY: 0,
            }, 0);

            overlayContent.addClass('is-hidden').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function() {
                overlayContent.children('span').velocity({
                    translateZ: 0,
                    scaleX: 0,
                    scaleY: 0,
                }, 0, function() {
                    overlayContent.removeClass('is-hidden')
                });
            });
            if ($('html').hasClass('no-csstransitions')) {
                overlayContent.children('span').velocity({
                    translateZ: 0,
                    scaleX: 0,
                    scaleY: 0,
                }, 0, function() {
                    overlayContent.removeClass('is-hidden')
                });
            }
        });

    });


    // ========================================================================= //
    //      [ Skills Coounter ]
    // ========================================================================= //

    function skillsProgress() {
        var skills = {
          "terraform": "85%",
          "python": "90%",
          "go": "80%",
          "docker": "75%",
          "kubernetes": "70%",
          "flutter": "80%"
        };
      
        var multiply = 2;
        var delay = 600;
      
        $.each(skills, function(language, targetPercent) {
          setTimeout(function() {
            $('#progress-' + language).animate(
              { 'width': targetPercent },
              {
                duration: 2000, // 2 seconds animation
                step: function(now) {
                  $('#progress-text-' + language).css({ 'font-weight': 'bold', 'color': 'white' });
                  $('#progress-text-' + language).text(Math.floor(now) + "%");
                },
                complete: function() {
                  $('#progress-text-' + language).css({ 'font-weight': 'bold', 'color': 'white' });
                  $('#progress-text-' + language).text(targetPercent);
                }
              }
            );
          }, delay * multiply);
          multiply++;
        });
      }
      
      if ($(window).scrollTop() >= $("#about").offset().top - 200) {
        skillsProgress();
      }
      
      $(window).on("scroll", function() {
        if ($(window).scrollTop() >= $("#about").offset().top - 200) {
          skillsProgress();
        }
      });
      
      if ($(window).scrollTop() >= $("#about").offset().top - 200) {
        skillsProgress();
      }
      
      $(window).on("scroll", function() {
        if ($(window).scrollTop() >= $("#about").offset().top - 200) {
          skillsProgress();
        }
      });

    $('a[href="#page2"]').on('click', function() {
        skillsProgress();
    });


    // ========================================================================= //
    //      [ Counter ]
    // ========================================================================= //


    var a = 0;
    $(window).on('scroll', function() {

        var oTop = $('#counter').offset().top - window.innerHeight;
        if (a == 0 && $(window).scrollTop() > oTop) {
            $('.counter-value').each(function() {
                var $this = $(this),
                    countTo = $this.attr('data-count');
                $({
                    countNum: $this.text()
                }).animate({
                        countNum: countTo
                    },

                    {
                        duration: 7000,
                        easing: 'swing',
                        step: function() {
                            $this.text(Math.floor(this.countNum));
                        },
                        complete: function() {
                            $this.text(this.countNum);
                        }

                    });
            });
            a = 1;
        }

    });

});


// ========================================================================= //
//      [ Full page ]
// ========================================================================= //


function fadeOut() {

    TweenMax.to(".myBtn", 1, {
        y: -100,
        opacity: 0

    });

    TweenMax.to(".screen", 2, {
        y: -400,
        opacity: 0,
        ease: Power2.easeInOut,
        delay: 2

    });

    TweenMax.from(".overlay-1", 2, {
        ease: Power2.easeInOut,

    });

    TweenMax.to(".overlay-1", 2, {
        delay: 2.6,
        top: "-110%",
        ease: Expo.easeInOut,
    });

    TweenMax.to(".overlay-2", 2, {
        delay: 3,
        top: "-110%",
        ease: Expo.easeInOut,

    });


    TweenMax.from(".content", 2, {
        delay: 3.2,
        opacity: 0,
        ease: Power2.easeInOut,

    });

    TweenMax.to(".content", 2, {
        opacity: 1,
        y: 0,
        delay: 3.2,
        ease: Power2.easeInOut,

    });

    TweenMax.to("body", 2, {
        'overflow-y': 'scroll',
        delay: 4,
        ease: Power2.easeInOut,

    });

}


// ========================================================================= //
//      [ Option Box & Color Change ]
// ========================================================================= //


$('.sidebaricon').on('click', function() {
    $('.sidebar-contet').toggleClass('active')
    $('.sidebaricon').toggleClass('active')
    $('.btn-purchase').toggleClass('active')
})

$(".list-color li span").on("click", function() {
    $("link[href*='color']").attr("href", "assets/css/main/skins/" + $(this).data('color') + "_color.css");
});


$(".list-bg-color li a").on("click", function() {
    $(this).addClass("active").parent().siblings().find("a").removeClass("active");
});


$(".light .cd-nav-trigger").on("click", function() {
    $(".navbar-wrapper .navfixed").toggleClass("nav-open");
});


// ========================================================================= //
//      [ Navbar ( scrollIt ) ]
// ========================================================================= //

$.scrollIt({
    upKey: 38, // key code to navigate to the next section
    downKey: 40, // key code to navigate to the previous section
    easing: 'swing', // the easing function for animation
    scrollTime: 600, // how long (in ms) the animation takes
    activeClass: 'active', // class given to the active nav element
    onPageChange: null, // function(pageIndex) that is called when page is changed
    topOffset: -70 // offste (in px) for fixed top navigation
});


// ========================================================================= //
//      [ Burger menu ]
// ========================================================================= //


$(".dl-burger-menu").on("click", function() {
    $(this).toggleClass("dl-menu-open");
    $(".dl-fixed-sidebar.dl-sidebar-left").toggleClass("active");
});


// ========================================================================= //
//      [ Sidebar NiceScroll ]
// ========================================================================= //


$(window).on("scroll", function() {
    $("body .dl-side-content > div").each(function() {
        if ($(window).scrollTop() >= $(this).offset().top - 70) {
            $(".dl-fixed-sidebar .dl-menu-fixed ul li a[href='#" + $(this).attr("id") + "']").addClass("active").parent().siblings().find("a").removeClass("active");
        }
    });
});


// ========================================================================= //
//      [ Show Hide Menu ]
// ========================================================================= //


$('.sq-price').hide();
$('.none-sq-price').show();
$(".list-change-menu li span").on("click", function() {
    $(this).addClass("active").parent().siblings().find("span").removeClass("active");
    if ($(this).hasClass("right")) {
        $('.none-sq-price').hide();
        $('.sq-price').show(100);
    } else

    if ($(this).hasClass("overlay")) {
        $('.sq-price').hide();
        $('.none-sq-price').show(100);
    }
});


// ========================================================================= //
//   
// ========================================================================= //


$(".overlay-1 .intro .myBtn").on('click', function() {
    setTimeout(function() {
        $('<script src="assets/js/skillscounter.js"></script>').insertAfter('script[src="assets/js/custom.js "]');
    }, 5000);
});

$(".overlay-1 .intro .myBtn").on('click', function() {
    $("html, body").animate({
        scrollTop: 0
    }, 600);
});


// ========================================================================= //
//   Resume info / ICON CONTENT BLOCK
// ========================================================================= //


$('#resume .resume-info').mouseenter(function() {
    $('.selected').removeClass('selected').addClass('resume resume-info');
    $(this).removeClass('resume .resume-info').addClass('selected');
});


// ========================================================================= //
//   Swipper js Add Class Full heigh
// ========================================================================= //


$('#pp-nav ul li a').on('click', function() {
    $("body").removeClass("full-height");
});

$('#pp-nav ul li a[href="#myPortfolio"]').on('click', function() {
    $("body").addClass("full-height");
});


// ========================================================================= //
//   Contact Form
// ========================================================================= //


$('.contact-form').on("submit", function() {

    var myForm = $(this),
        data = {};

    myForm.find('[name]').each(function() {

        var that = $(this),
            name = that.attr('name'),
            value = that.val();

        data[name] = value;

    });

    $.ajax({

        url: myForm.attr('action'),
        type: myForm.attr('method'),
        data: data,
        success: function(response) {

            if (response == "success") {

                $(".contact-form").find(".form-message").addClass("success");
                $(".form-message span").text("Message Sent!");

            } else {

                $(".contact-form").find(".form-message").addClass("error");
                $(".form-message span").text("Error Sending!");

            }
        }

    });

    return false;

});





// ========================================================================= //
//   Alert
// ========================================================================= //


function animar() {

    document.getElementById("mce-responses").classList.remove("esconder");
}


document.getElementById("mc-embedded-subscribe").onclick = function() {
    animar();
};

function close() {

    document.getElementById("mce-responses").classList.add("esconder");
}


document.getElementById("close").onclick = function() {
    close();
};

document.getElementById("close").onclick = function() {
    close();
};



/* ================================= */
/* :::::::: 8. Ajax mailchimp :::::: */
/* ================================= */

//     Example MailChimp url: http://xxx.xxx.list-manage.com/subscribe/post?u=xxx&id=xxx
$('#subscribe').ajaxChimp({
    language: 'eng',
    url: 'https://uxign.us18.list-manage.com/subscribe/post?u=88b2522a6203591b597a7e4e6&amp;id=1291144d60'
});

// Mailchimp translation
//
// Defaults:
//'submit': 'Submitting...',
//  0: 'We have sent you a confirmation email',
//  1: 'Please enter a value',
//  2: 'An email address must contain a single @',
//  3: 'The domain portion of the email address is invalid (the portion after the @: )',
//  4: 'The username portion of the email address is invalid (the portion before the @: )',
//  5: 'This email address looks fake or invalid. Please enter a real email address'

$.ajaxChimp.translations.eng = {
    'submit': '<i class="ion-ios-paperplane-outline submitting"></i> Sending...',
    0: '<i class="ion-ios-star-outline"></i> Great! You will receive notification from us soon :)',
    1: '<i class="ion-ios-close-outline"></i> You must enter a valid e-mail address.',
    2: '<i class="fa fa-warning"></i> Sorry, but your E-mail address is not valid.',
    3: '<i class="fa fa-warning"></i> Sorry, but your E-mail address is not valid.',
    4: '<i class="fa fa-warning"></i> Sorry, but your E-mail address is not valid.',
    5: '<i class="fa fa-warning"></i> Sorry, but your E-mail address is not valid.',
};