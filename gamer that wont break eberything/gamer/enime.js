class enime {
    constructor(x, y, colro) {
        this.x = x;
        this.y = y;
        this.isDied = false;
        this.colro = colro
        this.collision = true;
        this.enime = new enimeOrbe(this.x, this.y, 50);
        this.colliders = [];
        this.colliders.push(this.enime);
    }
    Draw() {
        if (!this.isDied) {
            if (this.colro == 1) { //sletleton
                fill(50);
                circle(this.x, this.y, 50);
                fill(240, 240, 240);
                circle(this.x, this.y, 48);
                fill(50);
                circle(this.x - 15, this.y + 3, 10);
                circle(this.x + 15, this.y + 3, 13);
            } else { //zomby
                fill(40, 175, 83);
                circle(this.x, this.y, 50);
                fill(55, 81, 40);
                circle(this.x - 15, this.y + 3, 10);
                circle(this.x + 15, this.y + 3, 13);
            }
        }
    }
    Move(theBOY) {
        if (Math.abs(this.x - theBOY.x) > Math.abs(this.y - theBOY.y)) {
            if (this.x - theBOY.x > 0) {
                this.x -= 40;
                this.enime.x -= 40;
            } else {
                this.x += 40;
                this.enime.x += 40;
            }
        } else {
            if (this.y - theBOY.y > 0) {
                this.y -= 40;
                this.enime.y -= 40;
            } else {
                this.y += 40;
                this.enime.y += 40;
            }
        }
    }
}
