class Pig{
    constructor(x,y){
       var option1={
            restitution: 1.2,
            density: 1.0,
            friction: 0.3
        }
        
        this.body=Bodies.rectangle(x,y,50,50,option1);
        this.width=50;
        this.height=50;
        
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("green");
        rect(0,0,this.width,this.height);
        pop();
    }
}