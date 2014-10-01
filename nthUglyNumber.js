// Write a function to find the nth "ugly number". Ugly numbers are numbers that can only be fully divided by 1, 2, 3, 5 and itself.

function uglyNumbers(n) {

  var result;
  var i = 1;

  while (n) {
    if ( i % 2 === 0 && i % 3 === 0 && i % 5 === 0 ) {
      result = i;
      n--;
    }
    i++;
  }

  return result;

}

