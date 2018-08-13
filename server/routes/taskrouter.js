const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

//require module containing schema
const taskList = require('./../modules/taskSchema.js');

//POST
router.post('/', (req, res) => {
    console.log('in server side post');
    console.log('task to add:', req.body);
    let taskFromClient = req.body;
    const taskToAdd = new TaskSchema(taskFromClient);
    console.log('in router', taskToAdd);
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