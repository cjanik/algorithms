var rockPaperScissors = function(rounds) {

  var plays = ['rock', 'paper', 'scissors'];
  var results = [];

  var getHands = function(playedHands) {

    if ( playedHands.length === rounds ) {
      results.push(playedHands);
      return;
    }

    for ( var i = 0; i < plays.length; i++ ) {
      getHands(playedHands.concat(plays[i]));
    }
  }

  getHands([]);

  return results;
}