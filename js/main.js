(function IIFE(){
    "use strict";
    // select dom elements
    const menu 			= document.querySelector('.menu');
    const menuBtn 		= document.querySelector('.menu-btn');	
	const menuNav 		= document.querySelector('.menu-nav');
	const menuBranding 	= document.querySelector('.menu-branding');
	const navItems 		= document.querySelectorAll('.nav-item');
	// const menuElements	= 
	// 	document.querySelectorAll(
	// 		".menu-btn, .menu, .menu-nav, .menu-branding, .nav-item"
	// 	);

	// set inital state of menu
	let showMenu = false;
	// let isOpen = false;

	function toggleMenu() {
		if (!showMenu) {
			menuBtn.classList.add( "close" );
			menu.classList.add( "show" );
			menuNav.classList.add( "show" );
			menuBranding.classList.add( "show" );
			navItems.forEach(
				item => item.classList.add( "show" )
			);
			// menuElements.forEach(elem => {
			// 	if (elem.className == "menu-btn") {
			// 		elem.classList.add( "close" );
			// 	} else {
			// 		elem.classList.add( "show" );
			// 	}
			// });
			document.body.style.overflowY = "hidden";
			showMenu = true;
		} else {
			menuBtn.classList.remove('close');
			menu.classList.remove('show');
			menuNav.classList.remove('show');
			menuBranding.classList.remove('show');
			navItems.forEach(
				item => item.classList.remove( "show" )
			);
			// menuElements.forEach(elem => {
			// 	if (elem.className == "menu-btn") {
			// 		elem.classList.remove( "close" );
			// 	} else {
			// 		elem.classList.remove( "show" );
			// 	}
			// });
			document.body.style.overflowY = "scroll";
			showMenu = false;
		}
	}

	// listen for click events
	// document.querySelector( ".menu-btn" ).addEventListener("click", toggleMenu);
	menuBtn.addEventListener("click", toggleMenu);

}());