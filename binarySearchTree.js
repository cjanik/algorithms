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

  if ( value < this.value )
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
};

binarySearchTree.prototype.depthFirstLog = function(nodeList) {
 
  nodeList = nodeList || [];

  nodeList.push(this.value);

  if ( this.left ) {
    this.left.depthFirstLog(nodeList);
  }

  if ( this.right ) {
    this.right.depthFirstLog(nodeList);
  }

  return nodeList;
};

binarySearchTree.prototype.breadthFirstLog = function() {

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
          11    30  
         /     /  \
        9     25   41
       /  \          \
      7    8          44     
*/


