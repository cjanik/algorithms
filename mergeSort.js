// Recursive

var mergeSort = function(array) {

  if ( array.length < 2 ) { return array; }

  var middle = Math.floor(array.length/2);
  var left = array.slice(0, middle);
  var right = array.slice(middle, array.length);

  return merge(mergeSort(left), mergeSort(right));

};

var merge = function(left, right) {

  var result = [];

  var m = 0;
  var n = 0;
  while ( m < left.length && n < right.length ) {
    if ( left[m] <= right[n] ) {
      result.push(left[m++]);
    } else {
      result.push(right[n++]);
    }    
  }

  while ( m < left.length ) { result.push(left[m++]); }
  while ( n < right.length ) { result.push(right[n++]); }
  
  return result;
};

// Iterative

// var mergeSort = function(array) {
//   if ( array.length < 2 ) { return array; }
//   var step = 1;
//   var start, middle;
//   while ( step < array.length ) {
//      start = 0;
//      middle = step;
//      while ( middle + step <= array.length ) {
//         mergeArrays(array, start, middle, middle+step);
//         start = middle + step;
//         middle = start + step; 
//      }
//      if ( middle < array.length ) {
//         mergeArrays( array, start, middle, array.length );
//      }
//      step *= 2;
//   }

//   return array;
// };

// var mergeArrays = function(array, start, middle, end) {

//   var left = new Array(middle - start + 1);
//   var right = new Array(end - middle + 1);
//   k = start;
//   for ( var i = 0; i < left.length - 1 ; i++ ) {
//      left[i] = array[k];
//      k++;
//   }
//   k = middle;
//   for (var i = 0; i < right.length - 1; i++) {
//      right[i] = array[k];
//      k++;
//   }
//   // Infinity used to indicate the end of the array; Why? Infinity > everything but infinity
//   left[left.length-1] = Infinity;
//   right[right.length-1] = Infinity;
//   var m = 0;
//   var n = 0;
//   for ( var k = start; k < end; k++ ) {
//      if ( left[m] <= right[n] ) {
//         array[k] = left[m++];
//      }
//      else {
//         array[k] = right[n++];
//      }
//   }
// };

var a = [4,6,2,9,1,3,5];

mergeSort(a);


