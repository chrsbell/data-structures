var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newObject = Object.create(stackMethods);
  newObject.total = 0;
  newObject.storage = {};

  return newObject;
};

var stackMethods = {
  push: function(value) {
    this.storage[this.total] = value;
    this.total++;
  },

  pop: function() {
    var property = this.storage[this.total];
    delete property;
    if (this.total > 0) {
      this.total--;
    }
    return this.storage[this.total];
  },

  size: function() {
    return this.total;
  }
};


