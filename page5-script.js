let svgNS = "http://www.w3.org/2000/svg";

let message = 'The Final Cipher\'s Key is SIX';

let x = 0;
let y = 0;

for (let i = 0; i < message.length; ++i) {
	let currentChar = message.charCodeAt(i).toString(2);
	console.log(currentChar);
	if (currentChar.length == 6) {
		currentChar = '0' + currentChar;
	}
	for (let j = 0; j < 7; ++j) {
		let newText = document.createElementNS(svgNS, 'text');
		newText.innerHTML = currentChar.charAt(j);
		newText.setAttribute('y', i + 1.5);
		newText.setAttribute('x', j + 0.5);
		document.querySelector('#table-a').appendChild(newText);
	}
}

for (let currentChar = 32, index = 0; currentChar < 65; ++currentChar, ++index) {
	console.log(currentChar);
	console.log(String.fromCharCode(currentChar));

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
	console.log(currentChar);
	console.log(String.fromCharCode(currentChar));

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
	console.log(currentChar);
	console.log(String.fromCharCode(currentChar));

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