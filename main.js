canvas = document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

ctx.beginPath();
ctx.strokeStyle = "grey";
ctx.lineWidth = 4;
ctx.rect(92, 143, 430, 200)
ctx.stroke()

var radius
var color
var width_of_line
var mouseEvent

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e)
{
  color = document.getElementById("color").value;
  width_of_line.getElementById("width_of_line");
  radius.getElementById("radius").value;
  mouseEvent = "mouseDown";
}

function my_mosemove(e)
{
  current_position_of_mouse_x = e.clientX - client.offsetleft;
  current_position_of_mouse_y = e.clientY - client.offsetTop;
  
  if(mouseEvent == "mouseDown"){
    cosole.log("Current position of x and y coordinates =")
    console.log("x = " + current_position_mouse_x + "y = " + current_position_mouse_y);
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth= width_of_line;
    ctx.arc(current_postion_of_mouse_x, current_postion_of_mouse_y, radius ,0, 2*Math.PI);
    ctx.stroke();
}
}