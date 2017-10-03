/*
  => Setup function called just once 
  => draw function called again & again
*/
function setup() {
    // 600x600 canvas
    //createCanvas(600, 600);
    
    // full window canvas
    createCanvas(window.innerWidth, window.innerHeight);

    background(0);
}


// 6. Use of random function from p5 js.
/**
 * width: provided by p5, has width of canvas.
 * height: provided by p5, has height of canvas.
 */
var colour = { r: 255, b: 0, g: 0, a: 0 };
var spot = { x: 0, y: 0 };
function draw() {
    spot.x = random(0, width);
    spot.y = random(0, height);
    colour.r = random(0, 255);
    colour.b = random(0, 255);
    colour.g = random(0, 255);
    colour.a = random(100, 200);

    // ellipse
    noStroke();
    fill(colour.r, colour.g, colour.b, colour.a);
    ellipse(spot.x, spot.y, 2, 2);
}

// something like this. :) 
function mouseMoved6() {
    let x = mouseX;
    let y = mouseY;
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    // ellipse
    fill(red, green, blue);
    ellipse(x, y, 20, 20);
}

// 5. Math: map
/**
 * Math api of P5 js provides set of function like map. 
 * Map matches the value from range(x,y) => range(a,b) 
 * 
 */
var red = 0;
var blue = 0;
function draw5() {
    // background
    let green = Math.round((red + blue) / 2);
    red = map(mouseX, 0, 600, 0, 255);
    blue = map(mouseY, 0, 600, 0, 255);
    background(red, green, blue);

    // ellipse
    fill(255 - red, 255 - Math.round((red + blue) / 2), 255 - blue);
    ellipse(mouseX, mouseY, 50, 50);
}



// 4. use of json obj and conditional drawing;
/* a) declare variable
   b) initialize
   c) Use.
*/
var dia = 10;
var loc = { x: 0, y: 0 };
function draw4() {
    //fill('green');
    //noStroke();
    background(0);
    stroke('green');
    strokeWeight(6);
    noFill();
    ellipse(loc.x, loc.y, dia, dia);
    loc.x++;
    loc.y++;
    loc.x = loc.y = loc.x === 400 ? 0 : loc.x;
    //dia = dia<100 ? dia+1 : dia--;
}


//3. Event Fn: mouse pressed 
/**
 * => P5 events has function & some contant values. 
 *    E.g. mouseX , mouseY as values.
 *         mousePressed() mouseClicked() or mouseMoved() as function  
 */
function draw3() {

}
function mousePressed3() {
    ellipse(mouseX, mouseY, 5, 5);
    // prevent default
    return false;
}

//2. Events: mouseX and mouseY 
function draw2() {
    // backgroud
    background(100);

    // ellipse
    fill('yellow');
    noStroke();
    ellipse(mouseX, mouseY, 100, 100);


    // rectangle
    fill('blue');
    rect(300, 300, 50, 50);
}


// 1. draw based on events
function drawShapes() {
    background(200, 200, 200);
    ellipse(200, 200, 50, 50);

    push();
    //background(0, 255, 0);
    stroke(0, 255, 0, 200);
    strokeWeight(10);
    rect(100, 200, 75, 50);
    fill('blue');
    //clear();
    // smooth();
}


