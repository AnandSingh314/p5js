/**
 * setting up the canvas for baunsing balls.
 * @author AnandSingh
 */
var balls = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
    let numberOfBalls = random(1, 5) * 100;
    for (var index = 0; index < numberOfBalls; index++) {
        // balls[index] = new Bubble();
        let x = random(0, width);
        let y = random(0, height);
        let speed = random(-9, 9);
        let colour = color(0);
        balls.push(new Bubble(x, y, speed, colour));
    }


}

/**
 * Drawing the logics
 */
function draw() {
    // background
    background(0);

    // for (var index = 0; index < balls.length; index++) {
    //     balls[index].display();
    //     balls[index].bounce();
    //     balls[index].move();
    // }
    
    balls.forEach(ball => { ball.display(); ball.bounce(); ball.shiver(); });
    
    textSize(32);
    fill(0, 255, 255);
    text("Bouncing Balls", 10, 60);
    // removing after some time;
    //balls.splice(0,1);

}

/**
 *  resizing the canvas with p5 windowResized event
 */
function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
}

/**
 *  mousePressed to call click function on each balls
 */
function mousePressed() {
    balls.forEach(ball => {
        let d = dist(ball.x, ball.y, mouseX, mouseY);
        if (d <= ball.radius)
            ball.clicked();
    });
}

/**
 * adding new object on mousePressed
 */
function mousePressed1() {
    balls.push(new Bubble(mouseX, mouseY, 4, color(0)));
    balls.splice(0, 1);
}

/**
 * removing object on keyPressed
 */
function keyPressed1() {
    balls.splice(0, 1);
}


/**
 * adding new object on mouseDragged
 * remove 1 for correction
 */
function mouseDragged1() {
    balls.push(new Bubble(mouseX, mouseY, 5, color(0)));
    balls.splice(0, 1);
}


/**
 * adding & removing object on mouseMoved
 * remove 1 for correction
 */
function mouseMoved() {
    balls.push(new Bubble(mouseX, mouseY, 5, color(0)));
    balls.splice(0, 1);
}




/**
 *  declaring the objects 
 * */
let ball = {
    x: 300,
    y: 300,
    xspeed: 4,
    yspeed: -3,
    xShiverOffset: -1,
    yShiverOffset: -1,
    display: function () {
        // ellipse
        stroke(0, 150, 255);
        strokeWeight(2);
        // stroke(255);
        noFill();
        ellipse(this.x, this.y, 24, 24);
    },
    bounce: function () {
        if (this.x >= width || this.x < 0) {
            this.xspeed = -1 * this.xspeed;
        }
        if (this.y >= height || this.y < 0) {
            this.yspeed = -1 * this.yspeed;
        }
    },
    shiver: function () {
        this.x += random(-this.xShiverOffset, this.xShiverOffset);
        this.y += random(-this.yShiverOffset, this.yShiverOffset);
    },
    move: function () {
        ball.x += ball.xspeed;
        ball.y += ball.yspeed;
    }
};


/**
 * shvering movement
 * version 2
 */
function shiver() {
    ball.x += random(-1, 1);
    ball.y += random(-1, 1);
}

/**
 * version 1
 */
function move() {
    ball.x += ball.xspeed;
    ball.y += ball.yspeed;
}

/**
 * 
 */
function bounce() {
    if (ball.x >= width || ball.x < 0) {
        ball.xspeed = -1 * ball.xspeed;
    }
    if (ball.y >= height || ball.y < 0) {
        ball.yspeed = -1 * ball.yspeed;
    }
}

/**
 * 
 */
function display() {
    // ellipse
    stroke(0, 150, 255);
    strokeWeight(5);
    noFill();
    ellipse(ball.x, ball.y, 24, 24);
}



