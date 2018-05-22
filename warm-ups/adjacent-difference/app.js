const arr = ['this', 'is', 'an', 'array'];

const combined = (arr) => {
   let total = 0;
   for (let i = 0; i < arr.length - 2; i++) {
    let combinedLen =  arr[i].length + arr[i+1].length + arr[i+2].length     
       
        if ((arr[i].length + arr[i+1].length + arr[i+2].length) > total) {
             total = combinedLen;
             var newArray = [arr[i], arr[i+1], arr[i+2]]
       }
   }
   return newArray;
}

console.log(combined(arr));

