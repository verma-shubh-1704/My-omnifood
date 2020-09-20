
var canvas = document.createElement("canvas");

var Context = canvas.getContext("2d");

canvas.height = 400;

canvas.width = 600;

mainImage = new Image();

mainImage.ready = false;

mainImage.onload = checkReady;  

mainImage.src = "pac.png";

function checkReady() {
    this.ready=true;
    playgame();
}


function playgame() {
    render();
}

function reder() {
    context.fillStyle = "blk";
    context.fillreact(0,0,canvas.width,canvas.height);
}


document.body.appendChild(canvas);
ctx.fillText("helloworld",10,150);
