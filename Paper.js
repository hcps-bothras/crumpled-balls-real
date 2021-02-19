class Paper {
    constructor(x, y, radius){
        var options = {
            isStatic:false,
            'restitution' :0.3,
            'friction':0.5,
            'density' :1.2
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;
        World.add(world, this.body);
        this.image = loadImage('paper.png')
    }

    display(){
        imageMode(RADIUS);
        fill("pink");
        //circle(this.body.position.x,this.body.position.y, this.radius)
        image(this.image, this.body.position.x, this.body.position.y, this.radius, this.radius)
    }
} 