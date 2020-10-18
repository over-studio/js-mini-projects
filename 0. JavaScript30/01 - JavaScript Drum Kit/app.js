window.addEventListener('keydown', function (e) {
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
	if (!audio) return;
	audio.currentTime = 0;
	audio.play();

	const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
	key.classList.add('playing');
});

/* window.addEventListener('keyup', function(e){
	const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
	key.classList.remove('playing');
}); */

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

function removeTransition(e) {
	if (e.propertyName !== 'transform') return;
	this.classList.remove('playing');
}
