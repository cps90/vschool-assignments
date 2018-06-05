const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const uuidv1 = require("uuid/v1")

app.use(bodyParser.json());


const dogs = [
    {name: "Emma", type: "bernadoodle", age: 2.5, id: 1},
    {name: "Wilson", breed: "poodle", age: .75, id: 2},
    {name: "Timber", breed: "retriever", age: 2, id: 3}
]

app.get("/dogs", (req, res) => {
    res.send(dogs)
})

app.get("/dogs/:id", (req, res) => {
    const foundDog = dogs.find(dog => dog.id === parseInt(req.params.id))
    res.send(foundDog);
})

app.post("/dogs", (req, res) => {
    req.body.id = uuidv1();
    console.log(req.body);
    dogs.push(req.body);
    res.send(req.body);
})

app.listen(8000, () => {
    console.log("Server is running on port 8000")
});