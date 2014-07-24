var binarySearchTree = function(value){

  this.value = value;
  this.left = null;
  this.right = null;

};

binarySearchTree.prototype.insert = function(value) {

  if ( value < this.value ) {
    if ( !this.left ) {
      this.left = new binarySearchTree(value);
    } else {
      this.left.insert(value);
    }
  }

  if ( value > this.value ) {
    if ( !this.right ) {
      this.right = new binarySearchTree(value);
    } else {
      this.right.insert(value);
    }
  }

};

binarySearchTree.prototype.contains = function(value) {

  if ( this.value === value ) { return true; }

  if ( value < this.value ) {
    if ( this.left ) {
      return this.left.contains(value);
    } else {
      return false;
    }
  }

  if ( value > this.value ) {
    if ( this.right ) {
      return this.right.contains(value);
    } else {
      return false;
    }
  }

  return false;
};

// Removes the node and rebalances the tree below the point at which is node is removed
binarySearchTree.prototype.remove = function(value, parent, root) {
  
  if ( this.value === value ) {
    var children = this.inOrderTraversal();
    var removalIndex = binarySearch(children, this.value);
    children.splice(removalIndex, 1);
    if ( parent ) {
      if ( parent.left === this ) {
        parent.left = children.length > 0 ? bstFromList(children) : null;
        return value;
      } else {
        parent.right = children.length > 0 ? bstFromList(children) : null;
        return value;
      }
    } else {
      if ( !root ) {
        throw 'To delete root node, call remove with "null" and "true" as second and third parameters.  New tree will be returned.'
      } else {
        return bstFromList(children);
      }
    }
  }

  if ( value < this.value ) {
    if ( this.left ) {
      return this.left.remove(value, this);
    } else {
      return null;
    }
  }

  if ( value > this.value ) {
    if ( this.right ) {
      return this.right.remove(value, this);
    } else {
      return null;
    }
  }

  function bstFromList (array) {

    if ( array.length === 0 ) { return null; }

    var midIndex = array.length / 2 | 0;
    var pivot = array[midIndex];
    var tree = new binarySearchTree(pivot);

    if ( array.length === 1 ) {
      return tree;
    }

    var left = array.slice(0, midIndex);
    var right = array.slice(midIndex + 1);

    tree.left = bstFromList(left);
    tree.right = bstFromList(right);

    return tree;

  };

  function binarySearch (array, target){

    var lower = 0;
    var upper = array.length - 1;

    while ( lower <= upper ) {
      var mid = Math.floor((upper + lower) / 2);
      if ( target < array[mid] ){
        upper = mid - 1;
      } else if ( target > array[mid] ) {
        lower = mid + 1;
      } else {
        return mid;
      }
    }

    return  -1;
  };

};  

binarySearchTree.prototype.depthFirstTraversal = function(nodeList) {
 
  nodeList = nodeList || [];

  nodeList.push(this.value);

  if ( this.left ) {
    this.left.depthFirstTraversal(nodeList);
  }

  if ( this.right ) {
    this.right.depthFirstTraversal(nodeList);
  }

  return nodeList;
};

binarySearchTree.prototype.breadthFirstTraversal = function() {

  var nodeList = [];
  var queue = [this];

  var currentNode;

  
  while ( queue.length > 0 ) {
    currentNode = queue.shift();
    nodeList.push(currentNode.value);
    if ( currentNode.left ) { queue.push(currentNode.left); }
    if ( currentNode.right ) { queue.push(currentNode.right); }
  }

  return nodeList;

};

binarySearchTree.prototype.inOrderTraversal = function(nodeList, parent) {
  
  nodeList = nodeList || [];
  this.parent = this.parent || parent;

  this.leftChildTraversed = false;
  this.rightChildTraversed = false;

  if ( this.left && !this.leftChildTraversed ) {
    this.left.inOrderTraversal(nodeList, this);
    this.leftChildTraversed = true;
  }

  if ( !this.left || this.leftChildTraversed ) {
    nodeList.push(this.value);
    this.addedToList = true;
  }

  if ( this.right && !this.rightChildTraversed ) {
    this.right.inOrderTraversal(nodeList, this);
    this.rightChildTraversed = true;
  }

  if ( !this.right  || this.rightChildTraversed ) {
    if ( this.parent ) {
      return;
    } else {
      return nodeList;
    }
  }
}

var testTree = new binarySearchTree(22);
testTree.insert(11);
testTree.insert(30);
testTree.insert(9);
testTree.insert(14);
testTree.insert(15);
testTree.insert(7);
testTree.insert(8);
testTree.insert(25);
testTree.insert(41);
testTree.insert(44);

/*
             22
            /  \
           /    \
          /      \
         11      30  
        / \     /  \
       9  14   25  41
      /     \        \
     7      15       44     
      \
       8     
*/


