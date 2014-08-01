// Determine the count of each one, two, and three-word phrase in a given passage 

var phraseCounter = function(text) {

  var singles = {};
  var doubles = {};
  var triples = {};

  text = text.split(' ');
  var words = [];  // Keep track of the last three words
  var phrase = ''; // This will be the 'rotating key' for the above objects

  for ( var i = 0; i < text.length; i++ ) {
    
    words.push(text[i]);
    if ( words.length > 3 ) { words.shift(); }
    
    phrase = words[words.length - 1];
    if ( singles[phrase] ) {
      singles[phrase]++;
    } else {
      singles[phrase] = 1;
    }

    if ( words.length >= 2 ) {
      phrase = words.slice(0,2).join(' ');
      if ( doubles[phrase] ) {
        doubles[phrase]++;
      } else {
        doubles[phrase] = 1;
      }
    }

    if ( words.length === 3 ) {
      phrase = words.slice(0,3).join(' ');
      if ( triples[phrase] ) {
        triples[phrase]++;
      } else {
        triples[phrase] = 1;
      }
    }
  }

  for ( var each in singles ) {
    console.log('single:', each, '(' + singles[each] + ')');  // --> 'single: was (11)'
  }

  for ( var each in doubles ) {
    console.log('double:', each, '(' + doubles[each] + ')');  // --> 'double: was the (10)'
  }

  for ( var each in triples ) {
    console.log('triple:', each, '(' + triples[each] + ')');  // --> 'triple: was the best (1)'
  }

};

var myText = ['It was the best of times, it was the worst of times, it was the age of wisdom, it was', 
  'the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season', 
  'of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we', 
  'had everything before us, we had nothing before us, we were all going direct to Heaven, we were all',
  'going direct the other way--in short, the period was so far like the present period, that some of its',
  'noisiest authorities insisted on its being received, for good or for evil, in the superlative degree', 
  'of comparison only.'].join('\n').replace(/[-+\n]/gm,' ').replace('--', ' - ');



  