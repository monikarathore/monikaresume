$(document).ready(function() {
	$(document).on('click touchend', '.monika-link-techniques', function(event) {
		event.stopPropagation();
		$('.monika-techniques').slideDown('slow');
		//$('.monika-techniques').addClass('fadeUp');
		$('.monika-link-techniques-hide').show();
		$('.monika-link-techniques').hide();
	});
	$(document).on('click touchend', '.monika-link-techniques-hide', function(event) {
		event.stopPropagation();
		//$('.monika-techniques').toggleClass('fadeOutLeft');
		//$('.monika-techniques').removeClass('fadeUp');
		$('.monika-techniques').slideUp('slow');
		$('.monika-link-techniques-hide').hide();
		$('.monika-link-techniques').show();
	});

	$(document).on('click touchend', '.skills', function(e) {
		$('.skillsLeft').removeClass('fadeOutLeft');
		$('.skillsLeft').addClass('fadeInLeft');
		$('.skillsLeft').show();
		$(this).addClass('active');
	});
	$(document).on('click touchend', '.backlink', function(e) {
		$('.skillsLeft').addClass('fadeOutLeft');
		$('.skillsLeft').removeClass('fadeInLeft');
		$('.skills').removeClass('active');
	});
	$(document).on('click touchend', '.scrollTopCLick', function(e) {
		 $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
	});
});

$(window).load(function () {
	setTimeout(function(){
		$('#loadmask').hide();
	}, 2000);
});


// on scroll sticky header
function animation(){
	if ($(window).scrollTop() > 100){
		$('#tech-header').addClass("fixed-tech");
	}
	else{
		$('#tech-header').removeClass("fixed-tech");
	}
}

$(window).scroll(function(){
	animation();
});
// on scroll sticky header