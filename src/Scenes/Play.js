class Play extends Phaser.Scene{
    constructor(){
        super("playScene");
    }

    preload(){
        this.load.image('rocket', './assets/rocket.png');
        this.load.image('spaceship', './assets/spaceship.png');
        this.load.image('starfield', './assets/starfield.png');
    }

    create() {
        //place starfield
        this.starfield = this.add.tileSprite(0,0, game.config.width, game.config.height, 'starfield').setOrigin(0,0);
       
        // Green UI Background
        this.add.rectangle(0, borderUISize + borderPadding, game.config.width, borderUISize * 2, 0x00ff00).setOrigin(0,0);
        this.add.rectangle(0,0, game.config.width, borderUISize, 0xffff0f).setOrigin(0,0);
        this.add.rectangle(0, game.config.height - borderUISize, game.config.width, borderUISize , 0xffff0f).setOrigin(0,0);
        this.add.rectangle(0,0, borderUISize, game.config.height, 0xffff0f).setOrigin(0,0);
        this.add.rectangle(game.config.width - borderUISize,0, borderUISize, game.config.height, 0xffff0f).setOrigin(0,0);
        
        this.add.text(20,10, "Rocket Patrol Player");
        
        //add the rocket
        this.p1Rocket = new Rocket(this, game.config.width/2, game.config.height - borderUISize - borderPadding, 'rocket').setOrigin(0.5,0);
   
        //define keys
        keyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F)
        keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R)
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT)
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT)
    }

    update(){
        this.starfield.tilePositionX -= starSpeed;

        // Update the rocket
        this.p1Rocket.update();
    }
}