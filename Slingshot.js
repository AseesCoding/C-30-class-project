class SlingShot
{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);


        this.sling1 = loadImage("sprites/sling1.png");

        this.sling2 = loadImage("sprites/sling2.png");

        this.sling3 = loadImage("sprites/sling3.png");

        World.add(world, this.sling);
    }

    fly()
    {
        this.sling.bodyA = null;
    }

    display()
    {
        image(this.sling1,210,80,30,140);   
        
        

        if(this.sling.bodyA)
        {

            push();
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(7);
            stroke(48,22,8)
            
            line(pointA.x - 10, pointA.y, pointB.x - 15, pointB.y + 20);
            line(pointA.x + 10,pointA.y,pointB.x + 15,pointB.y + 20)

            image(this.sling3,pointA.x - 19,pointA.y - 15,15,30);

            pop();
        }
    }

    display2()
    {
        image(this.sling2,190,80,30,80);
    }

    attach(body)
    {
        this.sling.bodyA = body;

    }
    
}