var parsePokemon = new XMLHttpRequest();
var display = document.getElementById('names');

parsePokemon.onreadystatechange = function () {
    if (parsePokemon.readyState == 4 && parsePokemon.status == 200) {
    var jsonData = parsePokemon.responseText;
    var data = JSON.parse(jsonData);
    var arr = data.objects[0].pokemon;
    console.log(arr);

        arr.map(function(item){
            var name = document.createElement('p');
            name.textContent = item.name;

        display.appendChild(name);
        })
  }
};

parsePokemon.open("GET", "http://api.vschool.io:6543/pokemon.json", true);
parsePokemon.send();
