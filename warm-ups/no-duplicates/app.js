// var input = "bookkeeper larry";

// No duplicates: "bokepr lay"
// The Extras: "okeerr"

//create two variables to store letters
//loop through name string
  //see if letter is already in the originals
      //if it is

var str = "banana bikini"

function removeDuplicates(str) {
var unique = '';
var theExtras = '';

  for (var i = 0; i < str.length; i++) {
    if (unique.indexOf(str[i]) === -1) {
      unique += str[i];
    } else {
      theExtras += str[i];
    }
  }
  return "the no dupes are: " + unique + ", and the extras are: " + theExtras;
}

console.log(removeDuplicates(str));
