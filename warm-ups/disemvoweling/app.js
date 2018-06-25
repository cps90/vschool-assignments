var allVowels = "aeiou"


const noVowels = (str) => {
    var object = {
        vowels: '',
        consonants: ''
    };
    str = str.toLowerCase();
    for (var i = 0; i < str.length; i++) {
        if (str[i] === " ") {
            continue;
        } else if (allVowels.includes(str[i])) {
            object.vowels += str[i]
        } else {
            object.consonants += str[i]
        }
    }

    return object;
}

console.log(noVowels("Pickle Rick!"));


const disemvowel = (string) => {
    let letters = string.toLowerCase().replace(/ /g, '').split('');
    return letters.reduce((final, char) => {
        if (char === 'a' || char === 'e' || char === 'i' || char === 'o'|| char === 'u') {
            final.vowels += char
        } else {
            final.consonants += char
        }
        return final;
    }, {vowels: "", consonants: ""})
}

console.log(disemvowel("Pickle Rick!"));