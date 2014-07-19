
var robotPaths = function(n){

  var count = 0;
  var start = [1,1];
  var end = [n,n];

  var move = function(currentPosition, visited){

    if ( currentPosition[0] === end[0] && currentPosition[1] === end[1] ) {
      count++;
      return;
    }
    
    var newPosition;
    visited = visited || {};
    visited[currentPosition] = true;

    // move up
    newPosition = [currentPosition[0], currentPosition[1] - 1];
    if ( newPosition[1] > 0 && !visited[newPosition] ) {
      move(newPosition, visited);
    }

    // move down
    newPosition = [currentPosition[0], currentPosition[1] + 1];
    if ( newPosition[1] <= n  && !visited[newPosition] ) {
      move(newPosition, visited);
    }

    // move left
    newPosition = [currentPosition[0] - 1, currentPosition[1]];
    if ( newPosition[0] > 0 && !visited[newPosition] ) {
      move(newPosition, visited);
    }

    // move right
    newPosition = [currentPosition[0] + 1, currentPosition[1]];
    if ( newPosition[0] <= n && !visited[newPosition] ) {
      move(newPosition, visited);
    }
    
    visited[currentPosition] = false;
    return;

  };

  move(start);

  return count;

};