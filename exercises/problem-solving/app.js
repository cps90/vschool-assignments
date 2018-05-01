// https://coursework.vschool.io/problem-solving-practice/
//#1
function largest(arr) {
var largestNumber = arr[0]
for (var i = 0; i < arr.length; i++) {
    if (arr[i] > largestNumber) {
      largestNumber = arr[i]
    }
  }
  return largestNumber;
}

console.log(largest([3, 5, 2, 8, 1])) // => 8

//#2a (when i thought it was return every word with letters)
//nested loop to access each character in array
// function letterPresent(arr) {
//   var newArray = []
//   var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
//   for (var i = 0; i < arr.length; i++) {
//     for (var j = 0; j < letters.length; j++) {
//       if (arr[i].includes(letters[j])) {
//         newArray += arr[i]
//       }
//     }
//   }
//   return newArray
// }
// console.log(letterPresent(["#3", "$$$", "C%4!", "Hey!"], "!")) // => ["C%4!", "Hey!"]

//#2b
function letterPresent(arr, char) {
  newArray = []
  for (var i = 0; i , arr.length; i++){
    if (arr[i].match(char)){
       //or if (arr[i].indexOf(char) > -1)
       //or if (arr[i].includes(char))
      newArray.push(arr[i]);
    }
  }
  return newArray
}
console.log(letterPresent(["#3", "$$$", "C%4!", "Hey!"], "!")) // => ["C%4!", "Hey!"]

// //#3
function isDivisible(num1, num2) {
  if (num1 % num2 === 0) {
  return true;
  } else {
  return false;
  }
}

console.log(isDivisible(4, 2)); // => true
console.log(isDivisible(9, 3)); // => true
console.log(isDivisible(15, 4)); // => false
