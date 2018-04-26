
//#1
function addNums(num1, num2) {
    return num1 + num2
};

console.log(addNums(2,4));

//#2
function largestOfThree(par1, par2, par3) {
  return Math.max(par1, par2, par3)
};

console.log(largestOfThree(5, 48, 72));

//#3
function evenOrOdd(par) {
  if (par % 2 === 0) {
    return "Number is Even!"
  } else {
    return "Number is Odd!"
  }
};

console.log(evenOrOdd(3));

//#4
function returnString(str) {
  if (str.length >= 20) {
    return str.concat(str)
  } else {
    return str.slice(0, str.length / 2)
  }
};

str = "Courtney is learning javascript...barely"
console.log(returnString(str));
