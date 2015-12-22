var hamburger = document.getElementById('nav-toggle');

function triggerMenu() {
	var hamburger = document.getElementById('nav-toggle');
	var sidebar = document.getElementById('sidebar');

	hamburger.classList.toggle('active');	
	sidebar.classList.toggle('active');	
}