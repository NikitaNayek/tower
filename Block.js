class Block{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.Visiblity=255;
        //this.image = loadImage("sprites/base.png");
        World.add(world, this.body);
      }
      display(){

        if(this.body.speed<3)
        {
        var pos=this.body.position;
        rectMode(CENTER)
        stroke("red")
        rect(pos.x,pos.y,this.width,this.height)
        }
        else{
            World.remove(world,this.body)
            push();
            this.Visiblity=this.Visiblity-5;
            pop();
        }
    }
}