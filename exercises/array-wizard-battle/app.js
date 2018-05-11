var wizards = [
  {
    name: "Edwin Odesseiron",
    age: 37,
    alignment: "lawful evil"
  },
  {
    name: "Harry Potter",
    age: 21,
    alignment: "neutral good"
  },
  {
    name: "Hermony Granger",
    age: 21,
    alignment: "lawful good"
  },
  {
    name: "Ronny the Bear",
    age: 21,
    alignment: "neutral good"
  },
  {
    name: "Gandalf",
    age: 100,
    alignment: "neutral good"
  }
];

// #1
function consoleName(arr) {
 return arr.forEach(function(item){
     console.log(item.name)
})
}

// consoleName(wizards);

// #2

wizards.forEach(function(wizard){
    wizard.isAlive = true;
})
// console.log(wizards);

// #3
const neutralGood = [];
wizards.forEach(function(wizard){
  if (wizard.alignment === "neutral good") {
        neutralGood.push(wizard);
  }
})
// console.log(neutralGood);

// #4
// let lawfulGood = wizards.findIndex(wizard => wizard.alignment === "lawful good")

var lawfulGood = wizards.findIndex(function(wizard){
        return wizard.alignment === "lawful good"
})
console.log(lawfulGood);

// #5
// var wizardLives = wizards.every(function(wizard){
//     return wizard.isAlive === true;
// })
//
// console.log(wizardLives);

// #6
var wizardNG = wizards.some(function(wizard){
  return wizard.alignment === "neutral good"
})
console.log(wizardNG);

// #7
var killTheNeutrals = [];

wizards.forEach(function(wizard){
    if (wizard.alignment === "neutral good"){
      wizard.isAlive = false;
      killTheNeutrals.push(wizard);
    }
})
console.log(killTheNeutrals);

// #8
var wizardLives = wizards.every(function(wizard){
    return wizard.isAlive === true;
})

console.log(wizardLives);

// #9
var wizardLives = wizards.some(function(wizard){
    return wizard.isAlive === true;
})

console.log(wizardLives);
