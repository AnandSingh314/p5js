
/**
 * gear consist of wheels, this is individual wheel,
 * 
 * 1. display
 * 2. moveRight
 * 3. moveLeft
 * 4. --
 */
function Wheel() {
    this.radius = 100; // radius of wheel, from axis point to mid of thickness.
    this.rim_width = 6; // thikness of outer rim of wheel
    this.axis_point = { x: 0, y: 0 }; // center of whell
    this.spokes = 60;
    this.spoke_width = 3;
    this.spoke_color = color(255);

    this.spcl_spokes = 4;
    this.spcl_spoke_width = 6;
    this.spcl_spoke_height = 10;
    this.spcl_spoke_color = color(50, 0, 255);
    this.speed = 1;
    this.vector = 0;
    let r, s, r_hr, s_hr;
    this.init = () => {
        r = this.radius - this.rim_width / 2;
        s = this.radius + this.rim_width / 2;
        r_hr = this.radius - this.spcl_spoke_height / 2;
        s_hr = this.radius + this.spcl_spoke_height / 2;
        return this;
    }

    this.showCenter = () => {
        fill(255);
        noStroke();
        ellipse(this.axis_point.x, this.axis_point.y, 8, 8);
        return this;
    }

    this.display = () => {
        push();
        // translate(this.axis_point.x, this.axis_point.y);
        noFill();
        // stroke(255);
        // ellipse(0, 0 , 300, 300);// origin, width, height
        let shift_angle = Math.floor(map(1, 0, this.spokes, 0, 360));
        let mod_factor = this.spokes / this.spcl_spokes;
        for (let i = 1; i <= this.spokes; i++) {
            if (i % mod_factor !== 0) {
                push();
                stroke(this.spoke_color);
                strokeWeight(this.spoke_width);
                rotate(shift_angle * i);
                line(r, 0, s, 0);
                pop();
            } else {
                // console.log(shift_angle, i);
                push();
                stroke(this.spcl_spoke_color);
                strokeWeight(this.spcl_spoke_width);
                rotate(shift_angle * i);
                line(r_hr, 0, s_hr, 0);
                pop();
            }
        }
        pop();
    }

    this.displayWithArc = () => {
        push();
        // translate(this.axis_point.x, this.axis_point.y);
        noFill();
        // stroke(255);
        // ellipse(0, 0 , 300, 300);// origin, width, height
        let shift_angle = Math.floor(map(1, 0, this.spokes, 0, 360));
        let mod_factor = this.spokes / this.spcl_spokes;
        for (let i = 1; i <= this.spokes; i++) {
            push();
            rotate(shift_angle * i);
            strokeWeight(this.rim_width);
            if (i % mod_factor !== 0 && false) {
                stroke(this.spoke_color);
                // line(r, 0, s, 0);
                arc(0, 0, r, r, 0, 30);
            } else {
                // console.log(shift_angle, i);
                stroke(this.spcl_spoke_color);
                // strokeWeight(this.spcl_spoke_width);
                arc(0, 0, r, r, 0, 5);
                // line(r_hr, 0, s_hr, 0);
            }
            pop();
        }
        pop();
    }

    this.rotateRight = () => {
        rotate(this.vector += this.speed);
        flush();
        return this;
    }

    this.rotateLeft = () => {
        rotate(this.vector -= this.speed);
        flush();
        return this;
    }

    flush = () => {
        if (this.vector === 60 * 10)
            this.vector = 0;
    }

}
