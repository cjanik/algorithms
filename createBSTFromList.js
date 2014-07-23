// Given an array of integers sorted in ascending order, create a BST with minimal height

var createBSTFromList = function(array) {

  if ( array.length === 0 ) { return null; }

  var midIndex = array.length / 2 | 0;
  var pivot = array[midIndex];
  var tree = new treeNode(pivot);

  if ( array.length === 1 ) {
    return tree;
  }

  var left = array.slice(0, midIndex);
  var right = array.slice(midIndex);

  tree.left = createBSTFromList(left);
  tree.right = createBSTFromList(right);

  return tree;

};


var treeNode = function(value) {
  
  var node = {};
  node.value = value;
  node.left = null;
  node.right = null;

  return node;
};

var testArray = [2, 4, 5, 6, 9, 10, 13, 23, 34, 45, 60];
