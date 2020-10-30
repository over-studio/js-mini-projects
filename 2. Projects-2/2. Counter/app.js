// set initial count
let count = 0;

// select value and buttons
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

/*
btns.forEach(btn => {
	if (btn.classList.contains('decrement')) {
		btn.addEventListener('click', e => setCounter(--count));
	} else if (btn.classList.contains('increment')) {
		btn.addEventListener('click', e => setCounter(++count));
	} else if (btn.classList.contains('reset')) {
		btn.addEventListener('click', e => setCounter(0));
	}
});
*/

btns.forEach(btn => {
	btn.addEventListener('click', e => {
		const styles = e.currentTarget.classList;
		if (styles.contains('decrement')) {
			setCounter(--count);
		} else if (styles.contains('increment')) {
			setCounter(++count);
		} else {
			setCounter(0);
		}
	})
});

function setCounter(num) {
	count = num;
	value.textContent = num;
	value.style.color = (num < 0) ? 'red' : (num > 0 ? 'green' : 'black');
}

