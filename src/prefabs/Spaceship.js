class Spaceship extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, pointValue){
        super(scene, x,y,texture,frame);
        scene.add.existing(this);// Add to existing scene Hello World
        this.points = pointValue;
        this.moveSpeed = game.settings.spaceshipSpeed;
        let r = Math.random() * 10;
        if(r < 5 ){
            this.moveSpeed *= -1;
            this.flipX = true;
        }
    }

    update(){
        this.x -= this.moveSpeed;
        if(this.moveSpeed >= 0 && this.x <= 0 - this.width){
            this.reset();
        }
        else if(this.moveSpeed < 0 && this.x >  game.config.width + this.width){
            this.reset();
        }
    }

    reset(){
        if(this.moveSpeed > 0){
            this.x= game.config.width;
        }
        else{
            this.x = 0;
        }

    }
}