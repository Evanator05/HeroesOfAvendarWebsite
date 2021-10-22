function main() {
  pressedButton();
  drawGraph();
}

function drawGraph() {
  let canvas = document.getElementById("canvas"); //Get the canvas element so I can draw to it
  let ctx = canvas.getContext("2d"); //Get the canvas context so I can draw to the canvas

  var width = canvas.width; //Get the canvas width
  var height = canvas.height; //Get the canvas height

  //filll background
  ctx.fillStyle="white"
  ctx.fillRect(0, 0, width, height);

  //the final level the graph will reach
  var steps = 15

  //Get the amount of pixels per step
  var widthsteps = width/steps

  //invert the canvas
  ctx.scale(1, -1);

  //start drawing the graph
  ctx.strokeStyle="black"
  ctx.lineWidth=5
  ctx.lineCap = "round";
  ctx.beginPath();
  ctx.moveTo(0,0);
  for (let i = 0; i < steps; i++) {
    //plot points based on this quadradic 2(level)^2+70
    ctx.lineTo((widthsteps*i),70 + (2*((i-1)*(i-1)))-height)
    console.log((widthsteps*i),70 + (2*((i-1)*(i-1)))-height)
  }
  ctx.stroke();

  let level = document.getElementById("level").value //Get the level chosen by the user

  //Draw a red point at a position chosen by the users level
  ctx.fillStyle="red"
  ctx.strokeStyle="red"
  ctx.beginPath();
  ctx.arc(widthsteps*level, 70 + (2*((level-1)*(level-1)))-height, 5, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.fill()

}

function pressedButton() {
  let level = document.getElementById("level").value; //Get the level chosen by the user
  document.getElementById("ans").innerHTML = 70 + (2*((level-1)*(level-1)));
  drawGraph()
}

main()
