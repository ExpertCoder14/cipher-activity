// Enter the message to encrypt. Supports all ASCII characters.
let message = "The Final Cipher's Key is SIX";

// MODIFY VARIABLES ABOVE THIS LINE

let svgNS = "http://www.w3.org/2000/svg";
let tableA = document.querySelector('#table-a');

// TABLE A CODE

// Change table size
tableA.setAttribute('viewBox', '0 0 10 ' + (message.length + 1));

// Draw the vertical lines
for (let i = 0; i < 7; ++i) {
	let line = document.createElementNS(svgNS, 'line');
	line.classList.add('vertical');
	line.setAttribute('x1', (i + 1).toString());
	line.setAttribute('x2', (i + 1).toString());
	line.setAttribute('y1', 0);
	line.setAttribute('y2', message.length + 1);
	tableA.prepend(line);
}

// Draw the binary code for each character and the line below it
for (let i = 0; i < message.length; ++i) {
	// Get binary representation of each character
	if (message.charCodeAt(i) > 127) console.log("Error: Character '" + message.charAt(i) + "' is not an ASCII character.");
	let currentChar = message.charCodeAt(i).toString(2);
	if (currentChar.length == 6) {
		// Add leading zero to bring the length of the string to 7
		currentChar = '0' + currentChar;
	}

	// Add the fetched binary code to the page
	for (let j = 0; j < 7; ++j) {
		let newText = document.createElementNS(svgNS, 'text');
		newText.innerHTML = currentChar.charAt(j);
		newText.setAttribute('y', i + 1.5);
		newText.setAttribute('x', j + 0.5);
		tableA.appendChild(newText);
	}

	// Create the line below each binary number
	let line = document.createElementNS(svgNS, 'line');
	line.setAttribute('x1', 0);
	line.setAttribute('x2', 10);
	line.setAttribute('y1', i + 2);
	line.setAttribute('y2', i + 2);
	document.querySelector('#table-a').appendChild(line);
}

// TABLES B, C, and D

/*
	The code below this point creates the Cipher Helper on the right hand side of the page.
	For each character, it prints the character's code on the left, and prints the actual character on the right.
*/

for (let currentChar = 32, index = 0; currentChar < 65; ++currentChar, ++index) {
	let newText = document.createElementNS(svgNS, 'text');
	newText.innerHTML = currentChar;
	newText.setAttribute('x', 1);
	newText.setAttribute('y', index + 1.5);
	document.querySelector('#table-b').appendChild(newText);
	let secondText = document.createElementNS(svgNS, 'text');
	secondText.innerHTML = currentChar == 32 ? '(space)' : currentChar == 38 ? '&amp;' : currentChar == 60 ? '&lt;' : currentChar == 62 ? '&gt;' : String.fromCharCode(currentChar);
	secondText.setAttribute('x', 3);
	secondText.setAttribute('y', index + 1.5);
	if (currentChar == 32) {
		secondText.setAttribute('style', 'font-size: 0.5px; font-family: Lato');
	}
	document.querySelector('#table-b').appendChild(secondText);
}

for (let currentChar = 65, index = 0; currentChar < 97; ++currentChar, ++index) {
	let newText = document.createElementNS(svgNS, 'text');
	newText.innerHTML = currentChar;
	newText.setAttribute('x', 1);
	newText.setAttribute('y', index + 1.5);
	document.querySelector('#table-c').appendChild(newText);

	let secondText = document.createElementNS(svgNS, 'text');
	secondText.innerHTML = currentChar == 32 ? '(space)' : currentChar == 38 ? '&amp;' : currentChar == 60 ? '&lt;' : currentChar == 62 ? '&gt;' : String.fromCharCode(currentChar);
	secondText.setAttribute('x', 3);
	secondText.setAttribute('y', index + 1.5);
	if (currentChar == 32) {
		secondText.setAttribute('style', 'font-size: 0.5px; font-family: Lato');
	}
	document.querySelector('#table-c').appendChild(secondText);
}

for (let currentChar = 97, index = 0; currentChar < 127; ++currentChar, ++index) {
	let newText = document.createElementNS(svgNS, 'text');
	newText.innerHTML = currentChar;
	newText.setAttribute('x', 1);
	newText.setAttribute('y', index + 1.5);
	document.querySelector('#table-d').appendChild(newText);

	let secondText = document.createElementNS(svgNS, 'text');
	secondText.innerHTML = currentChar == 32 ? '(space)' : currentChar == 38 ? '&amp;' : currentChar == 60 ? '&lt;' : currentChar == 62 ? '&gt;' : String.fromCharCode(currentChar);
	secondText.setAttribute('x', 3);
	secondText.setAttribute('y', index + 1.5);
	if (currentChar == 32) {
		secondText.setAttribute('style', 'font-size: 0.5px; font-family: Lato');
	}
	document.querySelector('#table-d').appendChild(secondText);
}