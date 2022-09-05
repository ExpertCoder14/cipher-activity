// Enter the message to encrypt. Use `\n` to break lines.
let message = 'IT IS\nGUARDED\nBY A\nGIANT\nTOAD';

// MODIFY VARIABLES ABOVE THIS LINE

let svgNS = "http://www.w3.org/2000/svg";
message = message.split('\n');

message.forEach((line, lineNum) => {
	let x = 0;
	for (let i = 0; i < line.length; ++i) {
		if (line.charAt(i) == ' ') {
			// If the character is a space, do nothing
			x += 1;
		} else {
			// Create a new element for the symbol and add it to the page
			let symbol = document.createElementNS(svgNS, 'use');
			symbol.setAttribute('href', '#pigpen-' + line.charAt(i).toLowerCase());
			symbol.setAttribute('transform', 'scale(0.5) translate(' + x + ', ' + lineNum * 1.5 + ')');
			document.querySelector('#message').appendChild(symbol);
			x += 1.5;
		}
	}
});