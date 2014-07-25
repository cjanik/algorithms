/*
* Given an n^2 matrix which contains all distinct numbers, write a method to find the 
* longest sequence of increasing sequential numbers.  Example:
*
* var myMatrix = [[1,4,5,6],[11,55,8,7],[3,12,9,88],[2,65,10,19]];
*
*  1     4     5     6
*
*  11    55    8     7
*
*  3     12    9     8
*
*  2     65    10    19
*
* Should return [4,5,6,7,8,9,10]
*/ 


var matrixSequence = function(matrix) {

  var n = matrix.length;
  var result = [matrix[0][0]];

  var findSequence = function(position, visited, sequence) {

    visited = visited || {};
    visited[position] = true;

    sequence = sequence || [];
    var value = matrix[position[0]][position[1]];
    sequence.push(value);
    
    var nextPosition = [];
    // move up
    nextPosition[0] = position[0] - 1;
    nextPosition[1] = position[1];
    if ( nextPosition[0] >= 0 && !visited[nextPosition] ) {
      if ( value + 1 === matrix[nextPosition[0]][nextPosition[1]] ) {
        visited[position] = true;
        findSequence(nextPosition, visited, sequence, value);
      }
    }

    // move down  
    nextPosition[0] = position[0] + 1;
    nextPosition[1] = position[1]; 
    if ( nextPosition[0] < n  && !visited[nextPosition] ) {
      if ( value + 1 === matrix[nextPosition[0]][nextPosition[1]] ) {
        visited[position] = true;
        findSequence(nextPosition, visited, sequence, value);
      }
    }

    // move left  
    nextPosition[0] = position[0];
    nextPosition[1] = position[1] - 1;
    if ( nextPosition[1] >= 0  && !visited[nextPosition] ) {
      if ( value + 1 === matrix[nextPosition[0]][nextPosition[1]] ) {
        visited[position] = true;
        findSequence(nextPosition, visited, sequence, value);
      }
    }

    // move right  
    nextPosition[0] = position[0];
    nextPosition[1] = position[1] + 1; 
    if ( nextPosition[1] < n && !visited[nextPosition] ) {
      if ( value + 1 === matrix[nextPosition[0]][nextPosition[1]] ) {
        visited[position] = true;
        findSequence(nextPosition, visited, sequence, value);
      }
    }

    if ( sequence.length > result.length ) {
      result = sequence;
    }

  };

  for ( var i = 0; i < n; i++ ) {
    for ( var j = 0; j < n; j++ ) { 
      findSequence([i,j]);
    }
  }

  return result;
};
