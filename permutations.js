// Write a method that returns all permutations of a string of unique characters

var permutations = function(string) {

  string = string.split('');
  var results = [];

  var permute = function(input, chars) {

    chars = chars || [];

    for ( var i = 0; i < input.length; i++ ) {
      var ch = input.splice(i, 1)[0];
      chars.push(ch);
      if ( input.length === 0 ) { 
        results.push(chars.join(''));
      }
      permute(input);
      input.splice(i, 0, ch);
      chars.pop();
    }
  }

  permute(string);
  return results;
}
 
var letters = 'abc';
console.log(permutations(letters));


// 'abc'
// 'acb'
// 'bac'
// 'bca'
// 'cab'
// 'cba'

//   a      
//  b c
// c   b 



