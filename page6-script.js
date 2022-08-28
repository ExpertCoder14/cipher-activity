let svgNS = "http://www.w3.org/2000/svg";

let alphabetA = 'abcdefghijklm';
let alphabetB = 'nopqrstuvwxyz';

let x = 0;
let y = 0;

for (let i = 0; i < alphabetA.length; ++i) {
	let currentChar = alphabetA.charAt(i);
	console.log(currentChar);
	let newText = document.createElementNS(svgNS, 'text');
	newText.innerHTML = currentChar;
	newText.setAttribute('y', 0.5);
	newText.setAttribute('x', i + 0.5);
	newText.setAttribute('style', 'font-size: 1px;');
	document.querySelector('#table-a').appendChild(newText);
}

for (let i = 1; i < alphabetA.length + 1; ++i) {
	let currentChar = i;
	console.log(currentChar);
	let newText = document.createElementNS(svgNS, 'text');
	newText.innerHTML = currentChar;
	newText.setAttribute('y', 1.5);
	newText.setAttribute('x', i - 0.5);
	newText.setAttribute('style', 'font-size: 0.5px; fill: #808080');
	document.querySelector('#table-a').appendChild(newText);
}


for (let i = 0; i < alphabetB.length; ++i) {
	let currentChar = alphabetB.charAt(i);
	console.log(currentChar);
	let newText = document.createElementNS(svgNS, 'text');
	newText.innerHTML = currentChar;
	newText.setAttribute('y', 0.5);
	newText.setAttribute('x', i + 0.5);
	newText.setAttribute('style', 'font-size: 1px;');
	document.querySelector('#table-b').appendChild(newText);
}

for (let i = 13; i < alphabetB.length + 14; ++i) {
	let currentChar = i;
	console.log(currentChar);
	let newText = document.createElementNS(svgNS, 'text');
	newText.innerHTML = currentChar;
	newText.setAttribute('y', 1.5);
	newText.setAttribute('x', i - 13.5);
	newText.setAttribute('style', 'font-size: 0.5px; fill: #808080');
	document.querySelector('#table-b').appendChild(newText);
}
