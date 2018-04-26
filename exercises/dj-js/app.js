var bigBox = document.getElementById("big-box");
// var clickMe = document.getElementById("click-me");



// bigBox.style.backgroundColor = "red";
bigBox.addEventListener('mouseover', changeBoxColorHover);
function changeBoxColorHover() {
      bigBox.style.backgroundColor = "blue";
      console.log("This box should change to blue");
}



bigBox.addEventListener('mousedown',function() {
    bigBox.style.backgroundColor = "red";
    console.log("this box should change to red")
})

bigBox.addEventListener('mouseup', changeBoxColorMouseUp);
function changeBoxColorMouseUp() {
  bigBox.style.backgroundColor = "yellow";
  console.log("this box should change to yellow")
}

bigBox.addEventListener('dblclick', changeBoxColorDblClick);
function changeBoxColorDblClick() {
    bigBox.style.backgroundColor = "green";
    console.log("this box should change to green")
}

document.addEventListener('scroll', changeBoxColorScroll);
function changeBoxColorScroll() {
    bigBox.style.backgroundColor = "orange";
    console.log("this box should change to orange")
}

document.addEventListener('keydown', changeBoxColorKeydown);
function changeBoxColorKeydown(event) {
    console.log(event)
    if (event.key === "g") {
      bigBox.style.backgroundColor = "green"
    }
}
