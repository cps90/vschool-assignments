const mongoose = require('mongoose')
const Schema = mongoose.Schema

const issueSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        requried: true
    },
    url: {
        type: String,
        required: true
    },
    urlImage: {
        type: String,
        required: false
    },
    source: {
        type: String,
        required: true
    },
    votes: {
        type: Number, 
        default: 0
    },
    comments: [{
        name: {
            type: String
        },
        body: {
            type: String
        }
    }]
    
})

module.exports = mongoose.model("Issue", issueSchema)