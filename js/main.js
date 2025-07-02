// burger mobile
const burger = document.getElementById('burger');
const cross = document.getElementById('cross');
const burgerActive = document.getElementById('burger_active');
const body = document.body;
const uploadForm = document.getElementById('upload-form');

if (burger && cross && burgerActive && body) {
	burger.addEventListener('click', () => {
		const expanded = burger.getAttribute('aria-expanded') === 'true';
		burger.setAttribute('aria-expanded', String(!expanded));
		burgerActive.classList.toggle('show');
		body.classList.add('no-scroll');
	});
	cross.addEventListener('click', () => {
		burgerActive.classList.remove('show');
		body.classList.remove('no-scroll');
	});
}

// like click
document.querySelectorAll('.like-icon').forEach(icon => {
	icon.addEventListener('click', e => {
		// e.preventDefault();
		icon.classList.toggle('liked');
	});
});

// picture preview
if (uploadForm) {
	uploadForm.addEventListener('submit', function (e) {
		e.preventDefault();
		const url = document.getElementById('photo-url').value.trim();
		const previewContainer = document.getElementById('preview__img');

		if (url) {
			previewContainer.innerHTML = `<img src="${url}" alt="Preview of uploaded cat">`;
			this.reset(); // form clear
			document.querySelector('#preview').scrollIntoView({ behavior: 'smooth' }); //section anchor
		}
	});
}
