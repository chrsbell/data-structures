var Stack = function() {
  var someInstance = {};
  var amount = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    storage[amount] = value;
    amount++;
  };

  someInstance.pop = function() {
    var property = storage[amount];
    delete property;
    if (amount > 0) {
      amount--;
    }
    return storage[amount];
  };

  someInstance.size = function() {
    return amount;
  };

  return someInstance;
};
