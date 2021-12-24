canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var mouseevent="empty";
var lastx,lasty;
var color="black";
var sky=1;
canvas.addEventListener("mousedown",clicker);
function clicker(e){
    color=document.getElementById("color").value;
    sky=document.getElementById("width").value;
    mouseevent="mouseDown"
}
canvas.addEventListener("mouseup",unclick);
function unclick(e){
    mouseevent="mouseUp";
}
canvas.addEventListener("mouseleave",leaveclick);
function leaveclick(e){
    mouseevent="mouseleave";
}
canvas.addEventListener("mousemove",moveclick);
function moveclick(e){
    currentx=e.clientX-canvas.offsetLeft;
    currenty=e.clientY-canvas.offsetTop;
    if(mouseevent=="mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=sky;
        ctx.moveTo(lastx,lasty);
        ctx.lineTo(currentx,currenty);
        ctx.stroke();
    }
    lastx=currentx;
    lasty=currenty;
}