// https://coursework.vschool.io/palindrome-finder/

// my solution
function isPalindrome(str) {
  var arr = str.toLowerCase().split("").filter(function(char){
      return "abcdefghijklmnopqrstuvwxyz".indexOf(char) >= 0;
  })

  if (arr.join("") === arr.reverse().join("")) {
    return true
  } else {
    return false
  }
}

console.log(isPalindrome("Star Rats!"));

// teacher solution (didn't get it finished)
// function isPalindrome(str) {
// var alphabet = "abcdefghijklmnopqrstuvwxyz"
// var myArr = str.split("");
// var myStr = "";
//   myArr.forEach(function(char){
//         for (var i = 0; i < alphabet length; i++) {
//           if (char.toLowerCase() === alphabet(i)) {
//             myStr += char;
//           }
//         }
//   })
//   retrun myStr
//   if (str.toLowercase() === str.split("").reverse().join("")) {
//     return true
//   } else {
//     return false
//   }
// }
//
// console.log(isPalindrome("star rats"));
