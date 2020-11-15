function setup() {
    createCanvas(windowWidth, windowHeight);
    noStroke();
    fill(0, 102);
    fill (255, 255, 122);
}

function draw() {
    background (0);

    var count = 0;
    for (var x=50; x<=width-50; x+=50) {
        for (var y=50; y<=height-50; y+=50) {
            stroke(count*1);
            strokeWeight(0.9);
            //fill (255, 255, 122);
            line (x, y, x+5, y+5);
            line (x, y, x-5, y+5);
            stroke(255);
            strokeWeight(3.1);
            line (x, y, width/2, height/2);
            //line (x, y, width/133, height/133);
            stroke(33);
            strokeWeight(1.6);
            fill (255, 255, 0);
            triangle (x, y, 12, 30, 30, 30);
            count++;
        }
    }
    //ellipse (mouseX, mouseY, 20, 20);


/*    var grey = map(mouseX, 0, width, 0, 255);
    fill(grey);
    ellipse(mouseX, mouseY, 30, 30);*/
}
