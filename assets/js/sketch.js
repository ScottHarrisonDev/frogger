var player;
var rowHeight = 50;
var obstacles = [];
var gridHeight = 450;
var rows = (gridHeight / rowHeight) - 3; // exclude start and end rows
var obstacleTypeMapping = {
	log: {
		gap: 300,
		w: 50,
		speed: 1,
		perRow: 3
	},
	train: {
		gap: 500,
		w: 300,
		speed: 3,
		perRow: 1
	},
	truck: {
		gap: 200,
		w: 75,
		speed: 1.7,
		perRow: 4
	},
	car: {
		gap: 200,
		w: 50,
		speed: 2,
		perRow: 3
	}
};
var rowObstacles = [
	'log',
	'log',
	'train',
	'train',
	'truck',
	'car',
];

function setup() {
	createCanvas(700, gridHeight);
	player = new Player();
	for (var i = 0; i < rows; i++) {
		for (var ii = 0; ii < obstacleTypeMapping[rowObstacles[i]].perRow; ii++) {
			obstacles.push(new Obstacle(i, ii, rowObstacles[i]));
		}
	}
}

function draw() {
	background(0);
	player.show();
	for (var i = 0; i < obstacles.length; i++) {
		obstacles[i].show();
	}
}

function keyPressed() {
	switch(keyCode) {
		case UP_ARROW:
			player.move('forward');
			break;
		case DOWN_ARROW:
			player.move('backward');
			break;
		case LEFT_ARROW:
			player.move('left');
			break;
		case RIGHT_ARROW:
			player.move('right');
			break;
	}
}