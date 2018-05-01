
//#1
var myString = "My name is Courtney"

function insertString (str) {
  for (var i = 0; i < str.length; i++) {
    console.log(str[i]);
  }
}
insertString(myString);

//#2
var mySecString = "My name is Courtney"

function insertStrChar (str, char) {
  for (var i = 0; i < str.length; i++) {
    if (char === str[i]) {
      return i;
    }
  }
  console.log("This character is not found")
}
console.log(insertStrChar(mySecString, "M"));

//#3
var myArray = [0, 1, 2, 3, 5]

function insertArray (arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === 42) {
      return arr[i];
    }
    }
    return "42 not found"
  }

console.log(insertArray(myArray));

//#4
var mySecArray = [3, 54, 44, 32, 15, 1, 77, 76, 68, 99]

function returnSmallestNum (arr) {
  var smallestNum = arr[0]
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < smallestNum) {
      smallestNum = arr[i]
    }
  }
  return smallestNum;
}

console.log(returnSmallestNum(mySecArray));
