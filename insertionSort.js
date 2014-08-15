
var insertionSort = function(list) {

  var value, i, j;

  for ( i = 0; i < list.length; i++ ) {
    value = list[i];

    for ( j = i - 1; j > -1 && list[j] > value; j-- ){
      list[j+1] = list[j];
    }

    list[j + 1] = value;
  }

  return list;

};

var a = [16,7,234,2,5,7];

console.log(insertionSort(a));


