/**
 * HOW TO USE
 * 
 * 1. Enter your message into the this variable `message`.
 *    The message will not automatically break lines; use `\n` to break lines where needed.
 * 2. Open `pages/page_3.svg`. You should see a pigpen cipher with your message.
 */

let message = 'IT IS\nGUARDED\nBY A\nGIANT\nTOAD';

let svgNS = "http://www.w3.org/2000/svg";
message = message.split('\n');

message.forEach((line, lineNum) => {
	let x = 0;
	for (let i = 0; i < line.length; ++i) {
		if (line.charAt(i) == ' ') {
			x += 1;
		} else {
			let symbol = document.createElementNS(svgNS, 'use');
			symbol.setAttribute('href', '#pigpen-' + line.charAt(i).toLowerCase());
			symbol.setAttribute('transform', 'scale(0.5) translate(' + x + ', ' + lineNum * 1.5 + ')');
			document.querySelector('#message').appendChild(symbol);
			x += 1.5;
		}
	}
});