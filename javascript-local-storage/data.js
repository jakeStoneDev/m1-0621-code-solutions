/* exported todos */

var todos = [];

window.addEventListener('beforeunload', function (event) {
  var previousTodosJSON = localStorage.getItem('javascript-local-storage');

  var todosJSON = JSON.stringify(todos);
  localStorage.setItem('javascript-local-storage', todosJSON);

  if (previousTodosJSON !== null) {
    todos = JSON.parse(previousTodosJSON);
  }
});
