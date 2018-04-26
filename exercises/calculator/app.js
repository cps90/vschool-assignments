document.addNumbers.addEventListener("submit", function(e){
    e.preventDefault();
    var firstNumber = document.addNumbers.firstNumber.value
    var secondNumber = document.addNumbers.secondNumber.value
    var result = Number(firstNumber) + Number(secondNumber)

    document.getElementById('addResult').innerHTML = `${firstNumber} + ${secondNumber} = ${result}`
})


document.subtractNumbers.addEventListener("submit", function(e){
    e.preventDefault();
    var firstNumber = document.subtractNumbers.firstNumber.value
    var secondNumber = document.subtractNumbers.secondNumber.value
    var result = Number(firstNumber) - Number(secondNumber)

    document.getElementById('subtractResult').innerHTML = `${firstNumber} - ${secondNumber} = ${result}`
})

document.multiplyNumbers.addEventListener("submit", function(e){
    e.preventDefault();
    var firstNumber = document.multiplyNumbers.firstNumber.value
    var secondNumber = document.multiplyNumbers.secondNumber.value
    var result = Number(firstNumber) * Number(secondNumber)

    document.getElementById('multiplyResult').innerHTML = `${firstNumber} x  ${secondNumber} = ${result}`
})
