$(document).ready(function(){

	//phone masked
	$('input[type="tel"]').mask("+7 (999) 999-99-99",{placeholder:"+7 (___) ___-__-__"});
	$('input[type="tel"]').on('click', function() {
		$(this).setCursorPosition(4);
	})
	$.fn.setCursorPosition = function(pos) {
	  this.each(function(index, elem) {
	    if (elem.setSelectionRange) {
	      elem.setSelectionRange(pos, pos);
	    } else if (elem.createTextRange) {
	      var range = elem.createTextRange();
	      range.collapse(true);
	      range.moveEnd('character', pos);
	      range.moveStart('character', pos);
	      range.select();
	    }
	  });
	  return this;
	};
    
	
    //popup block
	$('.js-popup-wrap .js-btn-toggle').on('click', function() {
		if ($(this).hasClass('active')) {
			$(this).removeClass('active');
			$('body').removeClass('menu-show');
		} else {
			$('.js-popup-wrap:not(.no-close) .js-btn-toggle').removeClass('active');
			$(this).addClass('active');
			if ($(this).parent().hasClass('main-menu-wrap')) {
				$('body').addClass('menu-show');
			}
		}
		return false;
	})
	$('.js-popup-wrap .js-btn-close').on('click', function() {
		$(this).parents('.js-popup-wrap').children('.js-btn-toggle').removeClass('active');
		$('body').removeClass('menu-show');
		return false;
	})
	$(document).click(function(event) {
	    if ($(event.target).closest(".js-popup-block").length) return;
	    $('.js-popup-wrap:not(.no-close) .js-btn-toggle').removeClass('active');
	    $('body').removeClass('menu-show');
	    event.stopPropagation();
	});
	$('.js-popup-wrap').each(function() {
		if ($(this).hasClass('js-popup-select')) {
			// alert(1)
			if ($(this).find('.js-popup-block').find('.active').length>0) {} else {
				$(this).find('.js-popup-block').find('li').eq(0).children('a').addClass('active');
			}
			var currentSelect = $(this).find('.js-popup-block').find('.active').html();
			$(this).find('.js-btn-toggle').html(currentSelect);
		}
	})
	$('.js-popup-wrap.js-popup-select .js-popup-block a').on('click', function() {
		if ($(this).hasClass('active')) {} else {
			$(this).parents('.js-popup-wrap').find('.js-popup-block').find('.active').removeClass('active');
			$(this).addClass('active');
		}
		$('.js-popup-wrap').each(function() {
			if ($(this).hasClass('js-popup-select')) {
				if ($(this).find('.js-popup-block').find('.active').length>0) {} else {
					$(this).find('.js-popup-block').find('li').eq(0).children('a').addClass('active');
				}
				var currentSelect = $(this).find('.js-popup-block').find('.active').html();
				$(this).find('.js-btn-toggle').html(currentSelect);
			}
		})
		$(this).parents('.js-popup-wrap').find('.js-btn-toggle').removeClass('active');
		return false;
	})

	//tabs
	$('.js-tabs-nav').each(function() {
		$('.js-tab-block[data-tab*="'+$(this).find('.active').attr('data-tab')+'"]').addClass('active');
	})
	$('.js-tab-title').each(function() {
		if ($(this).hasClass('active')) {
			$(this).next('.js-tab-content').show(0);
		}
	})
	$('.js-tabs-nav li a').on('click', function() {
		if ($(this).hasClass('active')) {} else {
			$('.js-tab-block').removeClass('active');
			$(this).parents('.js-tabs-nav').find('.active').removeClass('active');
			$(this).addClass('active');
			$('.js-tabs-nav').each(function() {
				$('.js-tab-block[data-tab*="'+$(this).find('.active').attr('data-tab')+'"]').addClass('active');
			})
		}
		return false;
	})
	$('.js-tab-title').on('click' , function() {
		if ($(this).hasClass('active')) {
			$(this).removeClass('active').next('.js-tab-content').slideUp(200);
		} else {
			$(this).addClass('active').next('.js-tab-content').slideDown(200);
		}
	})



    //frm counter   
    $('.js-counter .js-button-counter-minus').on('click', function () {
        var cnt = $(this).parents('.js-counter').find('.js-input-counter').val();
        cnt = parseInt(cnt);
        if (cnt > 0) {
            $(this).parents('.js-counter').find('.js-input-counter').val(cnt - 1);
        }
        return false;
    })
    $('.js-counter .js-button-counter-plus').on('click', function () {
        var cnt = $(this).parents('.js-counter').find('.js-input-counter').val();
        $(this).parents('.js-counter').find('.js-input-counter').val(cnt - 1 + 2);
        return false;
    })


    //mobile menu
    $('.js-menu-wrap li ul').each(function () {
        $(this).parent().addClass('submenu');
    })
    $('.js-menu-wrap li a').on('click', function () {
        if ($(this).next('ul').length > 0) {
            if ($(window).innerWidth() < 1024) {
                if ($(this).parent().hasClass('open')) {
                    $(this).parent().removeClass('open').children('ul').slideUp(200);
                } else {
                    $('.js-menu-wrap li.open').removeClass('open').children('ul').slideUp(200);
                    $(this).parent().addClass('open').children('ul').slideDown(200);
                }
                return false;
            }
        }
    })
    
    
    //more
    $('.side-menu-box.menu-open').each(function() {
        $(this).find('.menu-hidden').slideDown(0);
    })
    $('.side-menu-box .menu-more a').on('click', function() {
        if ($(this).parents('.side-menu-box').hasClass('menu-open')) {
            $(this).parents('.side-menu-box').removeClass('menu-open').find('.menu-hidden').slideUp(200);
        } else {
            $(this).parents('.side-menu-box').addClass('menu-open').find('.menu-hidden').slideDown(200);
        }
        return false;
    })
    $('.filter-section-wrap.section-open').each(function() {
        $(this).find('.filter-section-content').slideDown(0);
    })
    $('.filter-section-wrap .filter-section-title').on('click', function() {
        if ($(this).parents('.filter-section-wrap').hasClass('section-open')) {
            $(this).parents('.filter-section-wrap').removeClass('section-open').find('.filter-section-content').slideUp(200);
        } else {
            $(this).parents('.filter-section-wrap').addClass('section-open').find('.filter-section-content').slideDown(200);
        }
        return false;
    })
    $('.filter-section-wrap.section-show').each(function() {
        $(this).find('.filter-section-hidden').slideDown(0);
    })
    $('.filter-section-wrap .filter-section-more a').on('click', function() {
        if ($(this).parents('.filter-section-wrap').hasClass('section-show')) {
            $(this).parents('.filter-section-wrap').removeClass('section-show').find('.filter-section-hidden').slideUp(200);
        } else {
            $(this).parents('.filter-section-wrap').addClass('section-show').find('.filter-section-hidden').slideDown(200);
        }
        return false;
    })
    
    //filter toggle
    $('.js-filter-toggle').on('click', function() {
        $('.filter-box .js-btn-toggle').toggleClass('active');
        return false;
    })
    
    //popup
    let popupShow;
    $('.js-popup-show').on('click', function() {
        clearTimeout(popupShow);
        let dataPopup = $(this).attr('data-popup');
        $('.js-popup[data-popup="'+dataPopup+'"]').addClass('active');
        if ($(this).hasClass('popup-short')) {
            popupShow = setTimeout(function() {
                $('.js-popup[data-popup="'+dataPopup+'"]').removeClass('active');
            }, 5000)
        }
        return false;
    })
    
    
    //tooltip
    $(document).tooltip({
        items: ".js-tooltip",
        content: function() {
            var element = $( this );
            if ( element.is( ".js-tooltip" ) ) {
                return $(this).find('.tooltip-popup-wrap').clone();
            }
        }
    })
    
    //header location
    $('.header .action-menu .location-wrap .location-link').on('click', function() {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active').next('.location-content-block').slideUp(200);
        } else {
            $(this).addClass('active').next('.location-content-block').slideDown(200);
        }
        return false;
    })
    
    //filter result
    let filterResult;
    let filterResultTop;
    $('.filter-box .frm-select').on('click', function() {
        clearTimeout(filterResult);
        filterResultTop = $(this).offset().top - $('.filter-box').offset().top;
        $('.filter-box .btn-action-result').css('top', filterResultTop).addClass('active');
        filterResult = setTimeout(function() {
            $('.filter-box .btn-action-result').removeClass('active');
        }, 5000)
    })
    
    //catalog
    $('.item-catalog.active .cat-content-wrap').show(0);
    $('.catalog-box').each(function() {
        if ($(this).find('.item-catalog.active').length>0) {
            $(this).addClass('active');
        }
    })
    $('.catalog-box .item-catalog .cat-title-wrap .btn-action-arr').on('click', function() {
        if ($(this).parents('.item-catalog').hasClass('active')) {
            $(this).parents('.item-catalog').removeClass('active').parents('.catalog-box').removeClass('active');
            $(this).parents('.item-catalog').find('.cat-content-wrap').slideUp(200);
        } else {
            $(this).parents('.catalog-box').addClass('active').find('.item-catalog.active').removeClass('active').find('.cat-content-wrap').slideUp(200);
            $(this).parents('.item-catalog').addClass('active');
            $(this).parents('.item-catalog').find('.cat-content-wrap').slideDown(200);
        }
        return false;
    })


    //main-slider-box
    if (!!$('.main-slider-box').offset()) {
        $('.main-slider-box .slider').slick({
            dots: true,
            slidesToShow: 1,
            variableWidth: false,
            infinite: false,
            autoplay: true,
            autoplaySpeed: 5000,
            adaptiveHeight: true,
            prevArrow: false,
            nextArrow: false,
        });
        $('.main-slider-box .slider').on('afterChange', function (event, slick, currentSlide, nextSlide) {
            $('.main-slider-box .slick-slide:not(.slick-active) .item-animation').removeClass('item-active');
            $('.main-slider-box .slick-slide.slick-active .item-animation').addClass('item-active');
        })
    }


    //main-news-box
    if (!!$('.main-news-box').offset()) {
        $('.main-news-box .slider').slick({
            dots: true,
            slidesToShow: 3,
            variableWidth: false,
            infinite: false,
            adaptiveHeight: true,
            prevArrow: false,
            nextArrow: false,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                    }
                },
            ]
        });
    }


    //main-projects-box
    if (!!$('.main-projects-box').offset()) {
        $('.main-projects-box .slider').slick({
            dots: true,
            slidesToShow: 5,
            variableWidth: false,
            infinite: false,
            adaptiveHeight: true,
            prevArrow: false,
            nextArrow: false,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 4,
                    }
                },
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                    }
                },
            ]
        });
    }


    //card-photos-wrap
    if (!!$('.card-photos-wrap').offset()) {
        $('.card-photos-wrap .slider').slick({
            dots: true,
            slidesToShow: 1,
            variableWidth: false,
            infinite: false,
            adaptiveHeight: false,
            prevArrow: false,
            nextArrow: false,
        });
    }


    //#range-slider
    if (!!$('#range-slider').offset()) {
        $('#range-slider').slider({
            range: true,
            min: 0,
            max: 2000000,
            values: [66, 1028400],
            slide: function (event, ui) {
                $('#range-slider-min').val(ui.values[0]);
                $('#range-slider-max').val(ui.values[1]);
            }
        })
        $('#range-slider-min').val($('#range-slider').slider('values', 0));
        $('#range-slider-max').val($('#range-slider').slider('values', 1));
        $('#range-slider-min').bind('focusout', function () {
            if ($(this).val() > $('#range-slider').slider('values', 1)) {
                $(this).val($('#range-slider').slider('values', 0));
            }
            $('#range-slider').slider('values', 0, $(this).val());
        })
        $('#range-slider-max').bind('focusout', function () {
            if ($(this).val() < $('#range-slider').slider('values', 0)) {
                $(this).val($('#range-slider').slider('values', 1));
            }
            $('#range-slider').slider('values', 1, $(this).val());
        })
        $('#range-slider-min').bind('keypress', function (e) {
            if (e.keyCode == 13) {
                if ($(this).val() > $('#range-slider').slider('values', 1)) {
                    $(this).val($('#range-slider').slider('values', 0));
                }
                $('#range-slider').slider('values', 0, $(this).val());
            }
        })
        $('#range-slider-max').bind('keypress', function (e) {
            if (e.keyCode == 13) {
                if ($(this).val() < $('#range-slider').slider('values', 0)) {
                    $(this).val($('#range-slider').slider('values', 1));
                }
                $('#range-slider').slider('values', 1, $(this).val());
            }
        })
    }
    $('#widget').draggable();
    
	
});


$(window).on('load', function () {
    //animation
    var sTop = $(window).scrollTop() + $(window).innerHeight();
    $('.item-animation.item-animation-scroll').each(function () {
        if ($(this).offset().top < sTop) {
            $(this).addClass('item-active');
        }
    })
    $('.item-animation-start').each(function () {
        $(this).addClass('item-active');
    })

    $(window).scroll(function () {
        var sTop = $(window).scrollTop() + $(window).innerHeight();
        $('.item-animation.item-animation-scroll').each(function () {
            if ($(this).offset().top < sTop) {
                $(this).addClass('item-active')
            }
        })
    });
});