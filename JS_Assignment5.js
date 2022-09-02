class cylinder{
    constructor(radius,height){
        this.radius=radius;
        this.height=height;
    }
    getVolume(){
        let vol = (22/7*(Math.pow(this.radius,2))*this.height).toFixed(4);
        console.log(vol);
        document.getElementById('vol').value = `Cylinder volume is ${vol}`;
    }
}

class sphere{
    constructor(radius){
        this.radius=radius;
    }
    getVolume(){
        let vol = (22/7*(Math.pow(this.radius,3))*4/3).toFixed(4);
        console.log(vol);
        document.getElementById('vol').value = `Sphere volume is ${vol}`;
    }
}

class cone extends cylinder{
    constructor(radius,height){
        super(radius, height)
    }
    getVolume(){
        let vol = (22/7*(Math.pow(this.radius,2))*this.height/3).toFixed(4);
        console.log(vol);
        document.getElementById('vol').value = `Cone volume is ${vol}`;
    }
}
let typeObject = new Object;

// let cyl = new cylinder(2,3);
// cyl.getVolume();
