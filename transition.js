let angle = 0;

/**
 * setup
 */
function setup() {
    createCanvas(windowWidth, windowHeight);
    angleMode(DEGREES);
    rectMode(CENTER);
    background(0);
}


/**
 * drawing
 * => order of operation is imp
 * 1. translate(x,y): displacement of the origin
 *                 origin(0,0) will change to origin(30,30) after translate(30,30)
 *                 and rect(0,0,100,50) will come at (30,30) of 100 X 50 dimension 
 * 2. rectMode(CENTER): CENTER, ??
 * 3. angleMode(DEGREES): rotation mode like dregree or radian base
 * 4. rotate(50): rotation angle   
 * 5. push() & pop(): just to save the state for functions 
 */
function draw() {
    background(0);

    push();
    translate(300, 300);
    rotate(angle);
    fill(0, 255, 0);
    rect(0, 0, 200, 100);
    pop();

    translate(900, 300);
    rotate(-angle);
    fill(0, 100, 255);
    rect(0, 0, 200, 100);

    angle += 5;

    // translate(mouseX, mouseY);
    // rect(0, 0, 200, 100);
    // rect(200, 200, 100, 50);
}




/**
 *  resizing the canvas with p5 windowResized event
 */
function windowResized(){   
    resizeCanvas(windowWidth, windowHeight);
}






