(function() {
	// banner
	var bannerIndex = 0;
	var banner = new Swiper('.banner', {
		autoplayDisableOnInteraction: false,
		autoplay: 5000,
		loop: true,
	    on: {
			slideChangeTransitionEnd() {
				bannerIndex = this.realIndex;
			}
		},
		a11y: {
			prevSlideMessage: 'Previous slide',
			nextSlideMessage: 'Next slide',
			firstSlideMessage: 'This is the first slide',
			lastSlideMessage: 'This is the last slide',
			paginationBulletMessage: 'Go to slide ' + (bannerIndex + 1),
			notificationClass: 'swiper-notification',
			containerMessage: 'This is a swiper',
			containerRoleDescriptionMessage: 'banner', //aria-role-description
			itemRoleDescriptionMessage: 'slider',
		}
	});
	
	var index;
	$('.nav-item').on('click', function() {
		index = $(this).index();
		
		$('.nav-item').removeClass('nav-item_active');
		$(this).addClass('nav-item_active');
		$('.nav-content').hide();
		
		if(index == 3) {
			$('.nav-content').eq(1).show();
		} else {
			$('.nav-content').eq(0).show();
		}
	});
	
	// 下拉框
	$('.select-drop-downListItem').on('click', function() {
		$('.select-drop-downList').attr('style', 'display:none;');
		$('.bottom-arrow-icon').attr('style', 'transform:rotate(0deg);');
		
		event.stopPropagation();
	});
	
	$('.select, .select-2').on('click', function() {
		var display = $('.select-drop-downList').css('display');
		
		if(display === 'none') {
			$('.select-drop-downList').attr('style', '');
			$('.bottom-arrow-icon').attr('style', '');
		}
	});
})(window, document);