// let prevScrollPos = window.pageYOffset;

// document.querySelector('body').addEventListener('scroll', function() {
// 	const currentScrollPos = window.pageYOffset;
// 	if (prevScrollPos > currentScrollPos) {
// 		document.querySelector('.top').style.top = '0';
// 	} else {
// 		document.querySelector('.top').style.top = '-50px';
// 	}
// 	prevScrollPos = currentScrollPos;
// });

const navSlide = () => {
	const burger = document.querySelector('.burger');
	const nav = document.querySelector('.ul-link');
	const navlinks = document.querySelectorAll('.nav-link');
	// const span = document.querySelector('.close')[0];

	//Toggle Nav
	burger.addEventListener('click', () => {
		nav.classList.toggle('nav-active');

		//Animate links
		navlinks.forEach((link, index) => {
			//console.log(index);
			if (link.style.animation) {
				link.style.animation = '';
			} else {
				link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.4}s`;
			}
		});
		//Burger Animation
		burger.classList.toggle('toggle');
	});
};

navSlide();

//Close Nav
// span.addEventListener('click', function() {
// 	nav.style.display = 'none';
// });
