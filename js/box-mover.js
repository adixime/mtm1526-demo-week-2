/*
	3 ways to get elements in your HTML:
	document.getElementById()
	-document.getElementsByTagName()
	-document.geteElementsByClassName()
*/

var box; //Holds our <div> to move around

var createBox = function (ev) {
	removeActiveClass();
	box = document.createElement('div'); // .createElement() makes a new empty HTML tag
	
	box.className = 'box active'; //.className allows us to manipulate the classes of a tag
	
	document.documentElement.appendChild(box); //.appendChild() will add an element to the HTML file
	
		/*
		document.documentElement.clientWidth - the browser width
		element.offsetWidth - the element's width
	*/
	
	var randLeft = Math.round(Math.random() * (document.documentElement.clientWidth - box.offsetWidth));
	box.style.left = randLeft + 'px';
	
	var randTop = Math.round(Math.random() * (document.documentElement.clientHeight - box.offsetHeight));
	box.style.top = randTop + 'px';

};

var moveDown = function (ev) {
	var newTop = box.offsetTop + 20;
	box.style.top = newTop + 'px';
};

var moveUp = function (ev) {
	var newTop = box.offsetTop - 20;
	box.style.top = newTop + 'px';
};

var moveLeft = function (ev) {
	var newLeft = box.offsetLeft - 20;
	box.style.left = newLeft + 'px';
};

var moveRight = function (ev) {
	var newLeft = box.offsetLeft + 20;
	box.style.left = newLeft + 'px';
};

/*
	.addEventListener('event', function, false);
*/

document.getElementById('create').addEventListener('click', createBox, false);

document.getElementById('down').addEventListener('click', moveDown, false);

document.getElementById('up').addEventListener('click', moveUp, false);

document.getElementById('left').addEventListener('click', moveLeft, false);

document.getElementById('right').addEventListener('click', moveRight, false);

document.body.addEventListener('keydown', function (ev) {
	
	switch (ev.keyCode ) {
		case 38: 
			moveUp();
			break;
		case 40:
			moveDown();
			break;
		case 39:
			moveRight();
			break;
		case 37:
			moveLeft();
			break;
		default:
			// default is for when none of the other cases match
			console.log(ev.keyCode);
	}
}, false);

document.getElementById('color').addEventListener('change', function (ev) {
	//Inside an event Listener 'this' refers to the elemtn that fired this event
	console.log(this. value);
	
	//`ev.target` refers to the thing that originally dired the event
	//not necessarily the element the listener is bount to
	console.log(ev.target.value);
	
	//`.value` gets what the user typed into an input field
	box.style.backgroundColor = this.value;
}, false);

var removeActiveClass = function() {
	var divs = document.getElementsByTagName('div');
	var totalDivs = divs.length;
	
	for (var i=0; i<totalDivs; i++) {
		divs[i].className = 'box';
	}
};
document.documentElement.addEventListener('click', function (ev) {
	if (ev.target.tagName == 'DIV') {
		ev.target.className = 'box active';
		box = ev.target;
		
	}
}, false);