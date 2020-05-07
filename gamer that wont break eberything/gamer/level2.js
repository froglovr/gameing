class level2 {
    constructor() {
        this.collision = true;
        this.children = [];
        this.children.push(new theBOY(entryX, entryY));
        this.children.push(new enime(600, 600, 1));
        this.children.push(new enime(400, 700, 1));
        for (let i = 0; i < 21; i++) {
            for (let j = 0; j < 3; j++) {
                this.children.push(new rockMoment(50 * i - 18, 50 * j - 10));
            }
        }
        for (let i = 0; i < 2; i++) {
            for (let j = 0; j < 4; j++) {
                this.children.push(new rockMoment(580 + 50 * i, 340 + 50 * j));
            }
        }
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 17; j++) {
                this.children.push(new rockMoment(845 + 50 * i, 145 + 50 * j));
            }
        }
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 15; j++) {
                this.children.push(new rockMoment(50 * i - 18, 300 + 50 * j));
            }
        }
        for (let i = 0; i < 14; i++) {
            for (let j = 0; j < 3; j++) {
                this.children.push(new rockMoment(130 + 50 * i, 850 + 50 * j));
            }
        }
    }
    Draw() {
        background(187, 177, 162);
        fill(86, 82, 75);
        rect(0, 0, 1000, 150);
        rect(850, 0, 150, 1000);
        rect(0, 850, 1000, 150);
        rect(0, 300, 155, 700);
        rect(585, 345, 120, 205);
        for (let i = 0; i < this.children.length; i++) {
            this.children[i].Draw();
        }
    }
}
class rockMoment {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    Draw() {
        fill(164, 175, 169);
        beginShape();
        vertex(this.x+9, this.y+17);
        vertex(this.x+24, this.y+8);
        vertex(this.x+53, this.y+9);
        vertex(this.x+58, this.y+12);
        vertex(this.x+22, this.y+22);
        endShape(CLOSE);
        fill(139, 149, 143);
        beginShape();
        vertex(this.x+22, this.y+22);
        vertex(this.x+58, this.y+12);
        vertex(this.x+70, this.y+38);
        vertex(this.x+66, this.y+54);
        vertex(this.x+46, this.y+56);
        vertex(this.x+36, this.y+49);
        endShape(CLOSE);
        fill(72, 78, 82);
        beginShape();
        vertex(this.x+9, this.y+17);
        vertex(this.x+22, this.y+22);
        vertex(this.x+36, this.y+49);
        vertex(this.x+14, this.y+50);
        vertex(this.x+6, this.y+31);
        endShape(CLOSE);
        fill(46, 47, 46);
        beginShape();
        vertex(this.x+14, this.y+50);
        vertex(this.x+36, this.y+49);
        vertex(this.x+46, this.y+56);
        endShape(CLOSE);
    }
}