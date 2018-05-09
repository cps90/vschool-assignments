// https://coursework.vschool.io/array-map-exercises/


// #1
numbers = [2, 5, 100];

function newArray(arr) {
  return arr.map(function(num){
    return num * 2;
})
}
console.log(newArray(numbers));


 // #2
function stringArray(arr) {
    return arr.map(function(num){
    return String(num)
})
}
console.log(stringArray(numbers));


// #3
var names = ["john", "JACOB", "jinGleHeimer", "schmidt"];

var newNames = names.map(function(name){
    return name[0].toUpperCase() + name.substr(1).toLowerCase();
})

console.log(newNames);


// #4
var namesOnly = [
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

var newNamesOnly = namesOnly.map(function(item){
    return item.name;
})

console.log(newNamesOnly);


// #5
var makeStrings = [
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

var canGo = makeStrings.map(function(item){
    if (item.age >= 18) {
        return item.name + ' can go to the movie';
    } else {
        return item.name + ' cannot go to the movie';
    }
})

console.log(canGo);


//#6

var readyToDom = [
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

var namesToDom = readyToDom.map(function(item){
    return '<h1>' + item.name + '</h1>' + '<h2>' + item.age + '</h2>';
})

console.log(namesToDom);
