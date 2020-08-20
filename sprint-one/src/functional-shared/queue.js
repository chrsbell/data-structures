var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var sequence = {
    total: 0,
    last: 0,
    storage: {}
  };

  _.extend(sequence, queueMethods);
  return sequence;
};

var queueMethods = {
  enqueue: function(value) {
    // set numeric values for newly added elements
    this.storage[this.last] = value;
    // increment the value of total and last
    this.last++;
    this.total++;
  },

  dequeue: function() {
    // remove the front element
    // grab the index that allows access to the last element
    // set a variable to easily visualize what you're targeting to remove
    var front = this.last - this.total;
    var property = this.storage[front];
    delete property;
    if (this.total > 0) {
      this.total--;
    }
    return property;
  },

  size: function() {
    // total should be the size with the appropriate increment and decrement of added/removed elements
    return this.total;
  }
};



