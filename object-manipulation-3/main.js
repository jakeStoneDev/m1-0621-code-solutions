console.log('Lodash is loaded:', typeof _ !== 'undefined');

var players = [
  {
    name: 'Grindewald',
    hand: [],
    playerTotal: ''
  },
  {
    name: 'Geralt',
    hand: [],
    playerTotal: ''
  },
  {
    name: 'Voldemort',
    hand: [],
    playerTotal: ''
  },
  {
    name: 'Dumbledore',
    hand: [],
    playerTotal: ''
  }]
;

var deck = [{
  rank: 'Ace',
  suit: 'Hearts'
},
{
  rank: 2,
  suit: 'Hearts'
},
{
  rank: 3,
  suit: 'Hearts'
},
{
  rank: 4,
  suit: 'Hearts'
},
{
  rank: 5,
  suit: 'Hearts'
},
{
  rank: 6,
  suit: 'Hearts'
},
{
  rank: 7,
  suit: 'Hearts'
},
{
  rank: 8,
  suit: 'Hearts'
},
{
  rank: 9,
  suit: 'Hearts'
},
{
  rank: 10,
  suit: 'Hearts'
},
{
  rank: 'Jack',
  suit: 'Hearts'
}, {
  rank: 'Queen',
  suit: 'Hearts'
}, {
  rank: 'King',
  suit: 'Hearts'
}, {
  rank: 'Ace',
  suit: 'Spades'
}, {
  rank: 2,
  suit: 'Spades'
}, {
  rank: 3,
  suit: 'Spades'
}, {
  rank: 4,
  suit: 'Spades'
}, {
  rank: 5,
  suit: 'Spades'
}, {
  rank: 6,
  suit: 'Spades'
}, {
  rank: 7,
  suit: 'Spades'
}, {
  rank: 8,
  suit: 'Spades'
}, {
  rank: 9,
  suit: 'Spades'
},
{
  rank: 10,
  suit: 'Spades'
}, {
  rank: 'Jack',
  suit: 'Spades'
}, {
  rank: 'Queen',
  suit: 'Spades'
}, {
  rank: 'King',
  suit: 'Spades'
}, {
  rank: 'Ace',
  suit: 'Clubs'
}, {
  rank: 2,
  suit: 'Clubs'
}, {
  rank: 3,
  suit: 'Clubs'
}, {
  rank: 4,
  suit: 'Clubs'
}, {
  rank: 5,
  suit: 'Clubs'
}, {
  rank: 6,
  suit: 'Clubs'
}, {
  rank: 7,
  suit: 'Clubs'
}, {
  rank: 8,
  suit: 'Clubs'
},
{
  rank: 9,
  suit: 'Clubs'
}, {
  rank: 10,
  suit: 'Clubs'
}, {
  rank: 'Jack',
  suit: 'Clubs'
}, {
  rank: 'Queen',
  suit: 'Clubs'
}, {
  rank: 'King',
  suit: 'Clubs'
}, {
  rank: 'Ace',
  suit: 'Diamonds'
}, {
  rank: 2,
  suit: 'Diamonds'
}, {
  rank: 3,
  suit: 'Diamonds'
}, {
  rank: 4,
  suit: 'Diamonds'
}, {
  rank: 5,
  suit: 'Diamonds'
}, {
  rank: 6,
  suit: 'Diamonds'
}, {
  rank: 7,
  suit: 'Diamonds'
},
{
  rank: 8,
  suit: 'Diamonds'
}, {
  rank: 9,
  suit: 'Diamonds'
}, {
  rank: 10,
  suit: 'Diamonds'
}, {
  rank: 'Jack',
  suit: 'Diamonds'
}, {
  rank: 'Queen',
  suit: 'Diamonds'
},
{
  rank: 'King',
  suit: 'Diamonds'
}];

function dealDeck(player) {
  deck = deck.sort(() => Math.random() - 0.5);

  player[0].hand.push(deck[0]);
  player[0].hand.push(deck[1]);

  player[1].hand.push(deck[2]);
  player[1].hand.push(deck[3]);

  player[2].hand.push(deck[4]);
  player[2].hand.push(deck[5]);

  player[3].hand.push(deck[6]);
  player[3].hand.push(deck[7]);
}
dealDeck(players);
console.log('players:', players);

for (var j = 0; j < players.length; j++) {
  if (players[j].hand[0].rank === 'Ace' || players[j].hand[1].rank === 'Ace') {
    players[j].hand[0].rank = 11;
    players[j].hand[1].rank = 11;
  } else if (players[j].hand[0].rank === 'Jack' || players[j].hand[1].rank === 'Jack') {
    players[j].hand[0].rank = 10;
    players[j].hand[1].rank = 10;
  } else if (players[j].hand[0].rank === 'Queen' || players[j].hand[1].rank === 'Queen') {
    players[j].hand[0].rank = 10;
    players[j].hand[1].rank = 10;
  } else if (players[j].hand[0].rank === 'King' || players[j].hand[1].rank === 'King') {
    players[j].hand[0].rank = 10;
    players[j].hand[1].rank = 10;
  }

  var playerTotal = players[j].hand[0].rank + players[j].hand[1].rank;
  players[j].playerTotal = playerTotal;
}

var highScore = 0;
for (var y = 0; y < players.length; y++) {
  if (players[y].playerTotal > highScore) {
    highScore = players[y].playerTotal;
  } else if (players[y].playerTotal < highScore) {
    continue;
  }
}

var highScores = [];
for (var x = 0; x < players.length; x++) {
  if (players[x].playerTotal === highScore) {
    highScores.push(players[x]);
  }
}

if (highScores.length === 1) {
  console.log('The winner is: ', highScores[0]);
} else {
  for (var p = 0; p < highScores.length; p++) {
    console.log('Tie game!', highScores[p]);
  }
}
