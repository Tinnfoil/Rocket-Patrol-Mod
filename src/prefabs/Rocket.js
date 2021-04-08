// Rocket (player) prefab
class Rocket extends Phaser.GameObjects.Sprite{
    constructor(scene, x, y, texture, frame){
        super(scene, x, y, texture, frame);

        // add object to the existing scene
        scene.add.existing(this);
        this.isFiring = false;      // Track the firing status
        this.moveSpeed = 2;         // Pixel per frame

    }

    update(){
        // left/right movement
        if(!this.isFiring){
            if(keyLEFT.isDown && this.x >= borderUISize + this.width){
                this.x -= this.moveSpeed;
            }
            if(keyRIGHT.isDown && this.x <= game.config.width - borderUISize - this.width){
                this.x += this.moveSpeed;
            }
        }
    }
}