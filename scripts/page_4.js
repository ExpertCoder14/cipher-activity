// Enter the message to encrypt. Break lines with `\n`
let message = "you must tell us\nthe secret word";
// Enter the alphabet here, length should be a perfect square (25, 36, etc)
let alphabet = 'abcdefghiklmnopqrstuvwxyz';
// Enter the key for the cipher. No repeat letters, `bookkeeper` becomes `bokepr`
let key = "monkeys";
// Enter the grid headers here. Length should be the square root of the length of the alphabet (25 letters means this should be 5 letters long)
let gridHeaders = 'adfgx';

// MODIFY VARIABLES ABOVE THIS LINE

let svgNS = "http://www.w3.org/2000/svg";

// Move letters in key to beginning of alphabet
for (let i = key.length - 1; i >= 0; --i) {
	let currentLetter = key.charAt(i);
	let location = alphabet.indexOf(currentLetter);
	alphabet = currentLetter + alphabet.substring(0, location) + alphabet.substring(location + 1, alphabet.length);
}

// Encode message
message = message.split('\n');
message.forEach((line, lineNum) => {
	let encLine = '';
	for (let i = 0; i < line.length; ++i) {
		// For each character, if it is a letter, change it to the two corresponding letters, otherwise keep the character as-is
		if (line.charCodeAt(i) >= 97 && line.charCodeAt(i) <= 122) {
			encLine += gridHeaders.charAt(Math.floor(alphabet.indexOf(line.charAt(i)) / 5));
			encLine += gridHeaders.charAt(alphabet.indexOf(line.charAt(i)) % 5);
		} else encLine += line.charAt(i);
	}

	// Add the encrypted line to the page
	let newText = document.createElementNS(svgNS, 'tspan');
	newText.appendChild(document.createTextNode(encLine));
	newText.setAttribute('x', 0);
	newText.setAttribute('y', lineNum * 0.75 + 1);
	document.querySelector('#message').appendChild(newText);
});

let grid = document.querySelector('#grid');
grid.setAttribute('viewBox', '-0.1 -0.1 ' + (gridHeaders.length + 1.2) + ' ' + (gridHeaders.length + 1.2));

// Create the text objects on the headers, and the lines following them, then add them to the page
for (let i = 0; i < gridHeaders.length; ++i) {
	let newTextA = document.createElementNS(svgNS, 'text'), newTextB = document.createElementNS(svgNS, 'text');
	let newLineA = document.createElementNS(svgNS, 'line'), newLineB = document.createElementNS(svgNS, 'line');

	newTextA.setAttribute('x', 0.5); newTextB.setAttribute('y', 0.5);
	newTextA.setAttribute('y', 1.5 + i); newTextB.setAttribute('x', 1.5 + i);

	newTextA.appendChild(document.createTextNode(gridHeaders.charAt(i).toUpperCase()));
	newTextB.appendChild(document.createTextNode(gridHeaders.charAt(i).toUpperCase()));

	newLineA.setAttribute('x1', '0'); newLineA.setAttribute('x2', gridHeaders.length + 1);
	newLineB.setAttribute('y1', '0'); newLineB.setAttribute('y2', gridHeaders.length + 1);

	newLineA.setAttribute('y1', i + 2); newLineA.setAttribute('y2', i + 2);
	newLineB.setAttribute('x1', i + 2); newLineB.setAttribute('x2', i + 2);

	newLineA.classList.add('table'); newLineB.classList.add('table');

	grid.appendChild(newTextA); grid.appendChild(newTextB);
	grid.appendChild(newLineA); grid.appendChild(newLineB);
}

// Add the alphabet to the grid
for (let i = 0; i < alphabet.length; ++i) {
	let newText = document.createElementNS(svgNS, 'text');
	newText.setAttribute('y', Math.floor(i / gridHeaders.length) + 1.5);
	newText.setAttribute('x', Math.floor(i % gridHeaders.length) + 1.5);
	newText.appendChild(document.createTextNode(alphabet.charAt(i).toUpperCase()));
	grid.appendChild(newText);
}