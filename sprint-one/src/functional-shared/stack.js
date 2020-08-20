var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = {
    index: 0,
    storage: {}
  };

  _.extend(instance, stackMethods);
  return instance;
};

var stackMethods = {
  push: function(value) {
    this.storage[this.index] = value;
    this.index++;
  },

  pop: function() {
    var top = this.storage[this.index];
    delete top;
    if (this.index > 0) {
      this.index--;
    }
    return this.storage[this.index];
  },

  size: function() {
    return this.index;
  }
};


