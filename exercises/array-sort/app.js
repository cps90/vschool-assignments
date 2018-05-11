// https://coursework.vschool.io/array-sort-exercises/

//#1
var numbers = [1, 3, 5, 2, 90, 20]

function leastToGreatest(arr) {
    return arr.sort(function(a, b){
        return a - b;
    })
}
console.log(leastToGreatest(numbers));

//#2
function greatestToLeast(arr) {
    return arr.sort(function(a,b){
        return b - a;
    })
}
console.log(greatestToLeast(numbers));

//#3
var strings = ["dog", "wolf", "by", "family", "eaten"];

function lengthSort(arr) {
    return arr.sort(function(a,b){
        return a.length - b.length;
    })
}
console.log(lengthSort(strings));

//#4
function alphabetical(arr) {
    return arr.sort()
}
console.log(alphabetical(strings));

//#5
var people = [
    {
        name: "Quiet Samurai",
        age: 22
    },
    {
        name: "Arrogant Ambassador",
        age: 100
    },
    {
        name: "Misunderstood Observer",
        age: 2
    },
    {
        name: "Unlucky Swami",
        age: 77
    }
]

function byAge(arr){
    return arr.sort(function(a,b){
      return a.age - b.age
    })
}
console.log(byAge(people));
