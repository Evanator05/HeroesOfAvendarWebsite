let health = 100

function pressedButton() {
  if (health > 0) { //if the tower is still alive then run this code, otherwise ignore
    health -= 10 //remove 10 health
    var audio = new Audio("../audio/TowerHit.wav"); //Create a new audio object with a tower hit sound effect
    audio.play(); //Play the audio object
    health = clamp(health, 0, 100); //clamp the health between 0 and 100
    if (health <= 0) {//if the tower is dead then run the code in the break tower function
      breakTower()
  }
  let healthBar = document.getElementById("bar").value = health //Set the health bar value to the current tower health
  }
}

function clamp(value,min,max) { // lock a number between two other numbers
  return Math.min(Math.max(value, min), max);
}

function breakTower() {
  document.getElementById("towerIMG").src = "../images/brokenTower.png" //Change the tower image to a broken tower

  var audio = new Audio("../audio/TowerCrumbling.wav"); //Create a new audio object with a tower breaking sound effect
  audio.play(); // Play the audio object

  document.getElementById("promoCode").innerHTML = "xB3YxZ" //Set the promocode element html to a random string of 8 characters
}

function generateRandomCharacter() { //Get 1 random character
      var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      return characters.charAt(Math.floor(Math.random() * characters.length));
}

function makePromocode(length) { //Make a string of random characters
    var result = '';

    for (let i = 0; i<length; i++) {
      result += generateRandomCharacter()
    }

    return result
}
