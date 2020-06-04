class Bird extends BaseClass {
    constructor(x, y) {
        //working
        super(x, y, 100, 100);
        this.image = loadImage("redpokeball.png");
        this.smokeImage = loadImage("smoke.png");
        this.trajectory = [];
    }
    display() {
        super.display();
//working
        if (this.body.velocity.x > 10 && this.body.position.x > 200) {
            var position = [this.body.position.x, this.body.position.y];
            this.trajectory.push(position);
        }
        for (var i = 0; i < this.trajectory.length; i++) {
            image(this.smokeImage, this.trajectory[i][0], this.trajectory[i][1]);
        }


    }
}