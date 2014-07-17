
// My way:
var stepCombos = function(n) {

  if ( n === 0 ) { return; }

  var steps = [1,2,3];
  var count = 0;

  var moveUp = function(stepsRemaining){

    for ( var i = steps.length - 1; i >= 0; i-- ) {
      var move = steps[i];
      if ( stepsRemaining - move === 0 ) { 
        count++; 
      } else if ( stepsRemaining - move > 0 ) {
        moveUp(stepsRemaining - move);
      } else {
        continue;
      }
    }

  };

  moveUp(n);

  return count;

}


