console.log('js');

//INITIALIZE APP 
const taskApp =  angular.module('taskApp' , [] );

//INITIALIZE CONTROLLER
taskApp.controller('taskController' , function($http){
let tc = this;
tc.listTasks = [];

tc.taskToAdd = {
    entry: 'jogs' ,
    status: 'complete'
}

//ADD TASK FUNCTION 
tc.addTask = function(taskToAdd){
    consoe.log('in add funk');
    console.log('add task' , tc.tasktoAdd.taskIn);
    $http({
        method:'POST',
        url:'/task' ,
        data:tc.taskToAdd
    }).then(function(response){
        console.log(taskToAdd);
        getTasks();
    }).catch(function(error){
        console.log('error in add funk' , error)
        alert('unable to post');
    });
}// end add task funk

//GET FUNCTION
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
}



getTasks();

});

