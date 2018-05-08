var dictionary = {}

function addWord (word, define) {
    if(!word.replace(/([^aeiou])s/)) {
      dictionary[word] = define;
      return dictionary[word]
    } else {
      return "plurals not allowed"
    }
}


function lookItUp (word) {
    return dictionary[word]
}

addWord('happy', 'the feeling of being content')
addWord('zebra', 'a black and animal')
module.exports = {
    addWord,
    lookItUp
}
