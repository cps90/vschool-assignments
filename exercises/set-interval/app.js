var countdown = 21

//Function Expression
var countTimer = function() {
  countdown-=1
  console.log(countdown)
  if (countdown <= 0) {
    clearInterval(intervalID)
    console.log("The end of the world has come upon us")
  }
}

//Function Declaration
// function countTimer() {
//   countdown-=1
//   console.log(countdown)
//   if (countdown <= 0) {
//     clearInterval(intervalID)
//     console.log("The end of the world has come upon us")
//   }
// }


var intervalID = setInterval(countTimer, 1000);
