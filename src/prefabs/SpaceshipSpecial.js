class SpaceshipSpecial extends Spaceship {
    constructor(scene, x, y, texture, frame, pointValue){
        super(scene, x,y,texture,frame, pointValue);
    }

    update(){
        super.update();
        let d = new Date();
        this.y += Math.sin(d.getTime() / 1000) /2 ;

        this.x += this.moveSpeed * Math.cos(d.getTime()/ 1000) ;
    }
}