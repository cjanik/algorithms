// Convert a given number into dollars and cents

var numbersToWords = {
  0: 'zero',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
  20: 'twenty',
  30: 'thirty',
  40: 'forty',
  50: 'fifty',
  60: 'sixty',
  70: 'seventy',
  80: 'eighty',
  90: 'ninety',
};
var numbersToPlace = {
  10: 'ten',
  100: 'hundred',
  1000: 'thousand',
  1000000: 'million',
  1000000000: 'billion',
  1000000000000: 'trillion',
  1000000000000000: 'quadrillion',
  1000000000000000000: 'quintillion',
};

var checkWriter = function(number) {

  if ( typeof number !== 'number' ) { throw 'input must be a number'; }

  var result = '';
  var decimal;

  if ( number % 1 !== 0 ){
    decimal = Math.round(100 * (number % 1));
    number = Math.floor(number);
  }

  var writeNumbers = function(number){
    
    var output = '';
    var numberInPlace;
    var remainder;
    var place;


    if ( numbersToWords[number] ) {
      output += numbersToWords[number];
    } else if ( number < 100 ) {
      remainder = number % 10;
      numberInPlace = number - remainder;
      output += numbersToWords[numberInPlace] + ' ' + numbersToWords[remainder];
    } else if ( number < 1000 ) {
        place = 100;
        numberInPlace = Math.floor(number/place);
        remainder = number - (numberInPlace * place);
        output += numbersToWords[numberInPlace] + ' ' +  numbersToPlace[place];
        output += ( remainder > 0 ) ? ' and ' + writeNumbers(remainder) : '';
    } else {
      place = 1000;
      while ( place * 1000 <= number ) {
        place *= 1000;
      }
      numberInPlace = Math.floor(number/place);
      remainder = number - (numberInPlace * place);
      output += writeNumbers(numberInPlace) + ' ' + numbersToPlace[place] + ', ' + writeNumbers(remainder);
    }

    return output;
  };

  result += writeNumbers(number);
  result += ( Math.floor(number) > 1 || Math.floor(number) === 0 ) ? ' dollars' : ' dollar';

  if ( decimal ) {
    result += ' and ' + writeNumbers(decimal);
    result += ( decimal === 1 ) ? ' cent' : ' cents';
  }

  return result[0].toUpperCase() + result.slice(1);

};