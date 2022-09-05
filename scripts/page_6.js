// Enter the message to encrypt. Use `\n` to break lines.
let message = 'the secret word\nis bumbershoot';
// Enter the number of characters to shift
let key = 6;

// Select the font size. 96 = 1in
let fontSize = 36;
// Select the distance between lines. 96 = 1in
let linePadding = 36;

// MODIFY VARIABLES ABOVE THIS LINE

// Function to caesar cipher entered message
function caesarCipher(msg, key){
	let encMsg = "";
	for(var i = 0; i < msg.length; i++) {
		let code = msg.charCodeAt(i);
		// Encrypt only letters in 'A' ... 'Z' interval
		if (code >= 0x41 && code <= 0x41 + 26 - 1) {
			code -= 65;
			code = (code + key) % 26;
			code += 65;
		}
		if (code >= 0x61 && code <= 0x61 + 26 - 1) {
			code -= 0x61;
			code = (code + key) % 26;
			code += 0x61;
		}
		encMsg += String.fromCharCode(code);
	}
	return encMsg;
}

// Prepare environment and set font size
let svgNS = "http://www.w3.org/2000/svg";
message = caesarCipher(message, key).split('\n');

let msgElm = document.querySelector('#message');
msgElm.setAttribute('font-size', fontSize / 96);

// Calculate line height and height for the first line
let lineHeight = (fontSize / 96) + (linePadding / 96);
let startHeight = 1.6875 - ((message.length - 1) / 2 * lineHeight);

// Add each line of the message to the page
message.forEach((line, i) => {
	let newText = document.createElementNS(svgNS, 'tspan');
	newText.setAttribute('x', '3.125');
	newText.setAttribute('y', lineHeight * i + startHeight);
	newText.appendChild(document.createTextNode(line));
	document.querySelector('#message').appendChild(newText);
});

// Draw the four tables

let alphabetA = 'abcdefghijklm';
let alphabetB = 'nopqrstuvwxyz';

for (let i = 0; i < alphabetA.length; ++i) {
	let currentChar = alphabetA.charAt(i);
	let newText = document.createElementNS(svgNS, 'text');
	newText.innerHTML = currentChar;
	newText.setAttribute('y', 0.5);
	newText.setAttribute('x', i + 0.5);
	newText.setAttribute('style', 'font-size: 1px;');
	document.querySelector('#table-a').appendChild(newText);
}

for (let i = 1; i < alphabetA.length + 1; ++i) {
	let currentChar = i;
	let newText = document.createElementNS(svgNS, 'text');
	newText.innerHTML = currentChar;
	newText.setAttribute('y', 1.5);
	newText.setAttribute('x', i - 0.5);
	newText.setAttribute('style', 'font-size: 0.5px; fill: #808080');
	document.querySelector('#table-a').appendChild(newText);
}


for (let i = 0; i < alphabetB.length; ++i) {
	let currentChar = alphabetB.charAt(i);
	let newText = document.createElementNS(svgNS, 'text');
	newText.innerHTML = currentChar;
	newText.setAttribute('y', 0.5);
	newText.setAttribute('x', i + 0.5);
	newText.setAttribute('style', 'font-size: 1px;');
	document.querySelector('#table-b').appendChild(newText);
}

for (let i = 13; i < alphabetB.length + 14; ++i) {
	let currentChar = i;
	let newText = document.createElementNS(svgNS, 'text');
	newText.innerHTML = currentChar;
	newText.setAttribute('y', 1.5);
	newText.setAttribute('x', i - 13.5);
	newText.setAttribute('style', 'font-size: 0.5px; fill: #808080');
	document.querySelector('#table-b').appendChild(newText);
}
