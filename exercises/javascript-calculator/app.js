var ask = require('readline-sync');

var firstNum = ask.question("Please enter a number. ");
console.log("Thank You!")

var secNum = ask.question("Please enter another number. ");
console.log("Thank You!")

var operations = ["add", "subtract", "multiply", "divide"];
var chooseOperation = ask.keyInSelect(operations, "Please choose an operation to perform with your two numbers");
  if (operations[chooseOperation] === "add") {
    console.log("The result is: " + addition())
  } else if (operations[chooseOperation] === "subtract") {
    console.log("The result is: " + subtration())
  } else if (operations[chooseOperation] === "multiply") {
    console.log("The result is: " + multiply())
  } else if (operations[chooseOperation] === "divide") {
    console.log("The result is: " + division())
  }



function addition() {
  return parseInt(firstNum, 10) + parseInt(secNum, 10)
}

function subtration() {
  return firstNum - secNum
}

function multiply() {
  return firstNum * secNum
}

function division() {
  return firstNum / secNum
}
