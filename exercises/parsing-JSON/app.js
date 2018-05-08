var parsePokemon = new XMLHttpRequest();

parsePokemon.onreadystatechange = function () {
  if (parsePokemon.readyState == 4 && parsePokemon.status == 200) {
  var jsonData = parsePokemon.responseText;
  var data = JSON.parse(jsonData);
  var arr = data.objects[0].pokemon;
  // for loop, arr[i]; arr[i].name;  look into doc.createlementbyID; append child()....
  }
};

parsePokemon.open("GET", "http://api.vschool.io:6543/pokemon.json", true);
parsePokemon.send();
