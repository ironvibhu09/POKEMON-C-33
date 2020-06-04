class SlingShot {
    constructor(bodyA, pointB) {
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        //working
        this.sling1 = loadImage('sling1.png');
        this.sling2 = loadImage('sling2.png');
        this.sling3 = loadImage('sling3.png');
        this.pointB = pointB;
        this.pointB.y = 425;
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    attach(body) {
        //working
        this.sling.bodyA = body;
    }

    fly() {
        //working
        this.sling.bodyA = null;
    }

    display() {
        //working
        image(this.sling1, 200, 392);
        image(this.sling2, 170, 392);
        if (this.sling.bodyA) {
            //working
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();

            stroke(48, 22, 8);
            if (pointA.x < 220) {
                //working
                strokeWeight(7);
                line(pointA.x - 20, pointA.y, pointB.x - 10, pointB.y);
                line(pointA.x - 20, pointA.y, pointB.x + 30, pointB.y - 3);
                image(this.sling3, pointA.x - 30, pointA.y - 10, 15, 30);
            } else {
                //working
                strokeWeight(3);
                line(pointA.x + 25, pointA.y, pointB.x - 10, pointB.y);
                line(pointA.x + 25, pointA.y, pointB.x + 30, pointB.y - 3);
                image(this.sling3, pointA.x + 25, pointA.y - 10, 15, 30);
            }


            pop();
        }
    }

}