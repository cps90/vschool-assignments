var people = [
  {
    firstName: "Sarah",
    lastName: "Palin",
    age: 47
  },{
    firstName: "Frank",
    lastName: "Zappa",
    age: 12
  },{
    firstName: "Rick",
    lastName: "Sanchez",
    age: 78
  },{
    firstName: "Morty",
    lastName: "Smith",
    age: 13
  },{
    firstName: "Kyle",
    lastName: "Mooney",
    age: 27
  }
]

// 1) Return a list of everyone older than 18 and also sorted
// alphabetically by last name.

function sortedOfAge(arr){
    var newArr = arr.filter(function(people) {
        return people.age > 18
    })
    var sorted = newArr.sort(function(a,b) {
        return a.lastName > b.lastName
    })
    return sorted
}

console.log(sortedOfAge(people))

// 2) Using the same array from the problem above, return a sorted list, oldest to youngest, of People in <li>s

function toDisplayInHTML(arr){
  var newArr = arr.sort(function(a,b){
      return b.age - a.age
  }).map(function(person){
      return `${person.firstName} ${person.lastName} is ${person.age}`
  })
  return newArr;
}

console.log(toDisplayInHTML(people))
