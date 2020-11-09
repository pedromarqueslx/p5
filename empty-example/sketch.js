let x = 5;

function setup() {
    createCanvas(1000, 1000);
}

function draw() {
    background (120, 120, 120);

    strokeWeight(1);
    stroke(1);
    line (width, height, 0, height-10);

    for (var i=1; i<width; i+=10) {

        strokeWeight(1);
        stroke(1);
        line (i, 0, width, i);

        strokeWeight(1);
        stroke(1);
        line (i, height, 0, i);

        strokeWeight(1);
        stroke(1);
        line (i, 0, i, height);

        strokeWeight(1);
        stroke(1);
        line (i, i*200, width, 0);

        strokeWeight(7);
        line (0, 0, width, height);

        strokeWeight(1);
        stroke(1);
        line (0, height, i, i+i*i);

    }

    strokeWeight(6);
    stroke(0);
    fill (255, 255, 0);
    rect (255, 255, 390, 390);

    strokeWeight(6);
    stroke(0);
    fill (255, 255, 0);
    ellipse (200, 200, 310, 310);

    //save("mySVG.svg"); // give file name
    //print("saved svg");
    //noLoop(); // we just want to export once
}


