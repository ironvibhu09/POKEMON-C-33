class Log extends BaseClass {
    constructor(x, y, height, angle) {
    	//working
        super(x, y,20, height,135);
        this.image = loadImage("wood2.png");
        Matter.Body.setAngle(this.body,angle);
    }
}