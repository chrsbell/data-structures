var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {};
  return set; // { {'storage': {'Danny Glover': }}  }
};
// use object to create unique keys

var setPrototype = {};

// constant time complexity
setPrototype.add = function(item) {
  // parameter item will always be a string
  // what will we set the key for easy lookup
  // Access the storage: this._storage
  // add the item to storage object...key name = input
  this._storage[item] = item;
};

// constant time complexity
setPrototype.contains = function(item) {
  // get access to storage
  // if item is in access, return true
  return item in this._storage;
};

setPrototype.remove = function(item) {
  delete this._storage[item];
};

/*
 * Complexity: What is the time complexity of the above functions?
 add: constant
 contains: constant
 */

// only unique values, no duplicates
