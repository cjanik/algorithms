var quickSort = function ( list ) {

  if ( list.length === 0 ) return [];
  
  var pivot = list[0];
  var lesser = [];
  var greater = [];

  for ( var i = 1; i < list.length; i++ ) {
    if ( list[i] < pivot ) {
      lesser.push(list[i]);
    } else {
      greater.push(list[i]);
    }
  }

  return quickSort(lesser).concat(pivot, quickSort(greater));
};