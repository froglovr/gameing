class level4 {
    constructor() {
        this.collision = true;
        this.children = [];
        this.children.push(new theBOY(entryX, entryY));
        this.children.push(new enime(400, 330, 2));
        this.children.push(new enime(750, 500, 2));
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 3; j++) {
                this.children.push(new stoneMoment(50 * i - 18, 50 * j - 10));
            }
        }
        for (let i = 0; i < 7; i++) {
            for (let j = 0; j < 3; j++) {
                this.children.push(new stoneMoment(655 + 50 * i,50 * j - 10 ));
            }
        }
        for (let i = 0; i < 6; i++) {
            for (let j = 0; j < 6; j++) {
                this.children.push(new stoneMoment(50 * i - 18, 150 + 50 * j - 10));
            }
        }
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 10; j++) {
                this.children.push(new stoneMoment(845 + 50 * i, 145 + 50 * j));
            }
        }
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 4; j++) {
                this.children.push(new stoneMoment(50 * i - 26, 440 + 50 * j));
            }
        }
    }
    Draw() {
        background(255,224,171);
        fill(218,185,132);
        rect(0, 0, 500, 155);
        rect(850, 0, 150, 661);
        rect(0, 300, 155, 375);
        rect(0, 0, 310, 465)
        rect(655, 0, 400, 155);
        fill(54, 72, 175);
        rect(0, 661, 1000, 400)
        for (let i = 0; i < this.children.length; i++) {
            this.children[i].Draw();
        }
    }
}
class stoneMoment {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.treeColor = random(80, 155);
    }
    Draw() {
        fill(255, 213, 125);
        beginShape();
        vertex(this.x+9, this.y+17);
        vertex(this.x+24, this.y+8);
        vertex(this.x+53, this.y+9);
        vertex(this.x+58, this.y+12);
        vertex(this.x+22, this.y+22);
        endShape(CLOSE);
        fill(255, 201, 119);
        beginShape();
        vertex(this.x+22, this.y+22);
        vertex(this.x+58, this.y+12);
        vertex(this.x+70, this.y+38);
        vertex(this.x+66, this.y+54);
        vertex(this.x+46, this.y+56);
        vertex(this.x+36, this.y+49);
        endShape(CLOSE);
        fill(241, 187, 101);
        beginShape();
        vertex(this.x+9, this.y+17);
        vertex(this.x+22, this.y+22);
        vertex(this.x+36, this.y+49);
        vertex(this.x+14, this.y+50);
        vertex(this.x+6, this.y+31);
        endShape(CLOSE);
        fill(200, 138, 64);
        beginShape();
        vertex(this.x+14, this.y+50);
        vertex(this.x+36, this.y+49);
        vertex(this.x+46, this.y+56);
        endShape(CLOSE);
        fill(146, 91, 35);
        beginShape();
        endShape();
    }
}