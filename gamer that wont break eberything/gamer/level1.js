class level1 {
  constructor() {
    this.children = [];
    let singleBOY = new theBOY(entryX, entryY);
    this.children.push(singleBOY);
    this.children.push(new enime(300, 300, 2));
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 9; j++) {
        this.children.push(new treeMoment(7 + 50 * i, 7 + 50 * j));
      }
    }
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 3; j++) {
        this.children.push(new treeMoment(207 + 50 * i, 7 + 50 * j));
      }
    }
    for (let i = 0; i < 7; i++) {
      for (let j = 0; j < 7; j++) {
        this.children.push(new treeMoment(673 + 50 * i, 7 + 50 * j));
      }
    }
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 9; j++) {
        this.children.push(new treeMoment(7 + 50 * i, 600 + 50 * j));
      }
    }
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 11; j++) {
        this.children.push(new treeMoment(823 + 50 * i, 520 + 50 * j));
      }
    }
  }
  Draw() {
    background(216, 187, 147);
    fill(128, 187, 147);
    rect(0, 0, 1000, 150);
    rect(650, 0, 350, 350);
    rect(800, 500, 200, 500);
    rect(0, 580, 150, 420);
    rect(0, 0, 200, 450);
    for (let i = 0; i < this.children.length; i++) {
      this.children[i].Draw();
    }
  }
}
class treeMoment {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.treeColor = random(0, 175);
  }
  Draw() {
    fill(147, 115, 92);
    rect(this.x, this.y, 20, 40);
    triangle(this.x - 10, this.y + 40, this.x + 30, this.y + 40, this.x + 10, this.y + 20);
    fill(0, 255 - this.treeColor, 0);
    circle(this.x + 10, this.y - 10, 60);
  }
}
