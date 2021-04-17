/*  SUBMIT COMMENTS
Kenny Doan
Rocket Patrol +++
4/17/21
Time to Complete: ~7 Hours

Point Breakdown
(5) Background Music
(5) Randomized Ship Direction
(5) New Modified Background
(5) Rocket Control After firing
(10) Time remaining on top
(10) New animated spaceships
(20) New spaceship with requirements
(20) Time mechanism that adds time on hits
(30) Simultaneous two player mode
*/

//Game Configuration
let config = {
    type: Phaser.CANVAS,
    width: 640,
    height: 480,
    scene: [Menu, Play]
}

let game = new Phaser.Game(config);

// Set UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;
let starSpeed = 2;

// Reserve keyboard bindings
let keyW, keyR, keyLEFT, keyRIGHT,
    keyUP, keyA, keyD;
