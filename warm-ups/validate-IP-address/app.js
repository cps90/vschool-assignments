const validateIPAddress = (str) => {
    var strs = str.split('.');
    if(strs.length !== 4) {
        return false;
    } 
    return strs.every(n => Number(n>0 && n<=255))
        
}




console.log(validateIPAddress('172.16.254.1')) // true
console.log(validateIPAddress('172.16.290.1')) // false
console.log(validateIPAddress('172.230.1')) // false
console.log(validateIPAddress('1ad.230.14.52')) // false
console.log(validateIPAddress('1.230.14.52')) // true

