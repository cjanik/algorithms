// Create an LRU cache for (5) items.  The cache should be updated every time that an item 
// is accessed with a get method, or created/updated with a set method.


var lruCache = function(){

  var storage = {};  // K --> K, V --> Object in queue
  var limit = 2;
  var queue = storageQueue(); // Tracks most recently accessed items - most recent first

  this.get = function(key){

    if ( typeof key !== 'string' ) { key = key.toString(); }

    if ( !storage[key] ) {
      return;  //At this point, we would query the DB for the item.  If exists, return and update queue.
    } else {
      return updateQueue(storage[key]);
    }

  };

  this.set = function(key, value){

    if ( typeof key !== 'string' ) { key = key.toString(); }
   
    if ( !storage[key] ) {
      storage[key] = addToQueue(key, value);
    } else {
      storage[key] = updateQueue(storage[key], value);
    }

    return value;
  };

  function addToQueue(key, value) {

    var node = storageNode(key, value);

    if ( !queue.head ) {
      queue.head = queue.tail = node;
    } else {
      queue.head.previous = node;
      node.next = queue.head;
      queue.head = node;
    }

    queue.size++;
    if ( queue.size > limit ) {
      var oldTailKey = queue.tail.key;
      queue.tail = queue.tail.prev;
      delete storage[oldTailKey];
      queue--;

    }
    console.log(queue);
    return node;
  }

  function updateQueue(node, value) {

    console.log(node);

    if ( value ) { node.value = value; }
    if ( queue.head === node ) { return; }
    node.previous.next = node.next;
    node.next.previous = node.previous;
    queue.head.previous = node;
    queue.head = node;
    node.previous = null;
  
    if ( value ) {
      return node;
    } else {
      return node.value;
    }

  }

  function storageQueue(){
    
    var queue = {};
    queue.head = null;
    queue.tail = null;
    queue.size = 0;

    return queue;
  }

  function storageNode(key, value) {

    var node = {};
    node.key = key;
    node.value = value;
    node.previous = null;
    node.next = null;

    return node;
    
  }

};




