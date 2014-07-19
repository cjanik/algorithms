
var circusTower = function(performers) {

  // Sort performers tallest to shortest using insertion sort
  if (performers.length < 2 ) { return performers; }

  var i, j, current;

  for ( i = 0; i < performers.length; i++ ) {
    current = performers[i];
    for ( j = i - 1; j > -1 && performers[j].height < current.height; j--) {
      performers[j+1] = performers[j];
    }
    performers[j+1] = current;
  } 

  //Find the longest chain of performers where each weighs less than the previous
  var towerBottom = towerTop =  0;
  var currentBottom = currentTop =  0;

  for ( var k = 0; k < performers.length - 1; k++ ) {
    if ( performers[k + 1].weight <= performers[k].weight ) {
      currentTop = k + 1;
      if ( (currentTop - currentBottom) > (towerTop - towerBottom) ) {
        towerTop = currentTop;
        towerBottom = currentBottom;
      }
    } else {
      currentBottom = currentTop = k + 1;
    }
  }
  
  return performers.slice(towerBottom,towerTop + 1);
}

var performers = [
    {height: 65, weight: 100}, 
    {height: 70, weight: 150}, 
    {height: 56, weight: 90}, 
    {height: 75, weight: 190},
    {height: 60, weight: 95},
    {height: 68, weight: 110}
  ];

console.log(circusTower(performers));
