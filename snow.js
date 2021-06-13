class Snow{
    constructor(x, y,) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
        }
        
        this.body = Bodies.circle(x, y, 10, options);
        this.snow = loadImage("snow4.webp");
        this.r = 10;
        World.add(world, this.body);
    }
    SnowShow(){
    imageMode(CENTER);
    image(this.snow, this.body.position.x, this.body.position.y, this.r, this.r)
    }
}