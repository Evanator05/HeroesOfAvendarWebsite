function main() {
  pressedButton();
  drawGraph();
}

function drawGraph() {
  let canvas = document.getElementById("canvas");
  let ctx = canvas.getContext("2d");

  var width = canvas.width
  var height = canvas.height

  ctx.fillStyle="white"
  ctx.fillRect(0, 0, width, height);

  var steps = 20
  var widthsteps = width/steps
  ctx.scale(1, -1);
  ctx.beginPath();
  ctx.moveTo(0,0);
  for (let i = 0; i < steps; i++) {
    //plot points based on this quadradic 2(level)^2+70
    ctx.lineTo((widthsteps*i),70 + (2*((i-1)*(i-1)))-height)
  }
  ctx.stroke();

}

function pressedButton() {
  let level = document.getElementById("level").value;
  document.getElementById("ans").innerHTML = 70 + (2*((level-1)*(level-1)));
}

main()
