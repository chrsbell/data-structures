var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  this.total = 0;
  this.first = 0;
  this.storage = {};

};

Queue.prototype.enqueue = function(value) {
  this.storage[this.first] = value;
  this.first++;
  this.total++;
};

Queue.prototype.dequeue = function() {
  var index = this.first - this.total;
  var property = this.storage[index];
  delete property;
  if (this.total > 0) {
    this.total--;
  }
  return this.storage[index];
};

Queue.prototype.size = function() {
  return this.total;
};


