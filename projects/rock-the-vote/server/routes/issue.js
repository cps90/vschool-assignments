const express = require('express')
const issueRouter = express.Router()
const Issue = require('../models/issue')

issueRouter.get('/', (req, res) => {
    Issue.find((err, issues) => {
        if (err) return res.status(500).send(err)
        return res.status(200).send(issues)
    })
})

issueRouter.post('/', (req, res) => {
    const newIssue = new Issue(req.body)
    newIssue.save((err, newIssue) => {
        if (err) return res.status(500).send(err)
        return res.status(201).send(newIssue)
    })
})

issueRouter.post('/:id/comments', (req, res) => {
    Issue.findByIdAndUpdate(
        req.params.id,
        {$push: {comments: req.body}},
        {new: true},
        (err, updatedIssue) => {
            if (err) return res.status(500).send(err)
            return res.send(updatedIssue)
        }
    )
})

issueRouter.put('/:id', (req, res) => {
    Issue.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true},
        (err, updatedIssue) => {
            if (err) return res.status(500).send(err)
            return res.send(updatedIssue)
        })
})

issueRouter.delete('/:id', (req, res) => {
    Issue.findOneAndRemove({ _id: req.params.id }, (err, deletedIssue) => {
        if (err) return res.status(500).send(err);
        return res.send({ message: "Issue was successfully deleted", deletedIssue})
    })
})

module.exports = issueRouter