// https://coursework.vschool.io/fizz-buzz/


function fizzBuzz() {
  var numArray = [];
  for (i = 1; i <= 100; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
         numArray.push("fizzbuzz")
       } else if (i % 3 === 0) {
         numArray.push("fizz")
       } else if (i % 5 === 0) {
         numArray.push("buzz")
       } else {
         numArray.push(i)
       }
  }
  return numArray
}

console.log(fizzBuzz())
