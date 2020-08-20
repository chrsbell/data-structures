var Queue = function() {
  var someInstance = {};
  var total = 0;
  var end = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[end] = value;
    // increment end and total
    // end has to come first incase objects get removed, but the index will remain the same
    end++;
    total++;
  };

  someInstance.dequeue = function() {
    // total - end will produce undefined since removed objects will make total < end
    // therefore end has to come first in order to grab 'b' instead of 'a;
    var front = end - total;
    var property = storage[front];
    delete property;
    if (total > 0) {
      total--;
    }
    return property;

  };

  someInstance.size = function() {
    return total;
  };

  return someInstance;
};
