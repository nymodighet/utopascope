window.onunload = function(){};

// preloader
function preloaderFadeOutInit(){
	$('.preloader').fadeOut('slow');
	$('body').attr('id','');
}
// window load function
$(window).on('load', function () {
	(function ($) {
		preloaderFadeOutInit();
	});
});

$(document).ready(function() {
    
    $('body').fadeIn(800);

	// fade-out page navigation
	var $body = $('body');
 
    $('a.right-link').click(function(event){
        event.preventDefault();
        linkLocation = this.href;
	    $('.like-column').css('top', '5.125rem');
        $($body).fadeOut(800, redirectPage); 
        $('.fade-out').addClass('fading-out-right');    
    });

    $('a.left-link').click(function(event){
        event.preventDefault();
        linkLocation = this.href;
	    $('.like-column').css('top', '5.125rem');
        $($body).fadeOut(800, redirectPage); 
        $('.fade-out').addClass('fading-out-left');    
    });

    function redirectPage() {
        window.location = linkLocation;
    }

	// scrolling anchor links
	$('.scroll-link').click(function(event) {
    	event.preventDefault();
    	$('html, body').animate({
        	scrollTop: $($(this).attr("href")).offset().top
        }, 500);
    });

	// slideout mobile menu tray
	var mobileTrayOpener = $('.mobile-launch');
	var trayCloser = $('.tray-close');
	var footerOpener = $('.open-footer-tray');
	var footerCloser = $('.close-footer-tray');

	$(mobileTrayOpener).click(function() {
		openMobileTray();
	});

	$(trayCloser).click(function() {
		closeTray();
	});

	// mobile footer menu
	$('.open-footer-tray').on('click', function() {
		var hiddenFooter = $('.hidden-footer');
		var openButton = $('.open-footer-tray');
		$('#utopascope-footer').toggleClass('footer-opened');
		$(hiddenFooter).toggleClass('revealed-footer');

		var buttonText = $('.open-footer-tray span').text();
		$('.open-footer-tray span').text(
			buttonText == 'More…' ? 'Less…' : 'More…');
	})


	function openMobileTray() {
		$('.mobile-tray').addClass('tray-open');
	}

	function closeTray() {
		$('.mobile-tray').removeClass('tray-open');
	}

});

$(function() {
	$(window).scroll(function() {
		// scroll-triggered logo change
		var scroll = $(window).scrollTop();
		var topLogo = $('.logo-default');
		var bottomLogo = $('.logo-hover');

		if (scroll >= 100) {
			$(topLogo).addClass('logo-sm');
			$(bottomLogo).addClass('logo-sm');
		} else { 
			$(topLogo).removeClass('logo-sm');
			$(bottomLogo).removeClass('logo-sm');
		}
		// scroll-triggered background change
		// temporarily taking this out for review
		// var main = $('main');

		// if (scroll >= 1000) {
		// 	$(main).addClass('white-bg');
		// } else { 
		// 	$(main).removeClass('white-bg');
		// }
	})
});

$(window).scroll(function() {
	//scroll-triggered fade-in and fade-out
	var windowBottom = $(this).scrollTop() + $(this).innerHeight();
	$('.fade').each(function() {

      	var objectBottom = $(this).offset().top + $(this).outerHeight();
      
      	if (objectBottom < windowBottom) { 
        	if ( $(this).not('visible') ) { $(this).addClass('visible'); }
      	} else { 
        	if ( $(this).hasClass('visible') ) { $(this).removeClass('visible'); }
      	}
	});
}).scroll();