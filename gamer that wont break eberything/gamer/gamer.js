var gaming = 0; // 0 = main menu | 1 = settings | 2 = level 1 | 3 = level 2 | 4 = level 3 | 5 = level 4 | 6 = level 5 | 7 = help | 
var optionMenu = 3;
var optionSetting = 3;
var buffer = 0;
var stuopid = 0;
var boy = 1;
var boyX = 500;
var boyY = 500;
var wait = 0;
var entryX = 500;
var entryY = 900;
var levels = [];
var enme = false;
var health = 3;
var locks = false;
function setup() {
  createCanvas(1000, 1000);
  background(0, 0, 0);
  noStroke();
  frameRate(12);
  levels[0] = new level1();
  levels[1] = new level2();
  levels[2] = new level3();
  levels[3] = new level4();
  levels[4] = new level5();
}
function draw() {
  if (gaming == 0) {
    mainMenu();
  }
  if (gaming == 1) {
    setting();
  }
  if (gaming == 2) {
    levels[0].Draw();
    if (levels[0].children[0].x > 1000) { //to level 2 from 1
      levels[1].children[0].x = 40;
      levels[1].children[0].y = 200;
      gaming = 3;
    }
  }
  if (gaming == 2) {
    levels[0].Draw();
    if (levels[0].children[0].x < 0) { //to level 3 from 1
      levels[2].children[0].x = 960;
      levels[2].children[0].y = 520;
      gaming = 4;
    }
  }
  if (gaming == 2) {
    levels[0].Draw();
    if (levels[0].children[0].y > 1000) { //to level 4 from 1
      levels[3].children[0].x = 580;
      levels[3].children[0].y = 40;
      gaming = 5;
    }
  }
  if (gaming == 3) {
    levels[1].Draw();
    if (levels[1].children[0].x < 0) { //to level 1 from 2
      levels[0].children[0].x = 960;
      levels[0].children[0].y = 400;
      gaming = 2;
    }
  }
  if (gaming == 4) {
    levels[2].Draw();
    if (levels[2].children[0].x > 1000) { //to level 1 from 3
      levels[0].children[0].x = 40;
      levels[0].children[0].y = 520;
      gaming = 2;
    }
  }
  if (gaming == 5) {
    levels[3].Draw();
    if (levels[3].children[0].y < 0) { //to level 1 from 4
      levels[0].children[0].x = 500;
      levels[0].children[0].y = 960;
      gaming = 2;
    }
  }
  if (gaming == 4) {
    levels[2].Draw();
    if (levels[2].children[0].y > 1000) { //to level 5 from 3
      levels[4].children[0].x = 620;
      levels[4].children[0].y = 40;
      gaming = 6;
    }
  }
  if (gaming == 6) {
    levels[4].Draw();
    if (levels[4].children[0].y < 0) { //to level 3 from 5
      levels[2].children[0].x = 400;
      levels[2].children[0].y = 960;
      gaming = 4;
    }
  }
  if (gaming == 7) {
    help();
  }
  if (2 <= gaming && gaming <= 6) {
    collisioner(levels[gaming - 2].children);
  }
}
function collisioner(screen) {
  touchable = [];
  for (i = 0; i < screen.length; i++) {
    if (screen[i].collision) {
      for (j = 0; j < screen[i].colliders.length; j++) {
        touchable.push(screen[i].colliders[j]);
      }
    }
  }
  if (touchable.length != 0) {
    for (i = 0; i < touchable.length; i++) {
      for (j = 1; j < touchable.length; j++) {
        observer.inCollision(touchable[i], touchable[j])
      }
    }
  }

}
function keyPressed() {
  console.log('x ' + mouseX + ' y ' + mouseY);
  if (gaming == 0) { //main menu
    if (keyCode === UP_ARROW) {
      optionMenu++;
    }
    if (keyCode == DOWN_ARROW) {
      optionMenu--;
    }
    if (keyCode == 32) {
      if (optionMenu == 3) { //gaming time
        gaming = 2;
      }
      if (optionMenu == 2) { //setting time
        gaming = 1;
        optionSetting = 3;
      }
      if (optionMenu == 1) { //help time
        gaming = 7;
      }
      if (optionMenu == 0) { //quitting time
        window.close();
      }
    }
    if (optionMenu < 0) {
      optionMenu = 0;
    }
    if (optionMenu > 3) {
      optionMenu = 3;
    }
  }
  if (gaming == 1) { //setting
    if (keyCode === UP_ARROW) {
      optionSetting++;
    }
    if (keyCode == DOWN_ARROW) {
      optionSetting--;
    }
    if (keyCode == 32) {
      if (optionSetting == 3) { //character select
        if (buffer == 1) {
          boy++;
          if (boy > 4) {
            boy = 1;
          }
        } else {
          buffer++;
        }
      }
      if (optionSetting == 2) { //back
        gaming = 0;
        optionSetting = 3;
        buffer = 0;
      }
    }
    if (optionSetting < 2) {
      optionSetting = 2;
    }
    if (optionSetting > 3) {
      optionSetting = 3;
    }
  }
  if (gaming == 7) { //help
    if (keyIsDown(32)) { //back
      if (stuopid == 1) {
        gaming = 0;
        optionSetting = 3;
        stuopid = 0;
      } else {
        stuopid++
      }
    }
  }
  if (2 <= gaming && gaming <= 6) { //shmovement of the boy levels
    if (keyCode === UP_ARROW) {
      levels[gaming - 2].children[0].y -= 40;
      levels[gaming - 2].children[0].body.y -= 40;
      levels[gaming - 2].children[0].point.y -= 40;
    }
    if (keyCode === DOWN_ARROW) {
      levels[gaming - 2].children[0].y += 40;
      levels[gaming - 2].children[0].body.y += 40;
      levels[gaming - 2].children[0].point.y += 40;
    }
    if (keyCode === LEFT_ARROW) {
      levels[gaming - 2].children[0].x -= 40;
      levels[gaming - 2].children[0].body.x -= 40;
      levels[gaming - 2].children[0].point.x -= 40;
    }
    if (keyCode === RIGHT_ARROW) {
      levels[gaming - 2].children[0].x += 40;
      levels[gaming - 2].children[0].body.x += 40;
      levels[gaming - 2].children[0].point.x += 40;
    }
    if (keyCode === 32 && wait >= 1) {
      levels[gaming - 2].children[0].kiLL = 2;
      wait = 0;
    }
    wait++;
    if (wait > 1) {
      levels[gaming - 2].children[0].kiLL = 1;
    }
  }
}
function keyReleased() {
  if (gaming > 1 && 7 > gaming) {
    enime = levels[gaming - 2].children.filter(i => i.Move);
    for (i = 0; i < enime.length; i++) {
      if (enme) {
        enime[i].Move(levels[gaming - 2].children[0]);
      }
    }
    enme = !enme;
  }
}