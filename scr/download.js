function buttonClicked() {
  if (navigator.geolocation) { //check if web-browser supports geolocation
    navigator.geolocation.getCurrentPosition(acceptGeolocation, declineGeolocation);//give geolocation prompt
  } else {
    console.log("geolocation not supported"); //otherwise log that the browser isnt supported
  }
}

function acceptGeolocation() {//function for when user accepts geolocation

}

function declineGeolocation() {//function for when user declines geolocation
  window.location.replace("../pages/terror.html")//change to the horror site
}
