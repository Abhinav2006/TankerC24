class Tanker {
  constructor(x,y,width,height){
      var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':1.0
     }
     this.body = Matter.Bodies.rectangle(x, y, width, height, options);
     Matter.World.add(world, this.body)
     this.width = width;
     this.height = height;
     this.image = loadImage("assets/Cannon.jpg");
  }
    display(){
      // Draw the tanker the way you like.
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      pop();
      // You could also use an image if you want a specific look
    }
}
