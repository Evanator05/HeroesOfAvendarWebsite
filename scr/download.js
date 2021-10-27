let themes = ["../css/style.css", "../css/run.css"]
var show_map
var handle_error
function buttonClicked() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(acceptGeolocation, declineGeolocation);
  } else {
    error('not supported');
  }
}

function setTheme(path) {
  var theme = document.getElementsByTagName("link")[0];
  theme.setAttribute('href', path)
}

function acceptGeolocation() {//function for when user accepts geolocation

}

function declineGeolocation() {//function for when user declines geolocation
  window.location.replace("../pages/terror.html")
}
