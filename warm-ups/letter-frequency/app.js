// https://coursework.vschool.io/letter-frequency/

var phrase = 'slimy smelly solution';

//#1
function findFrequency(str) {
  var freq = {};
  for (var i = 0; i < str.length; i++){
    if (freq.str[i]) {
      freq.str[i]++
    } else {
      freq[str[i]] = 1
    }
  }
  return freq;
}
console.log(findFrequency(phrase));


//#2
function findFrequency(str) {
  var freq = {};
  var newStr = '';
  for (var i = 0; i < str.length; i++){
    if (freq[str[i]]) {
      freq[str[i]]++
    } else {
      freq[str[i]] = 1
      newStr += str[i];
    }
  }
  return [freq, newStr]
}
console.log(findFrequency(phrase));


//#3
function findFrequency(str) {
  var freq = {};
  var sorted = [];
  for (var i = 0; i < str.length; i++){
    if (freq[str[i]]) {
      freq[str[i]]++;
    } else {
      freq[str[i]] = 1;
    }
  }
  for (var letter in frequency){
    sorted.push([letter, frequency[letter]]);
  }
  sorted.sort(function(a,b){return b[1] - a[1]})
  return sorted;
}
