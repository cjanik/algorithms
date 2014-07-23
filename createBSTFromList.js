/*
// Given a sorted array of integers, create a BST with minimal height.
*/

var bstFromList = function(array) {

  if ( array.length === 0 ) { return null; }

  var midIndex = array.length / 2 | 0;
  var pivot = array[midIndex];
  var tree = new treeNode(pivot);

  if ( array.length === 1 ) {
    return tree;
  }

  var left = array.slice(0, midIndex);
  var right = array.slice(midIndex + 1);

  tree.left = bstFromList(left);
  tree.right = bstFromList(right);

  return tree;

};

var treeNode = function(value) {
  
  this.value = value;
  this.left = null;
  this.right = null;

};

treeNode.prototype.inOrderTraversal = function(nodeList, parent) {
  
  nodeList = nodeList || [];
  this.parent = this.parent || parent; // This will be undefined for the root node

  this.leftChildTraversed = false;
  this.rightChildTraversed = false;

  // If there is a left child and it hasn't been traversed
  if ( this.left && !this.leftChildTraversed ) {
    this.left.inOrderTraversal(nodeList, this);
    this.leftChildTraversed = true;
  }

  // Add the current node to the nodeList
  if ( !this.left || this.leftChildTraversed ) {
    nodeList.push(this.value);
    this.addedToList = true;
  }

  // If there is a right child and it hasn't been traversed
  if ( this.right && !this.rightChildTraversed ) {
    this.right.inOrderTraversal(nodeList, this);
    this.rightChildTraversed = true;
  }

  // Once the right child has been traversed, go back up the tree, if possible
  if ( !this.right  || this.rightChildTraversed ) {
    if ( this.parent ) {
      return;
    } else {
      return nodeList;
    }
  }
}

var testArray = [2, 4, 5, 6, 9, 10, 13, 23, 34, 45, 60];
var testTree = bstFromList(testArray);
testTree.inOrderTraversal();
