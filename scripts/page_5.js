/**
 * page5-script.js
 * This script fills in the values in the tables on Page5.svg.
 * 
 * - table-a is the Binary Cipher.
 * - table-b through table-d are the three tables for the ASCII characters.
 * 
 * HOW TO USE
 * 
 * 1. Enter your message into the below variable `message`.
 * 2. Open the file in `pages/page_5.svg`. The table should be automatically filled with your message.
 */


// Set your message using the variable below.
let message = "The Final Cipher's Key is SIX";

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

// Draw the binary code for each character
for (let i = 0; i < message.length; ++i) {
	if (message.charCodeAt(i) > 127) console.log("Error: Character '" + message.charAt(i) + "' is not an ASCII character.");
	let currentChar = message.charCodeAt(i).toString(2);
	if (currentChar.length == 6) {
		currentChar = '0' + currentChar;
	}
	for (let j = 0; j < 7; ++j) {
		let newText = document.createElementNS(svgNS, 'text');
		newText.innerHTML = currentChar.charAt(j);
		newText.setAttribute('y', i + 1.5);
		newText.setAttribute('x', j + 0.5);
		tableA.appendChild(newText);
	}

	// Create the line below the code
	let line = document.createElementNS(svgNS, 'line');
	line.setAttribute('x1', 0);
	line.setAttribute('x2', 10);
	line.setAttribute('y1', i + 2);
	line.setAttribute('y2', i + 2);
	document.querySelector('#table-a').appendChild(line);

}

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