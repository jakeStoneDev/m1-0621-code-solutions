var taskList = document.querySelector('.task-list');
taskList.addEventListener('click', function (event) {
  /*
  console.log(event.target);
  console.log(event.target.tagName);
  */

  if (event.target && event.target.tagName === 'BUTTON') {
    console.log('event.target: ', event.target);
    console.log('event.target tagname: ', event.target.tagName);
    var close = event.target.closest('.task-list-item');
    console.log('event.target close: ', close);
    close.remove();
  }
});
