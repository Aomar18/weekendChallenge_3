console.log('js');

//INITIALIZE APP 
const toDoApp =  angular.module('taskController' , [] );

//INITIALIZE CONTROLLER
taskApp.controller('taskController' , function($http){
console.log('taskController set up')
const tc = this;
tc.listofTasks = [];

//ADD TASK FUNCTION 
tc.addTask = function(taskToAdd){
    consoe.log('in add funk');
    console.log('add task' , itemToAdd);
    $http({
        method:'POST',
        url:'/task' ,
        data:itemToAd
    }).then(function(response){
        console.log(itemToAdd);
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
        method: 'GET' ,
        url:'/task'
    }).then(function(response){
        tc.listofTask = response.data;
    }).catch(function(error){
        console.log('error in get funk' , error);
    });
}



getTasks();

});

