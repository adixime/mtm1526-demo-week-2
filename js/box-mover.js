/*
	3 ways to get elements in your HTML:
	document.getElementById()
	-document.getElementsByTagName()
	-document.geteElementsByClassName()
*/

var box; //Holds our <div> to move around

var createBox = function (ev) {
	box = document.createElement('div'); // .createElement() makes a new empty HTML tag
	
	box.className = 'box'; //.className allows us to manipulate the classes of a tag
	
	document.body.appendChild(box); //.appendChild() will add an element to the HTML file
	
	/*
		document.documentElement.clientWidth - the browser width
		element.offsetWidth - the element's width
	*/
	
	var randLeft = Math.round(Math.random() * (document.documentElement.clientWidth - box.offsetWidth));
	box.style.left = randLeft + 'px';
	
	var randTop = Math.round(Math.random() * (document.documentElement.clientHeight - box.offsetHeight));
	box.style.top = randTop + 'px';
	
	console.log(randLeft);
};

var moveDown = function (ev) {
	var newTop = box.offsetTop + 10;
	box.style.top = newTop + 'px';
};

/*
	.addEventListener('event', function, false);
*/

document.getElementById('create').addEventListener('click', createBox, false);

document.getElementById('down').addEventListener('click', moveDown, false);