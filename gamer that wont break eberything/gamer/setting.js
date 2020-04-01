function setting() {
  homunculus = new theBOY(500, 750)
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
  text('CHARACTER SELECT', 500, 600);
  text('BACK', 500, 635);
  pop();
  if (optionSetting == 3) { //character select
    fill (240, 60, 60);
    rect (295, 595, 50, 5);
    rect (655, 595, 50, 5);
  }
  if (optionSetting == 2) { //back
    fill (240, 60, 60);
    rect (410, 630, 50, 5);
    rect (540, 630, 50, 5);
  }
  homunculus.Draw(500, 750);
}
