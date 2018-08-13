console.log('js');


//INITIALIZE APP 
const toDoApp =  angular.module('taskController' , [] );

//INITIALIZE CONTROLLER
taskApp.controller('taskController' , function($http){
console.log('taskController set up')
const tc = this;
tc.tasks = [];
});


