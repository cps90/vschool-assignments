// https://coursework.vschool.io/array-filter-exercises/

// #1)
var numbers = [3, 6, 8, 2];

function fiveAndGreater(arr) {
  return arr.filter(function(num){
    return num >= 5
  })
}
console.log(fiveAndGreater(numbers));

// #2)
function evensOnly(arr) {
  return arr.filter(function(num){
    if (num % 2 === 0) {
      return num;
    }
  })
}
console.log(evensOnly(numbers));

// #3
var strings = ["dog", "wolf", "by", "family", "eaten", "camping"];

function fiveCharsOnly(arr) {
  return arr.filter(function(str) {
      if (str.length <=5) {
        return str;
      }
  })
}
console.log(fiveCharsOnly(strings));

// #4
var people = [
    {
        name: "Angelina Jolie",
        member: true
    },
    {
        name: "Eric Jones",
        member: false
    },
    {
        name: "Paris Hilton",
        member: true
    },
    {
        name: "Kayne West",
        member: false
    },
    {
        name: "Bob Ziroll",
        member: true
    }
]

function peopleWhoBelong(arr) {
    return arr.filter(function(item){
        if (item.member) {
          return item
        }
    })
}
console.log(peopleWhoBelong(people));

//#5
var persons = [
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]

function ofAge(arr) {
  return arr.filter(function(item){
    if (item.age >= 18) {
      return item
    }
  })
}

console.log(ofAge(persons));
