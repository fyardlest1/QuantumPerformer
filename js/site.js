// step 1: get the start and end numbers from the user (the input field)
function getValues() {
	// get the inputs by their ID
	let startValue = document.getElementById('startValue').value;
	let endValue = document.getElementById('endValue').value;

	// Convert the start and end values to numbers
	startValue = parseInt(startValue);
	endValue = parseInt(endValue);

	// chek if the numbers are valid numbers
	if (isNaN(startValue) || isNaN(endValue)) {
		// tell the user to enter a valid number using sweet alert
		Swal.fire({
			icon: 'error',
			title: 'Oops! Invalid number.',
			text: 'Please enter a valid number for both start and end values.',
			backdrop: false
		});
	} else if (startValue >= endValue) {
		// tell the user it's wrong
		Swal.fire({
			icon: 'error',
			title: 'Uh oh!',
			text: 'Please enter a valid number for both start and end values.',
			backdrop: false
		});
	} else {
		let values = generateNumbers(startValue, endValue);
		displayNumbers(values);
	}
}

// step 2: get all the numbers in the range
function generateNumbers(start, end) {
	let numbers = [];
	for (let number = start; number <= end; number += 1) {
		numbers.push(number);
	}
	return numbers;
}

// step 3: put those numbers on the page
function displayNumbers(values) {
	// - put the HTML on the page on the element with the result id
	let resultsTable = document.getElementById('result');
	// clear the the innerHTML before
	resultsTable.innerHTML = '';

	// for each number in values:
	for (let i = 0; i < values.length; i++) {
		// - create some html with the number
		let number = values[i]
		let html = '<tr><td>';

		// - determine whether it should be bold
		if (number % 2 == 0) {
			html += '<b>' + number + '</b>';
		} else {
			html += number;
		}

		html += '</td></tr>';

		resultsTable.innerHTML += html;
	}
}