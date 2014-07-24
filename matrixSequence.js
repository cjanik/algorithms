// Given a NxN matrix which contains all distinct 1 to n^2 numbers, write code to print sequence 
// of increasing adjacent sequential numbers.

var matrixSequence = function(matrix) {

  var n = matrix.length;
  var results = [];

  var findSequence = function(position, visited, sequence) {

    console.log(position, visited, sequence);

    var row, column;
    var newPosition;
    var value = matrix[position[0]][position[1]];
    visited = visited || {};
    visited[position] = true;
    sequence = sequence || [];
    sequence.push(value);

    // move up
    row = position[1] - 1;
    column = position[0];
    newPosition = [row, column];  

    if ( row >= 0 && !visited[newPosition] ) {
      if ( value + 1 === matrix[row][column] ) {
        visited[position] = true;
        findSequence(newPosition, visited, sequence);
      }
    }

    // move down  
    row = position[1] + 1;
    column = position[0]; 
    newPosition = [row, column];
    if ( row < n  && !visited[newPosition] ) {
      if ( value + 1 === matrix[row][column] ) {
        visited[position] = true;
        findSequence(newPosition, visited, sequence);
      }
    }

    // move left  
    row = position[1];
    column = position[0] - 1;
    newPosition = [row, column]; 
    if ( column >= 0  && !visited[newPosition] ) {
      if ( value + 1 === matrix[row][column] ) {
        visited[position] = true;
        findSequence(newPosition, visited, sequence);
      }
    }

    // move right  
    row = position[1];
    column = position[0] + 1; 
    newPosition = [row, column];
    if ( column < n && !visited[newPosition] ) {
      if ( value + 1 === matrix[row][column] ) {
        visited[position] = true;
        findSequence(newPosition, visited, sequence);
      }
    }

    results.push(sequence);
  };

  for ( var i = 0; i < n; i++ ) {
    for ( var j = 0; j < n; j++ ) {
      findSequence([i,j]);
    }
  }

  return results;
};

// 1 5 9 
// 2 3 8 
// 4 6 7 

// should print 
// 6 7 8 9