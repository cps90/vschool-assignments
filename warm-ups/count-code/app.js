//https://coursework.vschool.io/count-code/

//#1, incomplete
function countCode(str) {
  var count = str.match(/code/g).length;
  console.log(count);
}

countCode("aaacodebbbcodeccc");


//#2
function countCode(str) {
  var count = 0;
  for (var i = 0; i < str.length; i++) {
    if (str[i] === 'c' && str[i + 1] === 'o' && str[i + 3] === 'e') {
    count++;
    }
  }
  return count;
}

console.log(countCode("aaacodebbb")) //-> 1
console.log(countCode("codexxcode")) //-> 2
console.log(countCode("cozexxcope")) //-> 2


//#3
function coundCode(str) {
  var match = str.match(/co.e/g);
  return match ? match.length : 0;
}

console.log(countCode("aaacodebbb")) //-> 1
console.log(countCode("codexxcode")) //-> 2
console.log(countCode("cozexxcope")) //-> 2



//#4
function coundCode(str) {
  var myArr = str.split('')
  return myArr.reduce(function(final, letter, i) {
    if (myArr[i] === 'c' && myArr[i + 1] === 'o' && myArr[i + 3] === 'e') {
       return final++
    }
  }, 0)
}

console.log(countCode("aaacodebbb")) //-> 1
console.log(countCode("codexxcode")) //-> 2
console.log(countCode("cozexxcope")) //-> 2
