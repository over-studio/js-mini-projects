const colors = ['green', 'red', 'rgba(133,122,200', '#f15025', 'yellow', 'black'];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', () => {
	// get random number between 0 - 3
	const randomNumber = getRandomNumber(colors.length);
	document.body.style.backgroundColor = colors[randomNumber];
	color.textContent = colors[randomNumber];
});

function getRandomNumber(max) {
	return Math.floor(Math.random() * Math.floor(max));
}
