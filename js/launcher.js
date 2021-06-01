class launcher {
    constructor(body1,point2){
        var options = {
            bodyA : body1,
            pointB : point2,
            stiffness : 0.004,
            length : 10
        }
        this.pointB = point2;
        this.launch = Constraint.create(options);
        World.add(world,this.launch);
    }
    fly(){
        this.launch.bodyA = null;
    }
    attach(body1){
        this.launch.bodyA = body1;
    }
    display(){
        if(this.launch.bodyA){
            var posA = this.launch.bodyA.position;
            var posB = this.pointB;
            strokeWeight(4);
            fill("black");
            line(posA.x, posA.y, posB.x, posB.y);
        }
    }
}