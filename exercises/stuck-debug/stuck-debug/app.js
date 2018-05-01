var ask = require("readline-sync");

var options = ['pick flowers', 'shoot guns', 'fight bears'];
var run = true;

while(run) {
  var index = ask.keyInSelect(options, "What would you like to do today?: ");
  if(options[index] === 'pick flowers'){
    console.log("You pick some flowers. Pick another.");
  } else if (options[index] === 'shoot guns'){
    console.log("You shoot guns. Pick another. ");
  } else if (options[index] === 'fight bears'){
    run = false
  }
}
console.log("You fought a bear and got beat up!");
