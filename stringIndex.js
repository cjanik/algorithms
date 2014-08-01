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

  var dict = ['','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','q','x','y','z'];
  
  if ( string.length < 2 ) { return dict.indexOf(string); }
  
  var len = string.length;
  var index = 0;
  var first = string[0];

  for ( var i = 0; i < len; i++ ) {
    if ( i === len - 1 ) { 
      index += dict.indexOf(string[i]) - dict.indexOf(string[i - 1]);
    } else if ( i === len - 2 ) {
      index += buildIndex(dict.indexOf(string[i]), dict.length - 1 - i);
    } 
    else {
      index += buildIndex(dict.indexOf(string[i]), dict.length - i);
    }
  }

  // var baseIndex = buildIndex(dict.indexOf(string[0]) - );
  // var minorIndex = dict.indexOf(string[1]) - dict.indexOf(string[0]);

  // var index = baseIndex + minorIndex;

  function buildIndex(n, start){

    start = start || 26;

    console.log('here', n, start)
    var result = 0;
    while (n--) {
      result += start--;
    }
    return result;
  }

  return index;

};

// var sumToN = function(n) {

//   var result = 0;
//   n+=1;

//   while (n--) {
//     result += n;
//   }

//   return result;

// }