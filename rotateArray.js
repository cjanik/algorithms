// Create a method that rotates an array n places. This should be done in place.
// ex. [1,2,3,4,5], 2 --- returns --> [4,5,1,2,3];
// ex. [1,2,3,4,5,6,7], 4 --- returns --> [4,5,6,7,1,2,3];


var rotateArray = function(array, n) {
  var len = array.length;
  array = reverseArr(array, 0, len - 1);
  array = reverseArr(array, 0, n - 1);
  array = reverseArr(array, n, len - 1);
  return array;
};

var reverseArr = function(array, start, end) {
  while (start < end) {
    array[start] = [array[end], array[end] = array[start]][0];
    start++;
    end--;
  }
  return array;
};

var a = [1,2,3,4,5];
var b = [1,2,3,4,5,6,7];
console.log(rotateArray(a, 2));
console.log(rotateArray(b, 4));
