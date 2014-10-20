document.addEventListener('DOMContentLoaded', function() {


	// Global Variables
	// ----------------------------------------------------------------------------

	// --- Objects and Initial Setup --- \\

	// common objects
	var elBody       = document.body,
		elNavOpen    = document.getElementById('nav_open'),
		elNavClose   = document.getElementById('nav_close');


	// onPageLoad: Main Function To Fire on Window Load
	// ----------------------------------------------------------------------------
	function onPageLoad() {



	}


	// Navigation: Click Open and Close
	// ----------------------------------------------------------------------------
	function navToggle() {

		elNavOpen.addEventListener('click', function(e) {

			elBody.setAttribute('data-nav', 'active');

			e.preventDefault();

		}, false);

		elNavClose.addEventListener('click', function(e) {

			elBody.setAttribute('data-nav', 'inactive');

			e.preventDefault();

		}, false);

	}

/*
			if (elBody.className == 'active') { // .className.match(/(?:^|\s)MyClass(?!\S)/)
				this.className = '';
			} else {
				this.className = 'active';
			}
*/


	// Helper: Fire Window Resize Event Upon Finish
	// ----------------------------------------------------------------------------
	var waitForFinalEvent = (function() {

		var timers = {};

		return function(callback, ms, uniqueId) {

			if (!uniqueId) {
				uniqueId = 'beefchimi'; // Don't call this twice without a uniqueId
			}

			if (timers[uniqueId]) {
				clearTimeout(timers[uniqueId]);
			}

			timers[uniqueId] = setTimeout(callback, ms);

		};

	})();


	// Window Events: On - Scroll, Resize
	// ----------------------------------------------------------------------------
/*
	window.addEventListener('resize', function(e) {

		// do not fire resize event for every pixel... wait until finished
		waitForFinalEvent(function() {

			// onPageLoad();

		}, 500, 'unique string');

	}, false);
*/


	// Initialize Primary Functions
	// ----------------------------------------------------------------------------


	// onPageLoad();
	navToggle();

/*
	// smoothScroll();
	smoothScroll.init({
		speed: 400,
		easing: 'easeInOutQuint',
		updateURL: false
	});
*/


}, false);