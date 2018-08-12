console.log('js');


//INITIALIZE APP 
const toDoApp =  angular.module('toDoController' , [] );

//INITIALIZE CONTROLLER
toDoApp.controller('toDoController' , function($http){
console.log('toDoController set up')
const tdc = this;
tdc.tasks = [];
});

