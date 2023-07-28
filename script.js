let startTime = new Date().getTime(); //створення перемінної із вмістом дати браузера;

const shapeRandomColor = function() {
	const shape = document.getElementById("shape1");
	const red = Math.floor(Math.random() * 256);
	const green = Math.floor(Math.random() * 256);
	const blue = Math.floor(Math.random() * 256);
	const a = Math.floor(Math.random() * 50);
	const randomColor = `rgba(${red}, ${green}, ${blue}, ${a})`;
	return randomColor;
}

const shapeRandomPosition = function() {
	const shape = document.getElementById("shape1");
	const field = document.getElementById("gameField");
	const top = Math.random() * 500;
	const left = Math.random() * 500;
	const rotate = Math.random() * 360;
	shape.style.top = top + "px";
	shape.style.left = left + "px";
	shape.style.rotate = rotate + "deg";
	console.log(top);
	console.log(top);
}

const shapeRandomForm = function() {
	const shape = document.getElementById("shape1");
	const shapes = ["shape1","shape2", "shape3", "shape4"];
	const randomShape = shapes[Math.floor(Math.random() * shapes.length)];
	shape.className = randomShape;
	return randomShape;
}

const makeNewShape = function() {
	const shape = document.getElementById("shape1");
	const color = shapeRandomColor();
	shapeRandomPosition();
	shapeRandomForm();
	shape.style.display = "block";
	shape.style.backgroundColor = color;
	startTime = new Date().getTime();
}

makeNewShape();

document.getElementById("shape1").onclick = function() {
	const shape = document.getElementById("shape1");
	shape.style.display = "none";
	const finishTime = new Date().getTime();
	const reactionTime = (finishTime - startTime) / 1000;
	document.getElementById("userReaction").innerHTML = "Час Вашої реакції: " + reactionTime + "секунд.";
	setTimeout(makeNewShape, Math.random() * 3000);
}