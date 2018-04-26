var displayDiv = document.getElementById("displayDiv");
var count = 5;
var countdownTimer = function () {
  count--;
  displayDiv.textContent = count;
  if (count <= 0) {
  clearInterval(intervalID);
  displayDiv.textContent = "IT'S THE END OF THE WORLD BITCHES"
  }
}


var intervalID = setInterval(countdownTimer, 1000);
