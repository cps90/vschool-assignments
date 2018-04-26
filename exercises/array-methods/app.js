var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

// console.log("fruit: ", fruit);
// console.log("vegetables: ", vegetables);

//#1 remove last item
// var removeLastItem = fruit.pop();
// console.log(removeLastItem);
// console.log(fruit);

function removeLastItem(x) {
  return x.pop()
};
console.log(removeLastItem(fruit));
console.log(fruit);

//#2 remove first removeLastItem
function removeFirstItem(x) {
  return x.shift()
};
console.log(removeFirstItem(vegetables));
console.log(vegetables);

//#3 find index of
var index = function(x, y) {
  return x.indexOf(y)
};
console.log(index(fruit, "orange"));

//#4 add that number to fruit arry
function addToFruit(x) {
  return fruit + "," + fruit.indexOf("orange")
};
console.log(addToFruit());

//#5 find length of vegatables array
var vegetablesLength = vegetables.length;
console.log(vegetablesLength);

//#6 add that number to veg array
var addToVeg = function(x, y) {
  return vegetables.concat(vegetablesLength)
};
console.log(addToVeg());

//#7 put two arrays together
var food = fruit.concat(vegetables);
console.log(food);

//#8 remove two items from new string starting at index 4
var splicedFood = food.splice(4, 2);
console.log(food);

//#9
var revFood = food.reverse();
console.log(revFood);

//#10
console.log(food.toString());
