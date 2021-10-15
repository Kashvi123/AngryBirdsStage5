class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            length:10,
            stiffness:0.04
        }
        this.slingShot = Constraint.create(options)
        this.pointB = pointB; 
        World.add(world, this.slingShot);
    }

    fly(){
        this.slingShot.bodyA = null 
    }

    display(){
        if(this.slingShot.bodyA){
        var pointA = this.slingShot.bodyA.position
        var pointB = this.pointB; 
         
        push();
        strokeWeight(6)
        //line(x1,y1,x2,y2);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        pop();
        }
    }
}