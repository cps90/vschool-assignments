//Prelim #1
for (i = 0; i < 10; i++) {
  console.log(i)
}

//Prelim #2
for (i = 9; i >= 0; i--) {
  console.log(i)
}

//Prelim #3
var fruit = ["banana", "orange", "apple", "kiwi"]

for (i = 0; i < fruit.length; i++) {
  console.log(fruit[i])
}

//Bronze #1
var count = [];
for (i = 0; i < 10; i++) {
  count.push(i);
}
console.log(count);


//Bronze #2
for (i = 0; i <= 100; i += 2) {
  console.log(i)
}

//Bronze #3
var fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]

for (i = 0; i < fruit.length; i += 2) {
  console.log(fruit[i])
}

//Silver #1
var peopleArray = [
  {
    name: "Harrison Ford",
    occupation: "Actor"
  },
  {
    name: "Justin Bieber",
    occupation: "Singer"
  },
  {
    name: "Vladimir Putin",
    occupation: "Politician"
  },
  {
    name: "Oprah",
    occupation: "Entertainer"
  }
];

for (i = 0; i < peopleArray.length; i++) {
  console.log(peopleArray[i].name)
}

//silver #2
var names = [];
var occupations = [];

for (i = 0; i < peopleArray.length; i++) {
  names.push(peopleArray[i].name);
  occupations.push(peopleArray[i].occupation);
}

console.log(names);
console.log(occupations);

//silver #3
var everyOtherName = [];
var everyOtherOccupation = [];

for (i = 0; i < peopleArray.length; i++) {
  if (i === 0 || i % 2 === 0) {
    everyOtherName.push(peopleArray[i].name);
  } else {
    everyOtherOccupation.push(peopleArray[i].occupation);
  }
}

console.log(everyOtherName);
console.log(everyOtherOccupation);

//gold #1
var grid1 = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0]
];
