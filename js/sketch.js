let star = [];
let i,j,n=70;
let bx;
let lisize
let extrac;

function setup() {
  print("Made By Juhair Islam...");
  print("All coppyright isue Bla Bla... frome Juhair Islam");
  createCanvas(windowWidth,windowHeight);
  extrac = createGraphics(windowWidth,windowHeight*3);
  extrac.clear();

  lisize=map(width,50,1020,10,100);
  for(i=0;i<n;i++){
  	star[i] = new str();
  }
  extrac.bx = new boxName();

}

function draw() {
  background(0);

	//Star OBJ
	for(i=0;i<n;i++){
		star[i].display();
		star[i].update();


		//Line Drawing...
		for(j=0;j<n;j++){
			let hit = collideCircleCircle(star[i].x,star[i].y,lisize,star[j].x,star[j].y,lisize);
			if(hit){
				stroke(50);
				line(star[i].x,star[i].y,star[j].x,star[j].y);
			}
			let hit2 = collidePointCircle(mouseX,mouseY,star[j].x,star[j].y,lisize*2);
			if(hit2){
				stroke(70);
				line(mouseX,mouseY,star[j].x,star[j].y);
			}
		}
	}
	//End OBJ

  // Canves no 2
  image(extrac,0,0);
  extrac.bx.display();
  extrac.bx.update();
}
