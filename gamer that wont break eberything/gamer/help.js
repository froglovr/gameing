function help() {
    dead = new theBOY(800, 600);
    attack = new theBOY(800, 670);
    zomby = new enime(770, 740, 2);
    sletleton = new enime(830, 740, 1);
    background(0, 0, 0);
    fill(255, 255, 255);
    push();
    textFont('Papyrus', 100);
    textStyle(ITALIC);
    textAlign(CENTER, CENTER);
    text('ForwardSlash', 500, 450);
    pop();
    push();
    textFont('Georgia', 30);
    textAlign(LEFT, CENTER);
    text('MOVE WITH ARROW KEYS', 150, 600);
    text('ATTACK WITH SPACE', 150, 670);
    text('DEFEAT ENEMIES', 150, 740);
    text('COLLECT THE RELIC', 150, 810);
    textAlign(CENTER, CENTER)
    text('BACK', 500, 880);
    pop();
    fill(240, 60, 60);
    rect(410, 875, 50, 5);
    rect(540, 875, 50, 5);

    dead.Draw(800, 600);
    attack.kiLL = 2;
    attack.Draw(800, 670);
    zomby.Draw(770, 740, 2);
    sletleton.Draw(830, 740, 1);
}