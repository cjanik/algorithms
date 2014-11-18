
function insertionSort(array) {

  if ( array.length < 2 ) { return array; }

  for (var i = 0; i < array.length; i++) {
    var current = array[i];
    for (var j = i - 1; j >= 0 && array[j] > current; j--) {
      array[j+1] = array[j];
    }
    array[j+1] = current;
  }

  return array;

}

var testArray = [324,23,230,56,234,456,2,3,111,24]

console.log(insertionSort(testArray));