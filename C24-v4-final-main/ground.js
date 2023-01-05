class Ground{
    constructor(x,y,width, height){
        
        let options = {
            isStatic: true
        };
       
        this.w = width;
        this.h = height;
        this.body = Bodies.rectangle(x,y,this.w,this.h,options);
        World.add(world,this.body);

    }
    show(){
        
    }
}