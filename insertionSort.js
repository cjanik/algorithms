

var spiralTraversal = function(matrix){

  var minRowIndex = 0;
  var maxRowIndex = matrix.length - 1;
  var minColIndex = 0;
  var maxColIndex = matrix[0].length - 1;

  while ( minRowIndex <= maxRowIndex && minColIndex <= maxColIndex ) {

    //Left-to-right traversal
    for ( var i = minColIndex; i <= maxColIndex; i++ ) {
      console.log(matrix[minRowIndex][i]);
    }
    minRowIndex++ ;
        
    //Downward traversal
    for ( var j = minRowIndex; j <= maxRowIndex; j++ ) {
      console.log(matrix[j][maxColIndex]);
    }
    maxColIndex--;

    //Right-to-left traversal
    if ( minColIndex <= maxColIndex ) { // Need to catch exception prior to while loop
      for (var k = maxColIndex; k >= minColIndex; k-- ) {
        console.log(matrix[maxRowIndex][k]);
      }
      maxRowIndex--;
    }

    //Upward traversal
    if ( minRowIndex <= maxRowIndex ) { // Need to catch exception prior to while loop
      for ( var l = maxRowIndex; l >= minRowIndex; l-- ) {
        console.log(matrix[l][minColIndex]);
      }
      minColIndex++;
    }
  }

};

var matrix = [[11,12,13,14,15],[21,22,23,24,25],[31,32,33,34,35],[41,42,43,44,45]];

spiralTraversal(matrix);