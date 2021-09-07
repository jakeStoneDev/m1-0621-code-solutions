/* exported titleCase */
function titleCase(title) {
  var lowerTitle = title.toLowerCase();
  var splitTitle = lowerTitle.split(' ');
  for (var i = 0; i < splitTitle.length; i++) {
    if (splitTitle[i] === 'javascript') {
      splitTitle[i] = 'JavaScript';
    } else if (splitTitle[i] === 'api') {
      splitTitle[i] = 'API';
    } else if (splitTitle[i] === 'and' || splitTitle[i] === 'or' || splitTitle[i] === 'nor' || splitTitle[i] === 'but' || splitTitle[i] === 'a' || splitTitle[i] === 'an' || splitTitle[i] === 'the' || splitTitle[i] === 'as' || splitTitle[i] === 'at' || splitTitle[i] === 'by' || splitTitle[i] === 'for' || splitTitle[i] === 'in' || splitTitle[i] === 'of' || splitTitle[i] === 'on' || splitTitle[i] === 'per' || splitTitle[i] === 'to') {
      splitTitle[i].toLowerCase();
      if (splitTitle[i] === splitTitle[0]) {
        splitTitle[i] = splitTitle[i].charAt(0).toUpperCase() + splitTitle[i].slice(1);
      }
    } else {
      splitTitle[i] = splitTitle[i].charAt(0).toUpperCase() + splitTitle[i].slice(1);
    }
  }
  var capitalTitle = splitTitle.join(' ');

  var newTitle = capitalTitle.split('');
  for (var j = 0; j < newTitle.length; j++) {
    if (newTitle[j] === ':' || newTitle[j] !== newTitle.length - 1) {
      j + 2;
      newTitle[j] = newTitle[j].charAt(0).toUpperCase() + newTitle[j].slice(1);
    }
  }
  newTitle = newTitle.join('');
  return newTitle;
}
