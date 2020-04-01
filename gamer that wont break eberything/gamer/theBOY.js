class theBOY {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.kiLL = 1;
  }
  Draw() {
    if (boy == 1) { //gray
      fill(81, 93, 93);
      circle(this.x, this.y, 50);
      fill(0, 0, 0);
      quad(this.x, this.y - 10, this.x, this.y + 3, this.x - 23, this.y - 10, this.x - 20, this.y - 15);
      quad(this.x, this.y - 10, this.x, this.y + 3, this.x + 23, this.y - 10, this.x + 20, this.y - 15);
      rect(this.x - 4, this.y, 8, 25);
      //wepon(this.x, this.y);
    }
    if (boy == 2) { //red
      fill(181, 21, 21);
      circle(this.x, this.y, 50);
      fill(0, 0, 0);
      quad(this.x, this.y - 10, this.x, this.y + 3, this.x - 23, this.y - 10, this.x - 20, this.y - 15);
      quad(this.x, this.y - 10, this.x, this.y + 3, this.x + 23, this.y - 10, this.x + 20, this.y - 15);
      rect(this.x - 4, this.y, 8, 25);
      //wepon(this.x, this.y);
    }
    if (boy == 3) { //blue
      fill(22, 73, 179);
      circle(this.x, this.y, 50);
      fill(0, 0, 0);
      quad(this.x, this.y - 10, this.x, this.y + 3, this.x - 23, this.y - 10, this.x - 20, this.y - 15);
      quad(this.x, this.y - 10, this.x, this.y + 3, this.x + 23, this.y - 10, this.x + 20, this.y - 15);
      rect(this.x - 4, this.y, 8, 25);
      //wepon(this.x, this.y);
    }
    if (boy == 4) { //yellow
      fill(241, 196, 15);
      circle(this.x, this.y, 50);
      fill(0, 0, 0);
      quad(this.x, this.y - 10, this.x, this.y + 3, this.x - 23, this.y - 10, this.x - 20, this.y - 15);
      quad(this.x, this.y - 10, this.x, this.y + 3, this.x + 23, this.y - 10, this.x + 20, this.y - 15);
      rect(this.x - 4, this.y, 8, 25);
      //wepon(this.x, this.y);
    }
  }
}/*
function wepon(x, y) {
  if (kiLL == 1) {
    wepon1(x, y);
  } else {
    wepon2(x, y);
  }
}
function wepon1(x, y) { //default
  if (boy == 1) { //gray
    fill(150, 150, 150); //blade
    triangle(x + 33, y - 23, x + 38, y - 23, x + 35, y - 33);
    rect(x + 33, y - 23, 5, 30);
    fill(211, 211, 211); //grip
    rect(x + 34, y + 8, 3, 15);
    fill(124, 124, 124); //guard & pommel
    rect(x + 28, y + 5, 15, 3);
    circle(x + 36, y + 20, 7);
  }
  if (boy == 2) { //red
    fill(124, 124, 124); //haft
    rect(x + 36, y - 30, 3, 55);
    fill(211, 211, 211); //blade
    triangle(x + 20, y - 23, x + 48, y - 29, x + 48, y - 16);
  }
  if (boy == 3) { //blue
    fill(124, 124, 124); //haft
    rect(x, y + 16, 55, 3);
    fill(211, 211, 211); //point
    triangle(x + 88, y + 18, x + 50, y + 25, x + 50, y + 10);
  }
  if (boy == 4) { //yellow
    fill(211, 211, 211); //shield
    arc(x + 18, y, 60, 60, 5 * PI / 3, PI / 3, CHORD);
  }
}
function wepon2(x, y) { //active
  if (boy == 1) { //gray
    fill(150, 150, 150); //blade
    triangle(x + 33, y - 23, x + 38, y - 23, x + 35, y - 33);
    rect(x + 33, y - 23, 5, 30);
    fill(211, 211, 211); //grip
    rect(x + 34, y + 8, 3, 15);
    fill(124, 124, 124); //guard & pommel
    rect(x + 28, y + 5, 15, 3);
    circle(x + 36, y + 20, 7);
  }
  if (boy == 2) { //red
    fill(124, 124, 124); //haft
    rect(x + 36, y - 30, 3, 55);
    fill(211, 211, 211); //blade
    triangle(x + 20, y - 23, x + 48, y - 29, x + 48, y - 16);
  }
  if (boy == 3) { //blue
    fill(124, 124, 124); //haft
    rect(x + 50, y + 16, 55, 3);
    fill(211, 211, 211); //point
    triangle(x + 138, y + 18, x + 100, y + 25, x + 100, y + 10);
  }
  if (boy == 4) { //yellow
    fill(211, 211, 211); //shield
    arc(x + 18, y, 60, 60, PI / 6, 5 * PI / 6, CHORD); //change coords ti put shield on hed
  }
}*/
