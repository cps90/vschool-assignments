var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt",];
var alphabet = "abcdefghijklmnopqrstuvwxyz";

function nestedArray() {
  var newArray = []
  for (var i = 0; i < people.length; i++) {
    for (var j= 0; j < alphabet.length; j++) {
      newArray.push(alphabet[j].toUpperCase())
    }
    newArray.push(people[i] + ":")
  }
  return newArray;
}

console.log(nestedArray());
