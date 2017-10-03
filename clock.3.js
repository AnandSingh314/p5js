var center = { x: 0, y: 0 };
var VECTOR = 0;
var wheel = [];
/**
 * setup
 */
function setup() {
    createCanvas(windowWidth, windowHeight);
    angleMode(DEGREES);
    rectMode(CENTER);
    background(0);
    wheel = [
        new Wheel(),
        new Wheel()
    ];
}


/**
 * drawing 
 */
function draw() {
    background(0);
    let hr = hour();
    let mn = minute();
    let sc = second();
    let ms = millis();
    let clock = hr + ':' + mn + ':' + sc;
    fill(255);
    noStroke();
    textSize(14);
    text(clock, 100, 50);

    push();
    translate(width / 2 - 200, height / 2);

    wheel[0].spcl_spokes = 6;
    wheel[0].spoke_width = 1;
    wheel[0].spcl_spoke_width = 1;
    wheel[0].spokes = 30;
    wheel[0]
        .init()
        .rotateLeft()
        .showCenter()
        .display();

    wheel[1].radius = 80;
    wheel[1].spokes = 30;
    wheel[1].spoke_width = 1;
    wheel[1].speed = 1.5;
    wheel[1].spoke_color = color(255);
    wheel[1].spcl_spokes = 6;
    wheel[1].spcl_spoke_width = 1;
    wheel[1].spcl_spoke_color = color(255, 0,20);
    wheel[1]
        .init()
        .rotateLeft()
        .showCenter()
        //.display();
    pop();

    push();
    translate(width / 2 + 200, height / 2);
    wheel[1].speed = 2;
    wheel[1].radius = 150;
    wheel[1].rim_width = 6;
    wheel[1].spoke_color = color(0);
    wheel[1].spcl_spokes = 12;
    wheel[1]
        .init()
        .rotateRight()
        .showCenter()
        .displayWithArc();
    pop();
}




temp = () => {

    strokeWeight(8);
    noFill();

    // dail

    stroke(175);
    ellipse(0, 0, 210, 210);



    // second
    let sc_end = map(sc % 60, 0, 60, 0, 360);

    push();
    strokeWeight(2);
    rotate(sc_end);
    stroke(255, 0, 0);
    line(80, 0, 90, 0);
    pop();

    // stroke(230, 0, 0);
    // arc(0, 0, 250, 250, 0, sc_end);// origin, width, height, start & end angle
    // arc(0, 0,  250, 250, 0, end, PIE);// origin, width, height, start & end angle
    // arc(0, 0,  250, 250, 0, end, OPEN);// origin, width, height, start & end angle
    // arc(0, 0,  250, 250, 0, end, CHORD);// origin, width, height, start & end angle

    // minute
    let mn_end = map(mn % 60, 0, 60, 0, 360);
    push();
    rotate(mn_end);
    stroke(0, 230, 0);
    line(0, 0, 70, 0);
    pop();
    // stroke(0, 230, 0);
    // arc(0, 0, 230, 230, 0, mn_end);


    // hour
    let hr_end = map(hr % 12, 0, 12, 0, 360);
    push();
    rotate(hr_end);
    stroke(0, 0, 230);
    line(0, 0, 50, 0);
    pop();
    // stroke(0, 0, 230);
    // arc(0, 0, 210, 210, 0, hr_end);


    // center
    fill(255);
    noStroke()
    ellipse(0, 0, 8, 8);



}

/**
 *  resizing the canvas with p5 windowResized event
 */
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}






