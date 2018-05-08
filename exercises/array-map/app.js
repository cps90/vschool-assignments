function doubleNumbers(arr){
  arr.map(function(item) {
    return item * 2;
  })
}

console.log(doubleNumbers([2, 5, 100])); // [4, 10, 200]
