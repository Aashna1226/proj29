class Launcher{
    constructor(body,anchor){
        var options={
            bodyA:body,
            pointB:anchor,
            stiffness:0.04,
            length:1
        }
        this.launcher=Constraint.create(options);
        this.pointB=pointB;
        World.add(world,this.launcher);
    }

    fly(){
        this.launcher.bodyA=null;
    }
    
    display(){
        if(this.launcher.bodyA){
            var pointA=this.bodyA.position;
            var pointB=this.pointB;

            strokeWeight(2);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
}