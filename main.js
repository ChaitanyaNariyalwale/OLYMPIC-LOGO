canvas=document.getElementById("mycanvas");
ctx=canvas.getContext("2d");

ctx.beginPath();
ctx.strokeStyle="grey";
ctx.linewidth=4;
ctx.rect(150,143,430,200)

ctx.beginPath();
ctx.strokeStyle="blue";
ctx.linewidth=4;
ctx.rect(250,210,40,0,2*Math.PI)

ctx.beginPath();
ctx.strokeStyle="black";
ctx.linewidth=4;
ctx.rect(350,210,40,0,2*Math.PI)

ctx.beginPath();
ctx.strokeStyle="red";
ctx.linewidth=4;
ctx.rect(450,210,40,0,2*Math.PI)

ctx.beginPath();
ctx.strokeStyle="yellow";
ctx.linewidth=4;
ctx.rect(300,250,40,0,2*Math.PI)

ctx.beginPath();
ctx.strokeStyle="green";
ctx.linewidth=4;
ctx.rect(400,250,40,0,2*Math.PI)