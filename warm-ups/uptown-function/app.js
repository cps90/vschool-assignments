var lyrics = ["This", "hit", "that", "ice", "cold", "Michelle", "Pfeiffer", "that", "white", "gold", "This", "one", "for", "them", "hood", "girls", "Them", "good", "girls", "straight", "masterpieces", "Stylin'",  "whilen'", "livin'", "it", "up", "in", "the", "city", "Got", "Chucks", "on", "with", "Saint", "Laurent", "Gotta", "kiss", "myself", "I'm", "so", "pretty"];


//#4

function everyOtherReverse(arr) {
  var newArray = [];
  for ( var i = 0; i < arr.length; i += 2) {
    newArray.push(arr[i + 1], arr[i]);
  }
  return newArray.join(' ');
}

console.log(everyOtherReverse(lyrics));
