var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  // Object.create creates a new object with using the EXISTING OBJECT as the prototype of the newly created object
  // create a newObject that takes another object (???) and add key variables in the new object
  // what should i be returning....the whole object
  var newObject = Object.create(queueMethods);
  newObject.total = 0;
  newObject.last = 0;
  newObject.storage = {};

  return newObject;
};


var queueMethods = {
  // "this" method should still be used in order to invoke the functions in the newObject
  // "this" is now referring to "newObject"
  enqueue: function(value) {
    this.storage[this.last] = value;
    this.last++;
    this.total++;
  },

  dequeue: function(value) {
    var removing = this.last - this.total;
    var property = this.storage[removing];
    delete property;
    if (this.total > 0) {
      this.total--;
    }
    return this.storage[removing]; // could replace with property to avoid dry/repeating coding style
  },

  size: function() {
    return this.total;
  }

};


