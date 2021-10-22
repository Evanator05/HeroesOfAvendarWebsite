var text = ["The team base is the place where you respawn after death, you also start the match here.",
"The minion spawner spawns a new wave of 4 melee minions and 2 ranged minions once every 45 seconds, each teams minion spawners make a new wave at the same time",
"Towers are things that shoot at stuff on the opposing team, for example a tower would shoot enemy minions or players. Towers are seperated into multiple tiers, each tier doing more damage and having a higher attack speed, the towers closer to your base are higher tier",
"The Jungle is a place for the person in Roamer role to farm for xp. The problem with Jungle is there are no Towers to protect you leaving you vulnerable to enemy attacks. Once every 5 minutes a monster spawns in the middle that once killed gives the killing team a buff to their stats"]

function updateDesc() {
  let selectedOption = document.getElementById("map").value
  document.getElementById("ans").innerHTML = text[selectedOption]

}

updateDesc()
