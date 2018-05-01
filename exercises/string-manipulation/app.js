var ask = require('readline-sync');
var firstName = ask.question('What is your first name? ');
console.log("Hi, " + firstName.toUpperCase() + "! " + "Help me get to know you!");

var lastName = ask.question(firstName + ", " + "What is your last name? ")
console.log((firstName + " ").concat(lastName) + " is a great name!")

var favFood = ask.question('What is your favorite food? ');
console.log("Ooooo I love " + favFood + " too!" )

var favColor = ask.question("What is your favorite color? ");
console.log(favColor.toUpperCase() + " is so beautiful! ")
console.log(favColor.length);

var describeYourself = ask.question("How would you describe yourself in 20 words or less? ")
  if (describeYourself.length <= 20) {
    console.log(describeYourself)
  } else {
    console.log(describeYourself.slice(describeYourself.length/2))
  }
var askNum = ask.question("give me a number bitch ")
console.log(describeYourself.slice(askNum))
