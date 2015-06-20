var TODOS = [
  { action: "Do this first", done: false },
  { action: "Learn HB", done: true, funky: true },
  { action: "Learn Angular", done: false, important: true },
  { action: "Learn HB", done: true },
  { action: "Learn Angular", done: false },
  { action: "Learn HB", done: true, funky: true },
  { action: "Learn Angular", done: false, important: true },
  { action: "Learn HB", done: true },
  { action: "Learn Angular", done: false }
];

angular.module("todosApp", [])
.controller("todoController", function($scope) {
  $scope.todos = TODOS;
});