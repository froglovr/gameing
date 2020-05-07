class level4 {
    constructor() {
        this.collision = true;
        this.children = [];
        this.children.push(new theBOY(entryX, entryY));
        this.children.push(new enime(600, 600, 2));
        this.children.push(new enime(400, 700, 2));
        for (let i = 0; i < 21; i++) {
            for (let j = 0; j < 3; j++) {
                this.children.push(new stoneMoment(50 * i - 18, 50 * j - 10));
            }
        }
        for (let i = 0; i < 2; i++) {
            for (let j = 0; j < 4; j++) {
                this.children.push(new stoneMoment(580 + 50 * i, 340 + 50 * j));
            }
        }
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 17; j++) {
                this.children.push(new stoneMoment(845 + 50 * i, 145 + 50 * j));
            }
        }
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 15; j++) {
                this.children.push(new stoneMoment(50 * i - 18, 300 + 50 * j));
            }
        }
        for (let i = 0; i < 14; i++) {
            for (let j = 0; j < 3; j++) {
                this.children.push(new stoneMoment(130 + 50 * i, 850 + 50 * j));
            }
        }
    }
    Draw() {
        background(198, 171, 114);
        fill(107, 91, 63);
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
class stoneMoment {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.treeColor = random(80, 155);
    }
    Draw() {
        fill(27, 50, 39);
        rect(this.x, this.y, 20, 40);
        triangle(this.x - 10, this.y + 40, this.x + 30, this.y + 40, this.x + 10, this.y + 20);
        fill(255 - this.treeColor, 92, 62);
        circle(this.x + 10, this.y - 10, 60);
    }
}