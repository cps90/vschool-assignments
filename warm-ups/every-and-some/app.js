const every = (arr, callback) => {
    for (let i=0; i < arr.length; i++) {
        if(!callback(arr[i])){
            return false;
        }
    }
    return true;
}

const some = (arr, callback) => {
    for (let i=0; i < arr.length; i++) {
        if(callback(arr[i])){
            return true;
        }    
    }
    return false;
}

const myArr = [1, 2, 3, 4, 5];

console.log(every(myArr, (num) => {
    return typeof num === 'number'
}))

console.log(some(myArr, (num) => {
    return typeof num === 'number'
}))
