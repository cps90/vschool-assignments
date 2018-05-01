var firstName = document.userInfo.firstName.value;
var lastName = document.userInfo.lastName.value;
var age = document.userInfo.age.value;
var gender = document.userInfo.gender.value;
var destination = document.userInfo.destination.value;


document.userInfo.addEventListener("submit", function(e) {
  e.preventDefault()
  var firstName = document.userInfo.firstName.value;
  var lastName = document.userInfo.lastName.value;
  var age = document.userInfo.age.value;
  var gender = document.userInfo.gender.value;
  var destination = document.userInfo.destination.value;

  var checkedDiet = [];
  var checkedBoxes = document.querySelectorAll("input[name=dietRes]:checked");

  for (var i = 0; i < checkedBoxes.length; i++) {
        checkedDiet.push(checkedBoxes[i].value);
    }
    alert("Name: " + firstName + " " + lastName + " " +  "Age: " + age + " " + "Gender: " + gender + " " +  "Destination: " +  destination + " " + "Diet Restrictions: " + checkedDiet);
})
