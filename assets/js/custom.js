const toggler = document.querySelector('.navbar-toggler');
const navEl = document.querySelector('.navbar');
var clickCount = 0;
var width = window.innerWidth;
toggler.addEventListener("click", function() {
	clickCount++;
	if (clickCount%2 != 0) {
		navEl.classList.add('custom-bg');
	}
	else {
		navEl.classList.remove('custom-bg');
	}
});
console.log(width);
window.addEventListener('scroll', function() {
	if (window.innerWidth > 500 && window.scrollY >= 56) {
		navEl.classList.add('navbar-scrolled');
	}
	else if (window.innerWidth > 500 && window.scrollY < 56){
		navEl.classList.remove('navbar-scrolled');
	}
	else if (window.innerWidth <= 500 && window.scrollY >= 2) {
		navEl.classList.add('navbar-scrolled');
	}
	else if (window.innerWidth <= 500 && window.scrollY < 2) {
		navEl.classList.remove('navbar-scrolled');
	}
});