var gaming = 0;
var optionMenu = 3;
var optionSetting = 3;
var buffer = 0;
var boy = 1;
var boyX = 500;
var boyY = 500;
var wait = 0;
function setup() {
  createCanvas(1000, 1000);
  background(0, 0, 0);
  noStroke();
  frameRate(12);
  levelOne = new level1();
}
function draw() {
  if (gaming == 0) {
    mainMenu();
  }
  if (gaming == 1) {
    setting();
  }
  if (gaming == 2) {
    levelOne.level1Draw();
  }
}
function keyPressed() {
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
      if (optionMenu == 1) { //quitting time
        window.close();
      }
    } 
    if (optionMenu < 1) {
      optionMenu = 1;
    } 
    if (optionMenu > 3) {
      optionMenu = 3;
    }
    print('optionMenu ' + optionMenu);
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
        print('boy ' + boy);
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
    print('optionSetting ' + optionSetting);
  }
  if ( 2 <= gaming && gaming <= 6) { //levels 1-5
    if (keyCode === UP_ARROW) {
      levelOne.children[0].y = levelOne.children[0].y - 40;
    } 
    if (keyCode === DOWN_ARROW) {
      levelOne.children[0].y = levelOne.children[0].y + 40;
    } 
    if (keyCode === LEFT_ARROW) {
      levelOne.children[0].x = levelOne.children[0].x - 40;
    } 
    if (keyCode === RIGHT_ARROW) {
      levelOne.children[0].x = levelOne.children[0].x + 40;
    } 
    if (keyCode === 32 && wait >= 1) {
      levelOne.children[0].kiLL = 2;
      wait = 0;
    } 
    wait++;
    if (wait > 1) {
      kiLL = 1;
    }
  }
  if (gaming == 2) { //treeeees change inequality later for more levels weith tre
    wigglers = levelOne.children.filter (i => i.treeWogle);
    for (i = 0; i < wigglers.length; i+=Math.ceil(random(4, 10))){
      wigglers[i].treeWogle();
    }
  }
}
