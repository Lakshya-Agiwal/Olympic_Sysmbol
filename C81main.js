var canvas=document.getElementById("my_canvas");
var ctx=canvas.getContext("2d");

ctx.beginPath();
ctx.strokeStyle="blue";
ctx.lineWidth=5;
ctx.arc(150,310,50,0,360);
ctx.stroke();
ctx.beginPath();
ctx.strokeStyle="black";
ctx.lineWidth=5;
ctx.arc(300,310,50,0,360);
ctx.stroke();
ctx.beginPath();
ctx.strokeStyle="red";
ctx.lineWidth=5;
ctx.arc(450,310,50,0,360);
ctx.stroke();
ctx.beginPath();
ctx.strokeStyle="yellow";
ctx.lineWidth=5;
ctx.arc(225,350,50,0,360);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="green";
ctx.lineWidth=5;
ctx.arc(375,350,50,0,360);
ctx.stroke();





