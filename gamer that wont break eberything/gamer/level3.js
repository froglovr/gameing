class level3 {
    constructor() {
        this.collision = true;
        this.children = [];
        this.children.push(new theBOY(entryX, entryY));
        this.children.push(new enime(250, 550, 1));
        this.children.push(new enime(550, 300, 1));
        this.children.push(new enime(800, 750, 1));
        for (let i = 0; i < 21; i++) {
            for (let j = 0; j < 4; j++) {
                this.children.push(new deadMoment(7 + 50 * i, 50 * j - 7));
            }
        }
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 17; j++) {
                this.children.push(new deadMoment(7 + 50 * i, 193 + 50 * j));
            }
        }
        for (let i = 0; i < 11; i++) {
            for (let j = 0; j < 3; j++) {
                this.children.push(new deadMoment(527 + 50 * i, 895 + 50 * j));
            }
        }
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 7; j++) {
                this.children.push(new deadMoment(157 + 50 * i, 695 + 50 * j));
            }
        }
    }
    Draw() {
        background(198, 171, 114);
        fill(107, 91, 63);
        rect(0, 0, 1000, 190);
        rect(0, 850, 1000, 150);
        rect(0, 0, 153, 1000);
        rect(0, 652, 303, 400);
        fill(193);
        rect(303, 850, 200, 300)
        if (locks) {
            fill(223);
            rect(333, 850, 140, 300);
        } else {
            this.lock(325, 900);
            this.lock(430, 900);
        }
        for (let i = 0; i < this.children.length; i++) {
            this.children[i].Draw();
        }
    }
    lock(x, y) {
        fill(129);
        circle(x + 24, y + 18, 30);
        fill(193);
        circle(x + 24, y + 18, 15);
        fill(70);
        rect(x + 6, y + 19, 37, 30, 5);
        fill(25);
        circle(x + 24, y + 31, 9);
        rect(x + 22, y + 34, 5, 6);
        rect(x + 20, y + 40, 9, 4);
    }
}
class deadMoment {
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