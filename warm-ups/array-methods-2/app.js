// https://coursework.vschool.io/multiple-array-methods-practice-2/

var petOwners = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47,
        pets: ["dog", "cat"]
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12,
        pets: ["dog"]
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78,
        pets: ["cat", "parrot"]
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 13,
        pets: ["cat", "parrot", "dog"]
    },
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27,
        pets: ["dog"]
    }
]
// #1

const sortedDogOwners = (arr) => {
    var dogOwners = petOwners.filter(person => {
        if(person.pets.includes('dog')) {
            return person;
        }
    })
    dogOwners.sort(function (a,b) {
        return a.age - b.age;
    })
    return dogOwners;
}

//shortened ES6
// function sortedDogOwners(arr) {
//     return arr.filter(person => person.pets.includes('dog'))
//               .sort((a,b)=> a.age - b.age)
// }

console.log(sortedDogOwners(petOwners));

//#2,
function arbitraryPractice(arr) {
  var finalNames = [];
  var nameArr = arr.filter(owner=> owner.age > 20 &&
    owner.pets.filter(pet=> pet.nickNames.length > 0).length === owner.pets.length)

  nameArr.map(name=> name.pets.map(pet=>finalNames.push(`<li>${pet.name}</li>`)))
  return finalNames
}

console.log(arbitraryPractice([
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47,
        pets: [
            {
                name: "Alfred",
                type: "dog",
                nickNames: ["Lil Alfred", "Alfy", "Alfinator"]
            },
            {
                name: "Charles",
                type: "cat",
                nickNames: ["Charley"]
            },
            {
                name: "Bark Obama",
                type: "dog",
                nickNames: ["Barack", "Mr. President"]
            },
            {
                name: "Christopher George Latore Wallace",
                type: "dog",
                nickNames: ["Notorious D.I.G.", "Diggie Smalls"]
            }

        ]
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12,
        pets: [
            {
                name: "Howard",
                type: "dog",
                nickNames: []
            },
            {
                name: "Bear",
                type: "dog",
                nickNames: []
            }
        ]
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78,
        pets: [
            {
                name: "Bird Person",
                type: "bird",
                nickNames: ["Phoenixperson"]
            },
            {
                name: "Krombopulos Michael",
                type: "Gromflomite",
                nickNames: ["Assassin man"]
            },
            {
                name: "Squanchy",
                type: "Cat-person",
                nickNames: ["Squanch", "Smarf", "Thunder Cat"]
            }

        ]
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 23,
        pets: [
            {
                name: "Morty Jr.",
                type: "Gazorpazorp",
                nickNames: ["Gwendolyn Jr."]
            },
            {
                name: "Snuffels",
                type: "dog",
                nickNames: ["Snowball"]
            }

        ]
    }
]));

//#2 Jason's method

function arbitraryPractice(people) {

    people = people.filter(function(person) {

        if (! person.pets.filter(pet => pet.nickNames.length > 0).length) {
            return false;
        }

        if (! person.pets.filter(pet => pet.type === 'dog').length) {
            return false;
        }

        if (person.age <= 20 ) {
            return false;
        }

        return true;

    });

    var pets = [];

    for (let i = 0; i < people.length; i++) {
        for (let j = 0; j < people[i].pets.length; j++) {
            pets.push(`<li>${people[i].pets[j].name}</li>`);
        }
    }

    return pets;
}
