const hexArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

function getHex() {
	let hexColor = '#';
	for (let i = 0; i < 6; i++){
		hexColor += hexArr[getRandomNumber(hexArr.length)]
	}
	return hexColor;
}

function getRandomNumber(max) {
	return Math.floor(Math.random() * Math.floor(max));
}

btn.addEventListener('click', e => {
	const hex = getHex();
	document.body.style.backgroundColor = hex;
	color.textContent = hex;
});
