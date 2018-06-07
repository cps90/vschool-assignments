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
    res.send(pets);
})

app.listen(5000, () => {
    console.log("server is listening on port 5000")
});