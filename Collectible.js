class Collectible{

    constructor(x, y, width, height, angle) {
        var options = {
          'restitution' : 0.1,
          'friction' : 0.5,
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
          fill("purple");
          strokeWeight(3);
          stroke("magenta");
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
        score = score +1;
        collected.play();
        }
    }
}