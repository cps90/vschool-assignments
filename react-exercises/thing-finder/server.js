const express = require("express")
const app = express();
const bodyParser = require("body-parser")
const uuid = require("uuid/v1")

app.use(bodyParser.json());

const pets = [
    {name: "Emma", type: "dog", color: "black", age: 2},
    {name: "Wilson", type: "dog", color: "cream", age: .75},
    {name: "Timber", type: "dog", color: "gold", age: 2},
    {name: "Lola", type: "dog", color: "gold", age: 4},
    {name: "Peaches", type: "cat", color: "orange", age: 4},
    {name: "Punkin", type: "cat", color: "tabby", age: 10}
]

app.get(('/pets'), (req, res) => {
    if (req.query) {
        const query = req.query;
        const filterData = (query, pets) => {
            return pets.filter(entry => Object.keys(query).every(key => entry[key] === query[key])
        )}
        res.send(filterData(query, pets)); 
    }
    else {
        res.send(pets);
    }    
})


app.listen(5000, () => {
    console.log("server is listening on port 5000")
});

