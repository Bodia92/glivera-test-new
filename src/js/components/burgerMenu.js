let $menuTrigger;

$menuTrigger = $('.menuTrigger');

$menuTrigger.on('click', () => {
	if ($('body').hasClass('menu_open')) {
		$('body').removeClass('menu_open');
		$(this).removeClass('active_mod');
	} else {
		$('body').addClass('menu_open');
		$(this).addClass('active_mod');
	}
});

const cardBody = document.querySelectorAll('.header_menu');
const planItem = document.querySelectorAll('.header_menu__item');

function addClass(target) {
	if (target.closest('.menu_trigger') || target.classList.contains('header_menu__item')) {
		target.closest('.menu_trigger').classList.toggle('active_mod');
	}
}

function select(e) {
	const targetElement = e.target;
	if (planItem) {
		planItem.forEach(card => {
			addClass(targetElement);
		});
	}
}

document.addEventListener('click', select);
