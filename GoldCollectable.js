class GoldCollectible{

    constructor(x, y, width, height, angle) {
        var options = {
          'restitution' : 0.7,
          'friction' : 0.3,
          'isStatic' : false,
        }
        this.visibility = 255
        
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        if(this.body.speed < 8){
          var angle = this.body.angle;
          push();        
          translate(this.body.position.x, this.body.position.y);
          rotate(angle);
          fill("magenta");
          strokeWeight(1.5);
          stroke("purple");
          rectMode(CENTER);
          rect(0, 0, this.width, this.height);
          pop();
       } 
       else{
         World.remove(world, this.body);
         push();
         this.visibility = this.visibility -1005;
         tint(255, this.visibility);
         pop();
       }
      }
    score(){
      if (this.visibility < 0 && this.visibility >= -1005){
        score = score +6;
        goldCollected.play();
        }
    }
}