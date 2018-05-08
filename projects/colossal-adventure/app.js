// ["orc", "dementor", "dimagorgan", "voldemort", "saruman"]
var readline = require('readline-sync');
var isAlive = true;

function Enemies(name, health) {
  this.name = name
  this.health = health
  this.attackPower = function() {
    return Math.random() * 50 + 1;
  }
}

var player = {
  name: "test",
  health: 100
}

var inventory = []

var userOptions = ['w', 'p']
var optionsUnderEnemy = ['a', 'r']

var name = readline.question(`Hello you are now entering into the world of Lafar. Welcome to this colossal adventure. The stakes are high, the penalty is death. We wish you the best of luck. To procede, please enter your name: `);
player.name = name;


// var askIfAttacked = readline.keyInSelect(optionsUnderEnemy, `So ${name}, an enemy is approaching. What would you like to do? ('a' for attack, or 'r' to run)`);

while (isAlive === true) {
    var num = Math.random()
    var damage = Math.random() * 100 + 1;
    var takeDamage = Math.random() * 50 + 1;
    var ask = readline.keyInSelect(userOptions, `So, ${name}. What would you like to do? ('w' for walk, or 'p' to check health and inventory) `);

        if (userOptions[ask] === 'w') {

            if (num >= 0.66) {
            var askIfOrc = readline.keyInSelect(optionsUnderEnemy, `So ${name}, an angry, drooling orc is quickly approaching. You have two options. What would you like to do? ('a' for attack, or 'r' to run)`);
            var orc = new Enemies("orc", 100)
                if (optionsUnderEnemy[askIfOrc] === 'a') {
                    console.log("You have chosen to attack and are now in battle with the Orc.")
                    while (orc.health > 0) {
                        orc.health -= damage;
                        player.health -= damage;
                        if (orc.health <= 0) {
                          console.log("You have slayed the Orc! Two items have been added to your inventory from looting the Orc. Continue on exploring Lafar.")
                          inventory.push("leather shield", "knife")
                          console.log("Your current inventory: " + inventory);
                        } else if (player.health <= 0) {
                          console.log("You are dead. You lost the game.")
                          isAlive = false;
                        } else {}
                    }

                } else if (optionsUnderEnemy[askIfOrc] === 'r') {

                    if (num >= .5) {
                        console.log("You are pathetic. You did not run fast enough. The enemy has caught up with you and is launching an attack.")
                        while (orc.health > 0) {
                            orc.health -= damage;
                            player.health -= damage;
                            if (orc.health <= 0) {
                              console.log("You have slayed the Orc! Two items have been added to your inventory from looting the Orc. Continue on exploring Lafar.")
                              inventory.push("leather shield", "knife")
                            } else if (player.health <= 0) {
                              console.log("You are dead. You lost the game.")
                              isAlive = false;
                            } else {}
                        }

                    } else {
                      console.log("You somehow managed to escape this time.");
                      ask;
                    }

                } else {}


            } else if (num <= 0.33) {
              var askIfDementor = readline.keyInSelect(optionsUnderEnemy, `So ${name}, a dark and foreboding dementor is gliding towards you. You have two options. What would you like to do? ('a' for attack, or 'r' to run)`);
              var dementor = new Enemies("dementor", 100)
                  if (optionsUnderEnemy[askIfDementor] === 'a') {
                      console.log("You have chosen to attack")
                      while (dementor.health > 0) {
                          dementor.health -= damage;
                          player.health -= damage;
                          if (dementor.health <= 0) {
                            console.log("You have slayed the Orc! One item has been added to your inventory from looting the Orc. Continue on exploring Lafar.")
                            inventory.push("invisbility cloak")
                            console.log("Your current inventory: " + inventory)
                          } else if (player.health <= 0) {
                            console.log("You are dead. You lost the game.")
                            isAlive = false;
                          } else {}
                      }
                  } else if (optionsUnderEnemy[askIfDementor] === 'r') {

                      if (num >= .5) {
                          console.log("You are pathetic. You did not run fast enough and the dementor has shown up to kill you.  You are now entering a battle.")
                          while (dementor.health > 0) {
                              dementor.health -= damage;
                              player.health -= damage;
                              if (dementor.health <= 0) {
                                console.log("You have slayed the Orc! One item has been added to your inventory from looting the Orc. Continue on exploring Lafar.")
                                inventory.push("invisbility cloak")
                                console.log("Your current inventory: " + inventory)
                              } else if (player.health <= 0) {
                                console.log("You are dead. You lost the game.")
                                isAlive = false;
                              } else {}
                          }
                      } else {
                          console.log("You somehow managed to escape this time.")
                      }

                  } else {}

            } else {
              var askIfDemagorgon = readline.keyInSelect(optionsUnderEnemy, `So ${name}, a terrifying demagorgen is scammering towards you. You have two options, but your odds aren't good. What would you like to do? ('a' for attack, or 'r' to run)`);
              var demagorgon = new Enemies("demagorgen", 100);
                  if (optionsUnderEnemy[askIfDemagorgon] === 'a') {
                      console.log("You have chosen to attack")
                      while (demagorgon.health > 0) {
                          demagorgon.health -= damage;
                          player.health -= damage;
                          if (demagorgon.health <= 0) {
                            console.log("You have slayed the Orc! One item has been added to your inventory from looting the Orc. Continue on exploring Lafar.")
                            inventory.push("poison fang")
                            console.log("Your current inventory: " + inventory)
                          } else if (player.health <= 0) {
                            console.log("You are dead. You lost the game.")
                            isAlive = false;
                          } else {}
                      }
                  } else if (optionsUnderEnemy[askIfDemagorgon] === 'r') {
                      if (num >= .5) {
                          console.log("You are pathetic. You did not run fast enough and the demagorgen has shown up to kill you.  You are now entering a battle.")
                          while (demagorgon.health > 0) {
                              demagorgon.health -= damage;
                              player.health -= damage;
                              if (demagorgon.health <= 0) {
                                console.log("You have slain the demagorgen! One item has been added to your inventory from looting the Orc. Continue on exploring Lafar.")
                                inventory.push("poison fang")
                                console.log("Your current inventory: " + inventory)
                              } else if (player.health <= 0) {
                                console.log("You are dead. You lost the game.")
                                isAlive = false;
                              } else {}
                          }
                      } else {
                          console.log("You somehow managed to escape this time.");
                      }
                  } else {}

            }

        } else if (userOptions[ask] === 'p') {
            console.log(player, inventory)
        } else {}

}
