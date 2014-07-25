/**
* Each letter of the alphabet can each be found at an index - 'a' @ 1, 'b' @ 2, . . . 'z' @ 26.
* Once the end of the alphabet is reached, we start over with 'ab', 'ac' . . . 'az' beginning 
* at index 27. Then 'bc' - 'bz', 'cd' - 'cz', and so on until we reach three letter strings
* beginning with 'abc', 'abd', etc.  This pattern continues until we reach the final string
* which will include the entire alphabet.  
*
* Write a method that accepts one of these strings and returns the index at which it can be found.
*
*/

var stringIndex = function(string) {

  if ( string.length === 0 ) { return 0;}

  var dict = ['','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','q','x','y','z'];
  
  var len = string.length;
  if ( len === 1 ) { return dict.indexOf(string); }

  var baseIndex = buildIndex(dict.indexOf(string[0]));
  var minorIndex = dict.indexOf(string[1]) - dict.indexOf(string[0]);

  var index = baseIndex + minorIndex;

  function buildIndex(n){
    var result = 0;
    var current = dict.length - 1;
    while (n--) {
      result += current--;
    }
    return result;
  }

  return index;

};