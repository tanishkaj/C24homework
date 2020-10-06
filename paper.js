class Paper{

    paperSprite; 
    paperObject;

    constructor(){

        var paperIMG=loadImage("paperimg.png");

        this.paperSprite = createSprite(10, 80, 40, 40);
        this.paperSprite.addImage(paperIMG);
        this.paperSprite.scale=0.3;

        var options = {
            restitution: 0.3,
            friction: 0.5,
            density: 1.2
        };
        this.paperObject = Bodies.circle(width/2, 200, 5, options);
    }
    
    draw(){
        this.paperSprite.x = this.paperObject.position.x;
        this.paperSprite.y = this.paperObject.position.y;
    }
}   