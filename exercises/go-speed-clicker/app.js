var savBtn = document.getElementsByClassName("button");
var display = document.getElementsByClassName("countDisplay")

var count = localStorage.count;
display.textContent.count

saveBtn.addEventListener('click', counter);

localStorage.setItem(arg1, arg2)

function counter(){
    if(!localStorage.count){
        localStorage.count = 0
    }
    localStorage.count++
    display.textContent = localStorage.count
}
