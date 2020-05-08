class level5 {
    constructor() {
        this.collision = true;
        this.children = [];
        this.children.push(new theBOY(entryX, entryY));
        this.children.push(new enime(480, 240, 1));
        this.children.push(new enime(250, 450, 1));
        this.children.push(new enime(270, 800, 2));
        this.children.push(new enime(500, 810, 1));
        this.children.push(new enime(720, 650, 2));
        for (let i = 0; i < 11; i++) {
            for (let j = 0; j < 3; j++) {
                this.children.push(new spookMoment(50 * i - 18, 50 * j - 10));
            }
        }
        for (let i = 0; i < 6; i++) {
            for (let j = 0; j < 3; j++) {
                this.children.push(new spookMoment(705 + 50 * i, 50 * j - 10 ));
            }
        }
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 17; j++) {
                this.children.push(new spookMoment(0 + 50 * i, 150 + 50 * j));
            }
        }
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 17; j++) {
                this.children.push(new spookMoment(845 + 50 * i, 145 + 50 * j));
            }
        }
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 6; j++) {
                this.children.push(new spookMoment(400 + 50 * i, 400 + 50 * j));
            }
        }
        for (let i = 0; i < 14; i++) {
            for (let j = 0; j < 3; j++) {
                this.children.push(new spookMoment(150 + 50 * i, 895 + 50 * j));
            }
        }
    }
    Draw() {
        background(19, 61, 30);
        fill(13, 40, 20);
        rect(0, 0, 550, 155);
        rect(843, 0, 150, 1000);
        rect(0, 300, 155, 375);
        rect(0, 0, 163, 1000)
        rect(700, 0, 400, 155);
        rect(390, 380, 225, 345);
        rect(0, 875, 1000, 200);
        for (let i = 0; i < this.children.length; i++) {
            this.children[i].Draw();
        }
    }
}
class spookMoment {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.moveIdiot = random(0, 20);
        this.stoneColor = random(50, 150)
    }
    Draw() {
        fill(this.stoneColor);
        rect(this.x + this.moveIdiot, this.y, 40, 60);
        circle(this.x + this.moveIdiot + 20, this.y, 30);
    }
}