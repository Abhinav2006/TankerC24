class Ground{
  constructor(x, y, width, height) {
    var options = {
      isStatic: true
    }
    this.body = Matter.Bodies.rectangle(300, 390, 600, 30, options)
    Matter.World.add(world, this.body)
  }

  display(){
    var pos = this.body.position;
    rectMode(CENTER)
    fill(255);
    rect(pos.x, pos.y, 600, 30)
  }
}