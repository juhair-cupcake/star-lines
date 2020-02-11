class boxName {
	constructor(){
		this.x = windowWidth/2;
		this.y = windowHeight/2;
		this.colr = color( 40,30,73 );
		this.txsz = map(width,50,1020,0,80);
		this.sizx = map(width,50,1020,10,550);
		this.sizy = map(width,50,1020,10,250);
	}

	display(){
		fill(this.colr);
		noStroke();
		rect(this.x , this.y , this.sizx , this.sizy , 20);
		rectMode(CENTER);
		fill(0);
		textFont('Tahoma');
		textSize(this.txsz);
		textAlign(CENTER,CENTER);
		text("Juhair Islam",this.x,this.y);
	}

	update(){
	}
}
