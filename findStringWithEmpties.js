// given a sorted array of strings interspersed with empty strings, find the location of a given string
// example: find 'mouse' in ['bird', '', '', 'cat', '', 'mouse', ''] -> should return '5'

var findString = function(array, target, first, last) {

  if ( target === '' ) { return -1; }

  var first = first || 0;
  var last = last || array.length - 1;
  var middle = (( first + last ) / 2) | 0;

  var step = 1;

  while ( array[middle] === '' ) {
    if ( array[middle + step] !== '' ) {
      middle = middle + step;
    } else if ( array[middle - step] !== '' ) {
      middle = middle - step;
    } else {
      if ( middle - step <= start && middle + step >= last ) { return -1; } 
      step *=2;
    }
  }
  
  while ( first <= last ) {  
    if ( array[middle] === target ) { 
      return middle;
    } else if ( array[middle] > target ) {
      return findString(array, target, first, middle - 1)
    } else if (array[middle] < target ) {
      return findString(array, target, middle + 1, last);
    }
  }

  return -1;
}

var list = ['', 'ant', 'bird', 'cat', '', '', 'dog', '', 'mouse', '', '', 'zebra'];
console.log(findString(list, 'cat'));
