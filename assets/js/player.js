function Player() {

	this.w = 25;
	this.h = 25;
	this.x = width / 2;
	this.y = height - (this.h * 2);
	this.jumps = rowHeight;

	this.show = function() {
		fill(255);
		noStroke();
    	rectMode(CENTER);
		rect(this.x, this.y, this.w, this.h);
	}

	this.move = function(direction) {
		if (direction === 'forward' && this.y >= ((this.h / 2) + this.jumps)){
			this.y -= this.jumps;
		}
		if (direction === 'backward' && this.y <= height - ((this.h / 2) + this.jumps)){
			this.y += this.jumps;
		}
		if (direction === 'left'  && this.x >= ((this.w / 2) + this.jumps)){
			this.x -= this.jumps;
		}
		if (direction === 'right'  && this.x <= width - ((this.w / 2) + this.jumps)){
			this.x += this.jumps;
		}
	}

}