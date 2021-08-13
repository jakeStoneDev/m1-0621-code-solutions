var tabCont = document.querySelector('.tab-container');

var tabs = document.getElementsByClassName('tab');

var view = document.getElementsByClassName('view');

tabCont.addEventListener('click', function (event) {
  if (event.target && event.target.className === 'tab') {

    for (var i = 0; i < tabs.length; i++) {
      if (event.target === tabs[i]) {
        tabs[i].className = 'tab active';
      } else {
        tabs[i].className = 'tab';
      }
    }
    var dataView = event.target.getAttribute('data-view');
    for (var v = 0; v < view.length; v++) {
      if (view[v].getAttribute('data-view') !== dataView) {
        view[v].className = 'view hidden';
      } else {
        view[v].className = 'view';
      }
    }
  }
});
