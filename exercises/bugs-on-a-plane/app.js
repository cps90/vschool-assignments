// var form = document.getElementById("airline-form");
var submit = document.getElementById(submit);
var query = document.querySelector;

document.addEventListener("submit", function(e) {
    e.preventDefault()
    var firstName = document.airlineForm.firstName.value;
    var lastName = document.airlineForm.lastName.value;
    var age = document.airlineForm.age.value;
    var gender = document.airlineForm.gender.value;
    var location = document.airlineForm.travelLocation.value;
    var diet = [];
    var checkedBoxes = document.querySelectorAll("input[name=dietRes]:checked");
    for (var i = 0; i < checkedBoxes.length; i++) {
          diet.push(checkedBoxes[i].value);
      }
    alert(`First Name: + ${firstName} + Last Name: + ${lastName} + Age: + ${age} + Gender: + ${gender} + Travel Location: + ${location} + Diet: + ${diet} + Awesome, now if you die, it won't be an accident..`);
})
