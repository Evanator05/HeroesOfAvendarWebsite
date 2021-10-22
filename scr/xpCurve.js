function main() {
  pressedButton();
  drawGraph();
}

function drawGraph() {
  let canvas = document.getElementById("canvas");
  let ctx = canvas.getContext("2d");

  var width = canvas.width
  var height = canvas.height

  //filll background
  ctx.fillStyle="white"
  ctx.fillRect(0, 0, width, height);

  //the final level the graph will reach
  var steps = 20

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

  let level = document.getElementById("level").value

  //Draw point
  ctx.fillStyle="red"
  ctx.strokeStyle="red"
  ctx.beginPath();
  ctx.arc(widthsteps*level, getXp(level)-height, 5, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.fill()
}

function pressedButton() {
  let level = document.getElementById("level").value;
  document.getElementById("ans").innerHTML = getXp(level);
  drawGraph()
}

function getXp(level) {
  return (70 + (2*((level-1)*(level-1))))
}

main()
