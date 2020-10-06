class Ground{

    groundObject;
    groundSprite;

    constructor(){

        this.groundSprite=createSprite(width/2, height-35, width,10);
        this.groundSprite.shapeColor=color("green")
        
        var options = {};
        this.groundObject = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
        
    }
    
    draw(){
        this.groundSprite.x = this.groundObject.position.x;
        this.groundSprite.y = this.groundObject.position.y;
    }

}   