function pressedButton() {
  let level = document.getElementById("level").value
  document.getElementById("ans").innerHTML = 70 + (2*((level-1)*(level-1)))
}

pressedButton()
