const database = [  
    {firstName: "Jack", lastName: "Smith", age: 2},
    {firstName: "Jill", lastName: "Johnson", age: 20},
    {firstName: "Jill", lastName: "Smith", age: 100},
    {firstName: "Jack", lastName: "White", age: 2}
];

const filterDatabase = ({}, arr) => {
    for (let i=0; i<arr.length; i++) {
    //if object is empty, return array
        if (object === {}) {
            return database;
        }
    //if object has no matches, return empty array
        if (!database.includes(object)) {
            return [];
        }
    //if object matches array, return matched objects
       if (database.inlcudes(object)) {
           return database[i];
       }
    }   
}


console.log(filterDatabase({}, database));  
    //returns entire database array

console.log(filterDatabase({dolphin: "squeak!"}, database));  
    //returns empty array

console.log(filterDatabase({firstName: "Jack", age: 2}, database));  
    //returns 
    // [
    //     {firstName: "Jack", lastName: "Smith", age: 2},
    //     {firstName: "Jack", lastName: "White", age: 2}
    // ]
