var url = "http://localhost:8080/monkeys"
var query = {
    color: "black",
    species: "howler"
}


function stringifyURL(url, query) {
    var queryStr = '?'
    //convert object to usable strings
    for(let key in query){
        queryStr += key + '=' + query[key] + '&'
    }
    //takes off last '&' and concats strs together
    return url + queryStr.slice(0, -1)
  
}

console.log(stringifyURL());
