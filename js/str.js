class str {
	constructor(){
		this.x = random(0,width);
		this.y = random(0,height);

		this.rd = [-0.01,-0.3,0.3,0.01];

		this.xv = random(this.rd);
		this.yv = random(this.rd);

		this.diameter = random(3,10);
		this.colr = 150;
		this.lsiz = 4;
	}

	display(){
		fill(this.colr);
		noStroke();
		circle(this.x,this.y,this.lsiz);
		noStroke();
		fill(this.colr);
		circle(this.x,this.y,this.diameter);
		noFill();
	}

	update(){
		//Star Movement...
		this.x += this.xv;
		this.y += this.yv;

		// If don't go out of screen
		if(this.x>width){
			this.x=0;
		} else if(this.x<0){
			this.x=width;
		}
		if(this.y>height){
			this.y=0;
		}  else if(this.y<0){
			this.y=height;
		}


		//Twinkel...
		this.lsiz += 0.1;
		if(this.lsiz > this.diameter+2){
			this.lsiz = this.diameter;
		}
	}

}
