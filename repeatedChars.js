// Given an array of strings as input, return an array of all strings that have repeated chars that appear together. 
// For e.g. in "hello" l and in "summer" s is a repeated char that appears together. However in "robot" o is not a repeated char 
// as it does not appear together. 
// repeatChars(['hello','robot','summer','elephant']) => ['hello','summer']

var repeatChars = function(array) {

  var results = [];
  var word;

  for ( var i = 0; i < array.length; i++ ) {
    word = array[i];
    for ( var j = 1; j < word.length; j++ ) {
      if ( word[j] === word[j-1] ) {
        results.push(word);
        break;
      }
    }
  }

  return results;

};