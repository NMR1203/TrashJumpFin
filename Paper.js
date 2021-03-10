class Paper{
    constructor(x,y,r){
        var options = {
            isStatic : false,
            restitution : 0.5,
            friction : 0.2,
            density : 2.5
        }
        this.x = x;
        this.y = y;
        this.r = r;

        
        this.body = Bodies.circle(this.x,this.y,this.r/2,options);
        World.add(world,this.body);

    }

    display(){
        var pos = this.body.position;
        if(pos.x < 145 || pos.x > 1445){
            World.remove(world, this.body);
            
            textSize(100);
            strokeWeight(5);
            stroke("red");
            fill("brown");	
            text("YOU LOSE", 525, 450);
    
            textSize(25);
            stroke(0);
            fill("lightgrey");	
            text("press ctrl+r to reset", 675, 500);
           push();
            this.visibility = this.visibility -1005;
            tint(255, this.visibility);
           pop();
        }
        else{
            push();
            translate(pos.x,pos.y);
            rectMode(CENTER);
            fill("white");
            strokeWeight(4)
            stroke("lightgrey");        
            ellipse(0,0,this.r,this.r);
            pop();
        }
    }
} 