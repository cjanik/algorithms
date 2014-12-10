
function pascal(n) {

  var result = [[1]];

  if (n === 1) { return result; }

  for (var i = 1; i < n; i++) {
    var row = [];
    for (var j = 0; j <= i; j++) {
      var val1 = result[i - 1][j - 1] || 0;
      var val2 = result[i - 1][j] || 0;
      row[j] = val1 + val2;
    }
    result.push(row);
  }

  return result;
}

var pascalsTriangle = pascal(5);

pascalsTriangle.forEach(function(row) {
  console.log(row);
});

// Pascal's Triangle

// 0:           1
// 1:         1   1
// 2:       1   2   1
// 3:     1   3   3   1
// 4:   1   4   6   4   1
// 5: 1   5  10   10   5   1

// Sample Result:
// > 1
// > 1 1
// > 1 2 1
// > 1 3 3 1
// > 1 4 6 4 1
// > 1 5 10 10 5 1
