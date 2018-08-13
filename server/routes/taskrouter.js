const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

//require module containing schema
const taskList = require('./../modules/taskSchema.js');

console.log('in router');

//POST
router.post('/', (req, res) => {
    console.log('in server side post');
    console.log('task to add:', req.body);
    //get data from DOM via client
    let taskFromClient = req.body;

    //create new instance of schema
    const taskToAdd = new TaskSchema(taskFromClient);
    console.log('in router post:', taskToAdd);
    //send data to database
    taskToAdd.save().then(() => {
        console.log('task added', taskToAdd);
        res.sendStatus(201);
    }).catch((error) => {
        console.log('ERROR', error);
        res.sendStatus(500);
    });
});// end post route

//GET FUNCTION
router.get('/', (req, res) => {
    console.log('in GET HIT');
    taskList.find({}).then((foundtaskList) => {
        res.send(foundtaskList);
    }).catch((error) => {
        res.sendStatus(500);
    });
});//end GET


module.exports = router;