
// Returns all valid combinations of n-pairs of parentheses

var validParens = function(n) {

  var results = [];

  if ( !n ) { return results; }
  
  var createSet = function(current, open, close) {
    if ( current.length === n * 2 ) { 
      results.push(current);
      return;
    }
    if (!!open) {
      createSet(current + '(', open - 1, close);
    }
    if (!!close && open < close) {
      createSet(current + ')', open, close - 1);
    }
  };

  createSet('(', n-1, n);

  return results;
};
 

