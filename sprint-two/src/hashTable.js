

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

// inputs: 2 strings (key: first name, prop: last name)
// output: check for the property (last name)
// constraints: can't surpass the limit
// edge cases: if one of the inputs is undefined
HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // storing the inputs in the storage
  var bucket = this._storage.get(index); //array or undefined
  // if the bucket is undefined/no array
  if (bucket === undefined) {
    // manually assign bucket to an array
    bucket = [];
    // grab method .set using this._storage at index
    // which will create an empty array at the index
  }

  for (var i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    if (tuple[0] === k) {
      var overwrite = tuple[1];
      tuple[1] = v;
      return overwrite;
    }
  }
  // set the indexes to each input param
  bucket.push([k, v]);
  // this._storage.set(index, array) -> creates the tuple
  this._storage.set(index, bucket);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // get the bucket at the index
  var bucket = this._storage.get(index);
  // iterate through the bucket and access the wanted array using the key
  for (var i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    // once you get into the bucket, you can return the value from it
    if (tuple[0] === k) {
      return tuple[1];
    }
  }
  // if the vaue or key is not present, return undefined
  return undefined;
};

// input: key
// output: value/property
// constraint: size
// edge cases: if value is undefined
HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // get the bucket at the index
  var bucket = this._storage.get(index);
  // iterate through bucket
  for (var i = 0; i < bucket.length; i++) {
    // assign a variable tuple to each tuple within bucket
    var tuple = bucket[i];
    // check if tuple at index 0 is equal to k
    if (tuple[0] === k) {
      // delete tuple
      bucket.splice(i, 1);
    }
  }
  // if key or value is not found, return undefined
  return undefined;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


