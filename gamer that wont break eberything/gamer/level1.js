class level1 {
  constructor() { 
    this.children = [];
    let counter = 0;
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 9; j++) {
        this.children[counter] = new treeMoment(7+50*i, 7+50*j);
        counter++;
      }
    }
    for (let i = 0; i < 7; i++) {
      for (let j = 0; j < 3; j++) {
        this.children[counter] = new treeMoment(207+50*i, 7+50*j);
        counter++;
      }
    }
    for (let i = 0; i < 7; i++) {
      for (let j = 0; j < 7; j++) {
        this.children[counter] = new treeMoment(673+50*i, 7+50*j);
        counter++;
      }
    }
  }
  level1Draw() {
    background(216, 187, 147);
    fill (128, 187, 147);
    rect (0, 0, 550, 150);
    rect (650, 0, 350, 350);
    rect (800, 500, 200, 500);
    rect (0, 580, 125, 420);
    rect (0, 0, 200, 450);
    for (let i = 0; i < this.children.length; i++) {
      this.children[i].treeDraw();
    }

    theBOY(boyX, boyY);
  }
}
class treeMoment {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.treeColor = random (0, 175);
    this.frame = 0;
  }
  treeDraw() {
    fill (147, 115, 92);
    rect (this.x, this.y, 20, 40);
    triangle (this.x-10, this.y+40, this.x+30, this.y+40, this.x+10, this.y+20);
    fill (0, 255-this.treeColor, 0);
    circle (this.x+10, this.y-10, 60);
  }
  treeWogle() {
    this.frame++; 
    fill(0, 255-this.treeColor, 0);
    if (this.frame > 3) {
      this.frame = 0;
    }
    if (this.frame == 0) {
      print('frame 0');
      circle (this.x+10, this.y-10, 60);
    }
    if (this.frame == 1) {
      print('frame 1');
      circle (this.x+12, this.y-10, 60);
    }
    if (this.frame == 2) {
      print('frame 2');
      circle (this.x+15, this.y-10, 60);
    }
    if (this.frame == 3) {
      print('frame 3');
      circle (this.x+12, this.y-10, 60);
    }
  }
}
