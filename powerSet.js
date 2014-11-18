
var powerSet = function(string) {

  var set = [];

  var buildSet = function(base, rest) {

    if ( rest.length === 0 ) { return; }

    for ( var i = 0; i < rest.length; i++ ) {
      var newBase = base + rest.charAt(i);
      set.push(newBase);
      buildSet(newBase, rest.slice(i+1));
    }
  }

  buildSet('', string);
  
  return set;
};

console.log(powerSet('abcd'));

