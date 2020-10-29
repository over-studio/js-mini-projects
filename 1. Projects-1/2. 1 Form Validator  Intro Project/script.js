const form = document.querySelector('#form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const password2 = document.querySelector('#password2');

function showError(input, message) {
	const formControl = input.parentElement;
	formControl.className = 'form-control error';
	const small = formControl.querySelector('small');
	small.innerText = message;
}
function showSuccess(input, message) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}

function checkRequired(inputArr) {
	inputArr.forEach(input => {
		if (input.value.trim() === '') {
			showError(input, `${getFieldName(input)} is required`);
		} else {
			showSuccess(input);
		}
	});
	/* if (username.value === '') {
		showError(username, 'Username is required')
	} else {
		showSuccess(username);
	}

	if (email.value === '') {
		showError(email, 'Email is required')
	} else if (!isValidEmail(email.value)) {
		showError(email, 'Email is not valid');
	} else {
		showSuccess(email);
	}

	if (password.value === '') {
		showError(password, 'Password is required')
	} else {
		showSuccess(password);
	}

	if (password2.value === '') {
		showError(password2, 'Password is required again')
	} else {
		showSuccess(password2);
	} */
}

function checkLength(input, min, max) {
	const length = input.value.length;
	if (length < min) {
		showError(input, `${getFieldName(input)} must be at least ${min} characters.`);
	} else if (length > max) {
		showError(input, `${getFieldName(input)} must be less than ${max} characters.`);
	}
}

function checkEmail(input) {
	const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if (re.test(String(input.value).toLowerCase())) {
		showSuccess(input);
	} else {
		showError(input, 'Email is not valid');
	}
}

function checkPasswordMatch(input1, input2) {
	const value1 = input1.value;
	const value2 = input2.value;
	if (value1 !== value2) {
		showError(input2, 'Passwords do not match')
	}
}

function getFieldName(input) {
	const value = input.id.toString();
	return value[0].toUpperCase() + value.slice(1);
}

form.addEventListener('submit', (e) => {
	e.preventDefault();

	checkRequired([username, email, password, password2]);
	checkLength(username, 3, 15);
	checkLength(password, 6, 25);
	checkEmail(email);
	checkPasswordMatch(password, password2);
});
