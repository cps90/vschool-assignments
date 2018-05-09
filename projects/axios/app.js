var todoUrl = "https://api.vschool.io/courtney/todo/"
var display = document.getElementById("todos")

axios.get(todoUrl).then(function(response){
  displayData(response.data)
})

function displayData(arr){
    if(arr.length){
        arr.map(function(todo){

            var title = document.createElement('h1');
            title.textContent = todo.title;
            title.className = "ttl";

            var checkbox = document.createElement("INPUT");
            checkbox.setAttribute("type", "checkbox");
            checkbox.id = "checkbox"
            checkbox.className = "check"

                var label = document.createElement('label')
                label.htmlFor = "checkbox";
                label.appendChild(document.createTextNode('Finished?'));

            var description = document.createElement('h3');
            description.textContent = todo.description

            var price = document.createElement('p');
            price.textContent = todo.price;

            var button = document.createElement('button');
            button.id = todo._id;
            button.className = "button";
            button.textContent = "delete";

            display.appendChild(title);
            display.appendChild(description);
            display.appendChild(price);
            display.appendChild(checkbox);
            display.appendChild(label);
            display.appendChild(button);

        })
    }

    var buttons = document.getElementsByClassName('button');

    for(var i = 0; i < buttons.length; i++) {
        var elem = buttons[i];
        elem.addEventListener('click', function(e) {
            console.log(e);
            axios.delete(todoUrl + e.target.id).then(function(response){
                console.log(response.data)
          })
        });
    }

    var titles =  document.getElementsByClassName("ttl");
    var checks =  document.getElementsByClassName("check");
    function checkCheckboxes (checks, titles){
        for(var i = 0; i < titles.length; i++) {
            checks[i].addEventListener('change', function(e){
                if(checks[i].checked){
                    titles[i].style.textDecoration = "line-through";
                }
            })
        }
    }

}

document.addTodo.addEventListener('submit', function(e){
    e.preventDefault();
    var newTodo = {
        title: document.addTodo.title.value,
        description: document.addTodo.description.value,
        price: document.addTodo.price.value
    }
    axios.post(todoUrl, newTodo).then(function(response){
        console.log(response.data)
    })
})
