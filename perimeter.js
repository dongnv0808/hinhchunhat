class Rectangle {
    width;
    height;
    constructor(width, height){
        this.width = width;
        this.height = height;
    }
    getWidth(){
        return this.width;
    }
    getHeight(){
        return this.height;
    }
    getPerimeter(){
        return (this.width + this.height)*2;
    }
    getAcreage(){
        return this.width * this.height;
    }
}