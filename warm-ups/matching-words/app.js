// https://coursework.vschool.io/matching-words/
// write a program that returns an array of every word that appears more than once in the phrase. Your final array should have just one instance of the repeated words. So if you were to find a word multiple times, your final array should have it just once.

let myString = "Banh mi pull skateboard ipsum lorem, kombucha scenester banjo. Franzen mlkshk consequat, PBR&B lever lever listicle irony pop-up sriracha on the saliva. Shabby on chic eu iceland far next level far lever pull drinking the right vinegar fanny pack pull minim right chicharrones migas."

function duplicates() {
  return myString.split(" ")
      .filter(function(word, i, arr){
          return i != arr.indexOf(word);
          //get all occurences of duplicates
      })
      .filter(function(word, i, arr){
          return i == arr.indexOf(word);
          //gets a unique list of those duplicate occurences
      })
}

console.log(duplicates());


const secretFinder = arr => {
    let newArr = arr.split(' ');
    let extras = [];
    let doubled = [];
    let final = [];
    for (let i = 0; i < newArr.length; i++){
        if(extras.indexOf(newArr[i]) === -1){
          extras.push(newArr[i]);
        } else {
          doubled.push(newArr[i]);
        }
    }
    for (let j = 0; j<doubled.length; j++){
        if(final.indexOf(doubled[j]) === -1){
            final.push(doubled[j])
        }
    }
    return final
}
console.log(secretFinder(myString));
