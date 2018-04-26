

document.baddiesForm.addEventListener("submit", function(e) {
e.preventDefault()

var goombaValue = document.baddiesForm.goombas.value
var bobombValue = document.baddiesForm.bobombs.value
var cheepCheepValue = document.baddiesForm.cheepCheeps.value
document.getElementById('totalCoins').innerHTML = `The total value = ${(goombaValue * 5) + (bobombValue * 7) + (cheepCheepValue * 11)}`

})
