/**
 * Js Constructor function and classes. Also constructor.
 */
function Bubble(x, y, speed, colour) {
    // this.x= random(0, width);
    // this.y= random(0, height);
    this.x = x;
    this.y = y;
    this.radius = 12;
    this.xspeed = speed;
    this.yspeed = -speed;
    this.xShiverOffset = -1;
    this.yShiverOffset = -1;
    this.color = colour;
    this.outline = {
        color: color(0, 150, 255),
        weight: 2
    };

    this.display = function () {
        // ellipse
        stroke(this.outline.color);
        strokeWeight(this.outline.weight);
        // stroke(255);
        // noFill();
        fill(this.color);
        ellipse(this.x, this.y, this.radius*2, this.radius*2);
    };

    this.bounce = function () {
        if (this.x >= width || this.x < 0) {
            this.xspeed = -1 * this.xspeed;
        }
        if (this.y >= height || this.y < 0) {
            this.yspeed = -1 * this.yspeed;
        }
    };

    this.shiver = function () {
        this.x += random(-this.xShiverOffset, this.xShiverOffset);
        this.y += random(-this.yShiverOffset, this.yShiverOffset);
    };

    this.move = function () {
        this.x += this.xspeed;
        this.y += this.yspeed;
    }

    this.clicked = function () {
        this.color = color(0, 150, 255);
        this.outline.color = color(0);
    }
}