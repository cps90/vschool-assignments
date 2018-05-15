// https://coursework.vschool.io/es6-practice-object-literals-destructuring-rest-and-spread-operators-2/

//rest and spread, green, #1
function collectAnimals(...str) {
    return str;
}
console.log(collectAnimals("dog", "cat", "mouse", "jackolope", "platypus"));

//object literals, green, #2
const fruit = ["apple", "pear"];
const sweets = ["cake", "pie"];
const vegetables = ["carrot"];

const food = { fruit, sweets, vegetables }

console.log(food);

//destructuring, green #3
const vacation = {
  location: "Burly Idaho",
  duration: "2 weeks"
};

const {location} = vacation;
const {duration} = vacation;

console.log(`We're going to have a good time in ${location} for ${duration}`)

//destructuring, green, #4
// const firstItem = items[0];
// const [ firstItem ] = items;

//destructuting, green, #5
const favoriteActivitiesInOrder = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

const [ firstFav, secondFav, thirdFav ] = favoriteActivitiesInOrder;

console.log("My top three favorite activities are " + firstFav + ", " + secondFav + ", and " + thirdFav);


//rest and spread, blue

function combineAnimals(...animals) {
    return [ ...realAnimals, ...magicalAnimals, ...mysteriousAnimals ];
}

const realAnimals = ["dog", "cat", "mouse"];
const magicalAnimals = ["jackolope"];
const mysteriousAnimals = ["platypus"];

console.log(combineAnimals());


//black, #1
const product = (a, b, c, d, e) => {
  let numbers = [1,2,3,4,5];
  return numbers.reduce((acc, number) => acc * number, 1);
}

console.log(product());

//black, #2 (use both rest and spread)
function unshift(array, ...str) {
  return [a, b, c, d, e, ...array);
}

//double black, #1 (destructuring,object literals)
function populatePeople(names){
    return names.map(function(name){
        name = name.split(" ");
        // your code
        return {
            firstName: firstName,
            lastName: lastName
        }
}

populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"])
//[
//  {firstName: "Frank", lastName: "Peterson"},
//  {firstName: "Suzy", lastName: "Degual"},
//  {firstName: "Liza", lastName: "Jones"},
//]
