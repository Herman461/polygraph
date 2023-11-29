
$('.item-study__images').each(function() {
    $(this).slick({
        slidesToShow: 1,
        dots: true,
        arrows: false,
    });
})
$('.stories__items').on('init reInit afterChange', function(event, slick, currentSlide, nextSlide) {

    var i = (currentSlide ? currentSlide : 0) + 1;
    $('.item-stories__fraction').html('<span>' + i + '</span>/' + slick.slideCount);
  });

$('.stories__items').slick({
    slidesToShow: 3,
    centerMode: true,
    centerPadding: '0',
    arrows: false,
    responsive: [
        {
            breakpoint: 991.98,
            settings: {
              slidesToShow: 1,
              dots: true
            }  
        }

    ]
})

$('.item-stories__button-prev').click(function() {
    $('.stories__items').slick("slickPrev")
})
$('.item-stories__button-next').click(function() {
    $('.stories__items').slick("slickNext")
})



$(window).scroll(fixHeader)

fixHeader()
function fixHeader() {
    if ($(this).scrollTop() > 10 && !$('.header').hasClass('active')) {
        $('.header').addClass('active')
    }
    if ($(this).scrollTop() <= 0 && $('.header').hasClass('active')) {
        $('.header').removeClass('active')
    }
}


$('.reviews__body').slick({
    slidesToShow: 2,
    prevArrow: $('.reviews .button-prev'),
    nextArrow: $('.reviews .button-next'),
    responsive: [
        {
            breakpoint: 767.98,
            settings: {
              slidesToShow: 1,
              dots: true
            }  
        }

    ]
})
$('.slider_first .slider__items').slick({
    slidesToShow: 2,
    prevArrow: $('.slider_first .button-prev'),
    nextArrow: $('.slider_first .button-next'),
    responsive: [
        {
            breakpoint: 767.98,
            settings: {
              slidesToShow: 1,
              dots: true
            }  
        }

    ]
})

$('.slider_second .slider__items').slick({
    slidesToShow: 4,
    prevArrow: $('.slider_second .button-prev'),
    nextArrow: $('.slider_second .button-next'),

    responsive: [
        {
            breakpoint: 1080.98,
            settings: {
              slidesToShow: 3,

            }  
        },
        {
            breakpoint: 800.98,
            settings: {
              slidesToShow: 2,

            }  
        },
        {
            breakpoint: 767.98,
            settings: {
              slidesToShow: 1,
              dots: true,
            }  
        }

    ]
})

$('.slider_third .slider__items').slick({
    slidesToShow: 4,
    prevArrow: $('.slider_third .button-prev'),
    nextArrow: $('.slider_third .button-next'),

    responsive: [
        {
            breakpoint: 1080.98,
            settings: {
              slidesToShow: 3,

            }  
        },
        {
            breakpoint: 800.98,
            settings: {
              slidesToShow: 2,

            }  
        },
        {
            breakpoint: 767.98,
            settings: {
              slidesToShow: 1,
              dots: true,
            }  
        }

    ]
})

$('.header__burger').click(function() {
    $('.header__menu').addClass('active')
    $(document.body).addClass('lock')
})
$('.menu__close').click(function() {
    $('.header__menu').removeClass('active')
    $(document.body).removeClass('lock')
})


$('a[href^="#"]').click(function() {
    const anchor = $(this).attr('href')
    let offset = 80

    if ($(window).width() < 991.98) {
        offset = 60

        if ($('.menu').hasClass('active')) {
            $('.menu').removeClass('active')
            $(document.body).removeClass('lock')
        }
        
    }
    $('.menu__item, .submenu__item, .menu-footer__item').each(function() {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active')
        }
    })

    $(this).closest('li').addClass('active')

    $('html, body').animate({ 
        scrollTop:  $(anchor).offset().top - 80
    }, 600)
});

if ($('.menu__item_submenu').length > 0) {
    $('.menu__item_submenu').mouseenter(function() {
        const submenu = $(this).children().eq(1)
        $(submenu).addClass('active')
    })

    $('.menu__item_submenu').mouseleave(function() {
        const submenu = $(this).children().eq(1)
        $(submenu).removeClass('active')
    })
}

$('.submenu__item a').click(function() {
    $(this).closest('.submenu').removeClass('active')
})