let $menuTrigger;

$menuTrigger = $('.menuTrigger');

$menuTrigger.on('click', () => {
	if ($('body').hasClass('menu_open')) {
		$('body').removeClass('menu_open');
		$('.menuTrigger').removeClass('active_mod');
	} else {
		$('body').addClass('menu_open');
		$('.menuTrigger').addClass('active_mod');
	}
});
