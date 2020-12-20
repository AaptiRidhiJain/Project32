class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 1
        }
    
        this.pointB = pointB;
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    attach(ball){
        this.sling.bodyA = ball;
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        
       if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            stroke(255,239,0);
            strokeWeight(6);
            line(pointA.x , pointA.y, pointB.x-10, pointB.y);
        }
    }
}