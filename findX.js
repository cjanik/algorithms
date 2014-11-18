// x is always greater than zero.  Given a function that determines whether 
// a given number is greater than x, find x.


function greaterThanX (y) {
  return y > x ? true : false;
}

function findX() {

  var upper = 50;

  while ( true ) {
    if ( greaterThanX(upper) ) {
      break;
    } else {
      upper *= 2;
    }
  }

  var lower = 1;
  var middle;

  while ( lower <= upper ) {
    middle = Math.floor((lower + upper) / 2);
    if ( greaterThanX(middle) ) {
      upper = middle - 1;
    } else {
      if ( greaterThanX(middle + 1)) {
        return middle;
      } else {
        lower = middle + 1;
      }
    }
  }

}