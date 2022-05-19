let rectangle = new Rectangle(200, 100);
document.write(`Dien tich = ${rectangle.getAcreage()}<br>`);
document.write(`Chu vi = ${rectangle.getPerimeter()}`);


let canvas = "";
canvas += `<canvas width="${rectangle.getWidth()}px" height="${rectangle.getHeight()}"px style="background-color:red"></canvas>`
document.getElementById("canvas").innerHTML = canvas;
