
function hasParenthesis(str) {
    var count1 = 0;
    var count2 = 0;

    for (var i = 0; i < char.length; i++) {
        if ( char[i] === '(' ) {
            count1++
        } else if ( char[i] === ')' ) {
            count2++
        }
        if (count2 > count1) {
            return false;
        }
    } 
    if (count1 !== count2){
        return false
    }
    return true  
}


console.log(balanceParenthesis("()()")) // -> true
console.log(balanceParenthesis("(())")) // -> true
console.log(balanceParenthesis("()))")) // -> false

console.log(balanceParenthesis(")()(")) // -> false
console.log(balanceParenthesis("())(")) // -> false