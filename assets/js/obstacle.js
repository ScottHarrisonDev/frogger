function Obstacle(row, order, type) {


	this.gap = obstacleTypeMapping[type].gap;
	this.w = obstacleTypeMapping[type].w;
	this.speed = obstacleTypeMapping[type].speed;
console.log(type);
	this.direction = row % 2 == 0 ? 'left' : 'right';
	this.h = 25;
	this.x = order * this.gap;
	this.y = (row * rowHeight) + (rowHeight * 2);

	this.show = function() {
		fill(255);
		noStroke();
    	rectMode(CENTER);
		rect(this.x, this.y, this.w, this.h);
		this.move();
	}

	this.move = function() {
		this.checkAndReset();
		switch (this.direction) {
			case 'left':
				this.x -= this.speed;
				break;
			case 'right':
				this.x += this.speed;
				break;
		}
	}

	this.checkAndReset = function() {
		if (
			this.x < (0 - this.w) ||
			this.x > (width + this.w)
			) {
			this.reset();
		}
	}

	this.reset = function() {
		switch (this.direction) {
			case 'left':
				this.x = width + (this.w / 2);
				break;
			case 'right':
				this.x = 0 - (this.w / 2);
				break;
		}
	}

}