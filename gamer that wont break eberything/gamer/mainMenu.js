function mainMenu() {
  background (0, 0, 0);
  fill(255, 255, 255);
  push();
  textFont('Papyrus', 100);
  textStyle(ITALIC);
  textAlign(CENTER, CENTER);
  text('ForwardSlash', 500, 450);
  pop();
  push();
  textFont('Georgia', 30);
  textAlign(CENTER, CENTER);
  text('START', 500, 600);
  text('SETTINGS', 500, 635);
  text('QUIT', 500, 670);
  pop();
  if (optionMenu == 3) { //start
    fill (240, 60, 60);
    rect (400, 595, 50, 5);
    rect (550, 595, 50, 5);
  }
  if (optionMenu == 2) { //settings
    fill (240, 60, 60);
    rect (375, 630, 50, 5);
    rect (575, 630, 50, 5);
  }
  if (optionMenu == 1) { //quit
    fill (240, 60, 60);
    rect (410, 665, 50, 5);
    rect (540, 665, 50, 5);
  }
}
