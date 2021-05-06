const header = document.querySelector('header');

window.addEventListener('scroll', fixnav);

function fixnav() {
	if (window.scrollY > 70) {
		header.classList.add('active');
	} else {
		header.classList.remove('active');
	}
}
