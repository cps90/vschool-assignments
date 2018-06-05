const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const uuidv1 = require("uuid/v1")

app.use(bodyParser.json());
app.use('/bounties', require('./routes/bounty'));


app.listen(8080, () => {
    console.log("Server is listening on port 8080")
});