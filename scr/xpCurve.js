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
  var steps = 20

  //Get the amount of pixels per step
  var widthsteps = width/steps

  //invert the canvas
  ctx.scale(1, -1);

  //start drawing the graph
  ctx.strokeStyle="black"
  ctx.lineWidth=5
  ctx.lineCap = "round";
  ctx.beginPath();
  ctx.moveTo(0,(70 - height));
  for (let i = 0; i < steps; i++) {
    //plot points based on this quadradic 2(level)^2+70
    ctx.lineTo((widthsteps*i),getXp(i)-height)
  }
  ctx.stroke();

  let level = document.getElementById("level").value //Get the level chosen by the user

<<<<<<< HEAD
  //Draw point
=======
  //Draw a red point at a position chosen by the users level
>>>>>>> 15158d0a4ce79f008abf827a19cbf3f0eda9d149
  ctx.fillStyle="red"
  ctx.strokeStyle="red"
  ctx.beginPath();
  ctx.arc(widthsteps*level, getXp(level)-height, 5, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.fill()
}

function pressedButton() {
<<<<<<< HEAD
  let level = document.getElementById("level").value;
  document.getElementById("ans").innerHTML = getXp(level);
=======
  let level = document.getElementById("level").value; //Get the level chosen by the user
  document.getElementById("ans").innerHTML = 70 + (2*((level-1)*(level-1)));
>>>>>>> 15158d0a4ce79f008abf827a19cbf3f0eda9d149
  drawGraph()
}

function getXp(level) {
  return (70 + (2*((level-1)*(level-1))))
}

main()
