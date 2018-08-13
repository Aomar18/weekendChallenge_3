console.log('js');

//INITIALIZE APP 
const taskApp =  angular.module('taskApp' , [] );

//INITIALIZE CONTROLLER
taskApp.controller('taskController' , function($http){
const tc = this;

tc.listTasks = [];


//ADD TASK FUNCTION 
//POST FUNK
tc.addTask = function(taskToAdd){
    console.log('in add funk');
    console.log('add task' , taskToAdd);
    $http({
        method:'POST',
        url:'/task' ,
        data: taskToAdd
    }).then(function(response){
        console.log(taskToAdd);
        getTasks();
        tc.taskToAdd.taskIn='';
    }).catch(function(error){
        console.log('error in add funk' , error)
        alert('unable to post');
    });
}// end POST / add task funk


//GET FUNCTION get task list from server
function getTasks(){
    console.log('in get funk');
    $http({
        method:'GET' ,
        url:'/task'
    }).then(function(response){
        tc.listTasks = response.data;
    }).catch(function(error){
        console.log('error in get funk' , error);
    });
}//end get funk


//PUT function -- edit and update tasks
    tc.taskDone = function(taskId){
        $http({
            method:'PUT',
            url: '/task/taskDone/' + taskId
        }).then(function(response){
            console.log('complete');
            getTasks();
        }).catch(function(error){
            console.log('error', error);
        });
    } //end PUT

//Delete function - removes entry 
    tc.removeTask = function(taskId){
        $http({
            method:'DELETE',
            url:'/task/' + taskId
        }).then(function(response){
            console.log('task removed', taskId);
            getTasks();
        }).catch(function(error){
            console.log('error', error);
        });
    }//end delete function


getTasks();

});

