//https://coursework.vschool.io/array-shuffler/


// let arr = [1, 2, 3, 4, 5];

// const shuffle = (arr) => {
//      arr.sort((a,b) => { return 0.5 - Math.random() });
// }

// console.log(shuffle())

//Spencer's Method
const shuffle = arr => {
    var newArr = [];
        while(newArr.length < arr.length) {
        var num = Math.floor(Math.random() * arr.length);
        if(newArr.includes(arr[num])) {
            continue;
        } else {
            newArr.push(arr[num])
        }
    }
    return newArr;
}
console.log(shuffle([1, 2, 3, 4, 5, 6, 7]));


