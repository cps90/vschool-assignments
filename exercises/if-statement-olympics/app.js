//prelim #1
var myNumber = 5

if (myNumber > 3) {
    console.log("is greater than")
};

//prelim #2
var cat = {
  gender: "female",
  length: 3,
  personality: "mean"
};

if (cat.length === 3) {
    console.log("is the length")
};

//prelim #3
var pet1 = "cat"
var pet2 = "dog"

if (pet1 === pet2) {
  console.log("pets are equal")
} else {
  console.log("not the same")
};

//Bronze #1
var person = {
  name: "Bobby",
  age: 12
}
if (person.age >= 18) {
  console.log(person.name + " is allowed to go to the movie")
} else {
  console.log(person.name + " is not allowed to go to the movie")
};

//Bronze #2
if (person.name.toUpperCase().indexOf("B") === 0) {
  console.log(person.name + " is allowed to go to the movie")
} else {
  console.log(person.name + " is not allowed to go to the movie")
};

//Bronze #3
if (person.age >= 18 && person.name.toUpperCase().indexOf("B") === 0) {
  console.log(person.name + " is allowed to go to the movie")
} else {
  console.log(person.name + " is not allowed to go to the movie")
};

//silver #1
var silver = 1;

if (silver === "1") {
  console.log("strict");
} else if (silver == "1") {
  console.log("loose");
} else {
  console.log("not equal at all");
};

// Silver #2 NEEDS CLARIFICATION
if (silver <= 2) {
  console.log("yes");
}

if (3*4 > 10 && 5+10 > 10) {
  console.log("yes")
};





// var friend = {
//   name: "jake",
//   age: 28,
//   gender: "male",
//   twiceTheAge: function() {
//     this.age = this.age*2;
//   }
// }
//
// friend.twiceTheAge()
// console.log(friend.age)
