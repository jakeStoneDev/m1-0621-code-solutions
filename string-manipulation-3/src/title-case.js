/* exported titleCase */
function titleCase(title) {
  var lowerTitle = title.toLowerCase();
  var splitTitle = lowerTitle.split(' ');
  for (var i = 0; i < splitTitle.length; i++) {
    if (splitTitle[i] === 'javascript') {
      splitTitle[i] = 'JavaScript';
    } else if (splitTitle[i] === 'javascript:') {
      splitTitle[i] = 'JavaScript:';
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

  /* code finds the index of the colon */
  for (var j = 0; j < newTitle.length; j++) {
    if (newTitle.indexOf(':') !== -1) {
      var colonIndex = newTitle.indexOf(':');
      var capitalizeLetter = colonIndex + 2;
      newTitle[capitalizeLetter] = newTitle[capitalizeLetter].toUpperCase();
    }
  }
  /* capitalize after hyphen */
  for (var y = 0; y < newTitle.length; y++) {
    if (newTitle.indexOf('-') !== -1) {
      var dashIndex = newTitle.indexOf('-');
      var capLetter = dashIndex + 1;
      newTitle[capLetter] = newTitle[capLetter].toUpperCase();
    }
  }

  var finalTitle = newTitle.join('');

  return finalTitle;
}
