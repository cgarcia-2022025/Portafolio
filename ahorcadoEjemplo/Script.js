
function area(){
var a = document.getElementById("myCanvas");
var ctx = a.getContext("2d");
ctx.beginPath();
ctx.arc(100, 60, 20, 0, 2 * Math.PI);
ctx.stroke();

var b = document.getElementById("myCanvas");
var ctx = b.getContext("2d");
ctx.beginPath()
ctx.lineWidth=4
ctx.moveTo(25, 25)
ctx.lineTo(100,25)
ctx.lineTo(100,40)
ctx.moveTo(25,25)
ctx.lineTo(25,150)
ctx.stroke()

var c = document.getElementById("myCanvas");
ctx.beginPath()
            ctx.lineWidth=2
            ctx.moveTo(100,70)
            ctx.lineCap='round'
            ctx.lineTo(100,105)
            ctx.stroke()

var d = document.getElementById("myCanvas");
ctx.beginPath()
ctx.lineWidth=2
ctx.moveTo(100,75)
ctx.lineCap="round"
ctx.lineTo(80,85)
ctx.stroke()

var e = document.getElementById("myCanvas");
ctx.beginPath()
ctx.lineWidth=2
ctx.moveTo(100,75)
ctx.lineCap="round"
ctx.lineTo(120,85)
ctx.stroke()
}
