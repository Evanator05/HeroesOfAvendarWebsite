function pressedButton() {
  if (navigator.geolocation) { //check if web-browser supports geolocation
    navigator.geolocation.getCurrentPosition(acceptGeolocation, declineGeolocation);//give geolocation prompt
  } else {
    console.log("geolocation not supported"); //otherwise log that the browser isnt supported
  }

}

function acceptGeolocation() {//function for when user accepts geolocation
  window.location.replace("../pages/redRoom.html")//change to the horror site
}

function declineGeolocation() {//function for when user declines geolocation
  var audio = new Audio("../audio/terror.wav"); //Create a new audio object with a spooky sound effect
  audio.play(); // Play the audio object
}
