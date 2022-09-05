// Enter your message here
let message = "hellopeople";

// MODIFY VARIABLES ABOVE THIS LINE

let topWord = "", bottomWord = "";
let svgNS = "http://www.w3.org/2000/svg";

// Prepare size of diagram space
document.querySelector('#cipher').setAttribute('viewBox', '0 0 ' + (message.length + 1) + ' 6')

// Add letters to the top and bottom words, and prepare the line's path
let pathDraw = '';
for (let i = 0; i < message.length; ++i) {
	// Alternate between adding each letter to the top and bottom words
	if (i % 2 == 0) {
		topWord += message.charAt(i);
	} else {
		bottomWord += message.charAt(i);
	}
	// Add the appropriate point to the path
	if (i == 0) pathDraw += '1,2';
	else {
		pathDraw += ' ' + (i + 1) + (i % 2 == 0 ? ',2' :',4')
	}
}
// Applying changes to the page
document.querySelector('#cipher-line').setAttribute('points', pathDraw);
document.querySelector('#top-word').innerHTML = topWord;
document.querySelector('#bottom-word').innerHTML = bottomWord;

// Add blank squares to the top of the diagram
for (let i = 0; i < topWord.length; ++i) {
	let newRect = document.createElementNS(svgNS, 'use');
	newRect.setAttribute('href', '#blank');
	newRect.setAttribute('x', i * 2 + 0.5);
	newRect.setAttribute('y', '0.5');
	document.querySelector('#cipher').appendChild(newRect);
}

// Add blank squares to the bottom of the diagram
for (let i = 0; i < bottomWord.length; ++i) {
	let newRect = document.createElementNS(svgNS, 'use');
	newRect.setAttribute('href', '#blank');
	newRect.setAttribute('x', i * 2 + 1.5);
	newRect.setAttribute('y', '4.5');
	document.querySelector('#cipher').appendChild(newRect);
}