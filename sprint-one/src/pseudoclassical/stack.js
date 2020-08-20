var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  // since Stack is already capitalized, i am assuming that I should be calling prototype on it and adding various methods to it
  this.total = 0;
  this.storage = {};

};


Stack.prototype.push = function(value) {
  this.storage[this.total] = value;
  this.total++;
};

Stack.prototype.pop = function() {
  var property = this.storage[this.total];
  delete property;
  if (this.total > 0) {
    this.total--;
  }
  return this.storage[this.total];
};

Stack.prototype.size = function() {
  return this.total;
};

var firstAdd = new Stack();
console.log(firstAdd); // {total: 0, storage: {}}
firstAdd.push('zero');
console.log(firstAdd); // {total: 1, storage: {0: 'zero'}}

firstAdd.push('one');
console.log(firstAdd); // {total: 2, storage: {0: 'zero', 1: 'one'}}

console.log(firstAdd.pop()); // 'one'
console.log(firstAdd); // {total: 1, storage: {0: 'zero'}}
