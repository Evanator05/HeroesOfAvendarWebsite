let health = 100
function pressedButton() {
  if (health > 0) {
  health -= 10
  var audio = new Audio("../audio/TowerHit.wav");
  audio.play();
  health = clamp(health, 0, 100);
  if (health <= 0) {
    breakTower()
  }
  let healthBar = document.getElementById("bar").value = health
  }
}

function clamp(value,min,max) {
  return Math.min(Math.max(value, min), max);
}

function breakTower() {
  document.getElementById("towerIMG").src = "../images/brokenTower.png"

  var audio = new Audio("../audio/TowerCrumbling.wav");
  audio.play();

  document.getElementById("promoCode").innerHTML = makePromocode(8)
}

function generateRandomCharacter() {
      var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      return characters.charAt(Math.floor(Math.random() * characters.length));
}

function makePromocode(length) {
    var result = '';

    for (let i = 0; i<length; i++) {
      result += generateRandomCharacter()
    }

    return result
}
