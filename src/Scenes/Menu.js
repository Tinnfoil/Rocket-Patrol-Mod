
class Menu extends Phaser.Scene{
    constructor(){
        super("menuScene");
    }

    create() {
        this.add.text(20,20, "Rocket Patrol Menu");

        // Change Scenes
        this.scene.start("playScene");
    }
}

// init() prepares ant data for the scene
// prefloat() prepares any assets we'll need for the scene
// create() adds objects to the scene
// update() is a loop that runs continuously and llows use to update game objects

