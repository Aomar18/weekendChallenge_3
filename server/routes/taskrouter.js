const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const ListofTasks = require('./../modules/taskSchema.js');

//POST -- adds task data to db
router.post('/', (req, res) => {
    console.log('in server side post');
    console.log('task to add:', req.body);
    let taskFromClient = req.body;
    const taskToAdd = new ListofTasks(taskFromClient);
    console.log('in router', taskToAdd);
    taskToAdd.save().then(() => {
        console.log('task added', taskToAdd);
        res.sendStatus(201);
    }).catch((error) => {
        console.log('ERROR', error);
        res.sendStatus(500);
    });
});// end post route

//GET FUNCTION - retrieves data & sends it to front end
router.get('/', (req, res) => {
    console.log('in GET HIT');
    ListofTasks.find({}).then((foundTask) => {
        res.send(foundTask);
    }).catch((error) => {
        res.sendStatus(500);
    });
});//end GET

//PUT function - updates database
router.put('/taskDone/:id', (req, res) =>{
    console.log('Edit found task', req.params.id);

   ListofTasks.findOne({_id: req.params.id}).then((foundTask) => {
        console.log("task found" , foundTask);
        if(foundTask.taskDone == true){
            foundTask.taskDone = false;
        }
        else if (foundTask.taskDone == false) {
            foundTask.taskDone = true;
        }
        foundTask.save().then((modifiedTask) => {
            console.log("task modified" , modifiedTask);
            res.sendStatus(200);
        }).catch((error) => {
            res.sendStatus(500);
            console.log('error put funk', error);
        })
   });
});// end put funk

//DELETE function - removes tasks from list and server side
router.delete('/:id', (req, res) => {
    ListofTasks.findByIdAndRemove(req.params.id).then((response) => {
        res.sendStatus(200);
    }).catch((error) =>{
        res.sendStatus(500);
    });
});//end delete funk


module.exports = router;