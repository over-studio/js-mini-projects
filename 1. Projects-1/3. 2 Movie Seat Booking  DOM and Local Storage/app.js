class Seat {
	constructor(id, state) {
		this.id = id;
		this.state = state;
	}
}

const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');
let ticketPrice = +movieSelect.value;
let seatsSelected = 0;
let totalPrice = 0;

seats.forEach(seat => {
	seat.addEventListener('click', function (e) {
		this.classList.toggle('selected');
		updateSelectedCount();
	});
});

movieSelect.addEventListener('change', e => {
	ticketPrice = +e.target.value;
	updateSelectedCount();
});

populateUI();

function updateSelectedCount() {
	const selected = document.querySelectorAll('.row .seat.selected');

	const selectedCount = selected.length;

	count.textContent = selectedCount;
	total.textContent = selectedCount * ticketPrice;

	saveLS();
}

// save to LocalStorage
function saveLS() {
	const arr = [];
	const allSeats = document.querySelectorAll('.row .seat');
	allSeats.forEach((seat, id) => {
		let state;
		if (seat.classList.contains('occupied')) {
			state = 0; //occupied
		} else if (seat.classList.contains('selected')) {
			state = 1; //selected
		} else {
			state = 2; //n/a
		}
		arr.push(new Seat(id, state));
	});
	localStorage.setItem('seats', JSON.stringify(arr));

	// save new ticket price
	localStorage.setItem('ticketPriceIndex', movieSelect.selectedIndex);
}

function getLS() {
	const data = localStorage.getItem('seats');
	if (data) return JSON.parse(data);
}

function populateUI() {
	const arr = getLS();
	const allSeats = document.querySelectorAll('.row .seat');
	allSeats.forEach((seat, id) => {
		if (arr[id].state === 0) {
			seat.classList.add('occupied');
		} else if (arr[id].state === 1) {
			seat.classList.add('selected');
		}
	});

	// set ticketPrice
	movieSelect.selectedIndex = +localStorage.getItem('ticketPriceIndex');
	ticketPrice = +movieSelect.value;

	// recalclate the price
	updateSelectedCount();
}
