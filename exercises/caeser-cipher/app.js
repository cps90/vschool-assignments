var readline = require("readline-sync");

var input = readline.question("What phrase would you like to encrypt? ").toLowerCase();
console.log("Thank you!");

var shift = parseInt(readline.question("How many letters would you like to shift? "));

  function caesarCipher(input, shift) {
    var letters = "abcdefghijklmnopqurstuvwxyz"
    var encrypted = ""
    for (var i = 0; i < input.length; i++) {
      if(letters.indexOf(input[i]) === -1) {
        encrypted += input[i];
      } else {
        var position = letters.indexOf(input[i]);
        encrypted += letters[(position + shift) % 26];
      }
    }
    return encrypted;
  }
console.log(caesarCipher(input, shift));
