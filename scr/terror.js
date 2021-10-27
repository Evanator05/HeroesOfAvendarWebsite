var password = "xB3YxZ"
function updateTextBox() {
  var audio = new Audio("../audio/scream.wav"); //Create a new audio object with a screaming sound effect
  audio.play(); // Play the audio object
  let text = document.getElementById("response").value
  if (text == password) {
      window.location.replace("../pages/location.html")//change to the horror site
  }
}
