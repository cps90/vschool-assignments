const express = require('express');
const uuid = require('uuid/v1');
const bountyRoutes = express.Router();


const bounties = [
    {
      firstName: "Betty",
      lastName: "Love",
      living: true,
      bountyAmount: 100,
      type: "Sith",
      id: 1  
    },
    {
        name: "Spencer",
        lastName: "Backman",
        living: true,
        bountyAmount: 300,
        type: "Jedi",
        id: 2  
      },
      {
        name: "Marcus",
        lastName: "Peterson",
        living: true,
        bountyAmount: 500,
        type: "Sith",
        id: 3  
      },
      {
        name: "Nate",
        lastName: "Jenson",
        living: true,
        bountyAmount: 300,
        type: "Jedi",
        id: 4  
      },
]

bountyRoutes.route('/')
    .get((req, res) => {
        console.log("this is get")
        res.send(bounties)
    })
    .post((req, res) => {
        req.body.id = uuid();
        bounties.push(req.body);
        res.send(req.body);
    })

bountyRoutes.route('/:id')
    .get((req, res) => {
        const indBounty = bounties.find(bounty => bounty.id === parseInt(req.params.id))
        res.send(indBounty);
    })
    .put((req, res) => {
        const indBounty = bounties.find(bounty => bounty.id === parseInt(req.params.id))
        const newBounty = Object.assign(indBounty, req.body);
        res.send(req.body);
    })
    .delete((req, res) => {
        const indBounty = bounties.find(bounty => bounty.id === parseInt(req.params.id))
        const index = bounties.indexOf(indBounty)
        bounties.splice(index, 1);
        res.send("You've succesfully deleted the bounty")
    })
    

module.exports = bountyRoutes;