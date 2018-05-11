// https://coursework.vschool.io/array-reduce-exercises/

// #1
var numbers = [1, 2, 3];
function total(arr) {
  return arr.reduce(function(a,b){
    return a + b
  })
}
console.log(total(numbers));

// #2
function stringConcat(arr) {
  return arr.reduce(function(a,b) {
    return a.concat(b)
  }, "");
}
console.log(stringConcat(numbers));

  // #3
  var voters = [
      {name:'Bob', age: 30, voted: true},
      {name:'Jake', age: 32, voted: true},
      {name:'Kate', age: 25, voted: false},
      {name:'Sam', age: 20, voted: false},
      {name:'Phil', age: 21, voted: true},
      {name:'Ed', age:55, voted:true},
      {name:'Tami', age: 54, voted:true},
      {name: 'Mary', age: 31, voted: false},
      {name: 'Becky', age: 43, voted: false},
      {name: 'Joey', age: 41, voted: true},
      {name: 'Jeff', age: 30, voted: true},
      {name: 'Zack', age: 19, voted: false}
  ];

function totalVotes(arr) {
  return arr.reduce(function(final, voter){
    if (voter.voted){
      final++
    }
    return final
  }, 0)
}
console.log(totalVotes(voters));

//#4
var wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];

function shoppingSpree(arr) {
    return arr.reduce(function (final, item){
        final += item.price
        return final;
    }, 0)
}
console.log(shoppingSpree(wishlist));

//#5
var arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];

function flatten(arr) {
    return arr.reduce(function (final, item){
        return final.concat(item);
    }, [])
}
console.log(flatten(arrays));

//#6
function voterResults(voters) {

    return voters.reduce(function (final, voter) {
        if (voter.age >= 18 && voter.age <=25) {
            final.youth++
            if (voter.voted === true){
                final.youngVotes++
            }
        } else if (voter.age >= 26 && voter.age <=35){
            final.mids++
            if (voter.voted === true) {
                final.midVotes++
            }
        } else if (voter.age >= 35  && voter.age <= 55) {
          final.olds++
          if (voter.voted === true) {
              final.oldVotes++
          }
        }
        return final
  }, {
        youth: 0,
        youngVotes: 0,
        mids: 0,
        midVotes: 0,
        olds: 0,
        oldVotes: 0
    }
)

}
console.log(voterResults(voters));
