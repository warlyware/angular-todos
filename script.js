angular.module("todosApp", [])
.controller("todoController", function($scope) {
  $scope.todos = [
    { action: "Do this first", done: false, editing: false },
    { action: "Learn HB", done: true, funky: true, editing: false },
    { action: "Learn Angular", done: false, important: true, editing: false },
    { action: "Learn HB", done: true, editing: false },
    { action: "Learn Angular", done: false, editing: false },
    { action: "Learn HB", done: true, funky: true, editing: false },
    { action: "Learn Angular", done: false, important: true, editing: false },
    { action: "Learn HB", done: true, editing: false },
    { action: "Learn Angular", done: false, editing: false }
    ];
  
  $scope.clearCompleted = function() {
    $scope.todos = $scope.todos.filter(function(e) {
      return !e.done;
    });  
  };
  
  $scope.editTodo = function(todoEvt) {
    console.log(todoEvt.target);
    todoEvt.target.hide();
    // var prompt = window.prompt('Change: ' + todo.action, todo.action);
    // todo.action = prompt;   
  }

  $scope.$watch('allDone', function(newValue) {
    if (angular.isUndefined(newValue)) {
      return;
    }
    $scope.todos = $scope.todos.map(function(e) {
      e.done = $scope.allDone;
      return e;
    });
  });

  $scope.$watch('secret', function(newValue) {
    if (newValue == 'angular') {
          document.body.style.backgroundColor = newValue === 'angular' ? 'green' : 'white';
    }
  });
  
});

