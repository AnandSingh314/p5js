var center = { x: 0, y: 0 };
var mic; 
/**
 * setup
 */
function setup() {
    createCanvas(windowWidth, windowHeight);
    angleMode(DEGREES);
    rectMode(CENTER);
    background(0);
    mic = new p5.AudioIn();
    mic.start();
}


/**
 * drawing 
 */
function draw() {
    background(0);
    center.x = width / 2;
    center.y = height / 2;

    let hr = hour();
    let mn = minute();
    let sc = second();
    let ms = millis();

    push();

        translate(center.x, center.y);
        rotate(-90);
        // strokeWeight(4);
        // noFill();
        // stroke(255);
        // ellipse(0, 0 , 300, 300);// origin, width, height

        strokeWeight(8);
        noFill();
        
        // dail

        stroke(175);
        ellipse(0, 0, 210, 210);

        

        // second
        let sc_end = map(sc % 60, 0, 60, 0, 360);

        push();
            rotate(sc_end);
            stroke(255,0,0);
            line(0, 0, 90, 0);
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
        
        
        // mic visualiser
        let level =  mic.getLevel();
        stroke(200, 100, 250);
        strokeWeight(2);
        noFill()
        for (var index = 0; index < 10; index++) {
            ellipse(0, 0, level*1000*index, level*1000*index);
        }
  

    pop();

    

    let clock = hr + ':' + mn + ':' + sc ;
    fill(255);
    noStroke();
    textSize(14);
    text(clock, 100, 50);

}


/**
 *  resizing the canvas with p5 windowResized event
 */
function windowResized(){   
    resizeCanvas(windowWidth, windowHeight);
}






