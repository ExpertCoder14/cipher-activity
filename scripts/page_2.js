// Enter the message to encrypt. Insert `\n` where needed to break lines.
let message = 'i have\n left\n my t\nreasur\ne on m\nount k\nerfuf\nfle';
// Enter the desired substitutions below. Default is Dutch spelling alphabet
let subs = {
	a: 'Anton',
	b: 'Bernard',
	c: 'Cornelis',
	d: 'Dirk',
	e: 'Eduard',
	f: 'Ferdinand',
	g: 'Gerard',
	h: 'Hendrik',
	i: 'Izaak',
	j: 'Johan',
	k: 'Karel',
	l: 'Lodewijk',
	m: 'Maria',
	n: 'Nico',
	o: 'Otto',
	p: 'Pieter',
	q: 'Quirinius',
	r: 'Richard',
	s: 'Simon',
	t: 'Theodoor',
	u: 'Utrecht',
	v: 'Victor',
	w: 'Willem',
	x: 'Xantippe',
	y: 'Ypsilon',
	z: 'Zacharias',
	' ': '(spatie)'
};

let svgNS = "http://www.w3.org/2000/svg";
message = message.split('\n');

message.forEach((line, lineNum) => {
	let encLine = '';
	for (let i = 0; i < line.length; ++i) {
		encLine += subs[line.charAt(i)] + (i == line.length - 1 ? '' : ' ');
	}
	let newText = document.createElementNS(svgNS, 'tspan');
	newText.setAttribute('x', '0.125');
	newText.setAttribute('y', lineNum * 0.3 + 1);
	newText.appendChild(document.createTextNode(encLine));
	document.querySelector('#message').appendChild(newText);
});