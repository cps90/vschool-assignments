var x = "Hey there, my Name is Courtney";
function convertToUpper(x) {
  return x.toUpperCase();
};
console.log(convertToUpper(x));

function convertToLower(x) {
  return x.toLowerCase();
};
console.log(convertToLower(x))


var str1 = "Hello kitty "
var str2 = "Hello doggy"
function addStr(str1, str2) {
  return str1.concat(str2);
};
console.log(addStr(str1, str2))



var person = "Bisa"
function ifNameStartsWithL(person) {

  if (person.indexOf("L") === 0) {
    return person + " and the name starts with L"
  } else {
    return person.replace(person[0], "L") + " and now the name will start with L"
  }
}
console.log(ifNameStartsWithL(person))


var lastOccurance = function () {
  return x.lastIndexOf('y')
};
console.log(lastOccurance());


function strSlice() {
  return str1.slice(6);
};
console.log(strSlice());


var str3 = "hello my name is courtney and I am hungry"

function spliceStr() {
  return str3.split(" ");
};
console.log(spliceStr());


var str4 = "The rain in SPAIN stays mainly in the plain"
function matchStr() {
  return str4.match(/ain/gi);
};
console.log(matchStr())

var substrStr = function() {
  return str4.substr(-5);
};
console.log(substrStr());





// var str = "your mama my mama everyone's mama"
// function sliceEnd(str) {
//   return str.slice(-3);
// }
// console.log(sliceEnd(str));
