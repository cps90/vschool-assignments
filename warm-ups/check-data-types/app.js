// https://coursework.vschool.io/check-data-types/

function checkTypes(arr) {  
    // for (var i=0; i<arr.length; i++) {
    //     for (var j=0; j<arr[i].length; j++) {
    //         if (typeof arr[i][j] === typeof arr[i][j]) {
    //         return true
    //         }
    //     }
    // }
    return arr.every((array, i, parentArr) =>
    typeof array[i] === typeof parentArr[parentArr.length - 1][i] 
    // &&
    // array.every((elem, i, childArr) => typeof elem === typeof childArr[childArr.length - 1])
);
}


const multiD1 = [[1,2,3],["a","b","c"],[true, true, true]]  

console.log(checkTypes(multiD1))  
// returns false (inner arrays aren't consistent with each other's data types)


const multiD2 = [[true,false,true],[false,false,true]]  

console.log(checkTypes(multiD2))  
// returns true (each inner array contains the same data type as the others)