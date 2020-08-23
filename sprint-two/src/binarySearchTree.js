var BinarySearchTree = function(value) {
  // create an object to hold all Binary methods
  var binaryTree = Object.create(binaryTreePrototypes);
  // create three properties of a tree: value(node), left edge, right edge
  binaryTree.value = value;
  binaryTree.left = null;
  binaryTree.right = null;
  return binaryTree;
};

var binaryTreePrototypes = {};

// Based on the specRunner, we notice that they invoked three prototypes: insert, contains, and depthFirstLog

binaryTreePrototypes.insert = function(value) {
  // check if the input is less than the binary tree's value
  if (value < this.value) {
    // if true; check if the left edge is null
    if (this.left === null) {
      // add the input into the binary tree left edge
      this.left = BinarySearchTree(value);
    } else {
      // if left is not null, then recursively call insert again on the left edge
      this.left.insert(value);
    }
  } else if (value > this.value) {
    // if false; check if the right edge is null
    if (this.right === null) {
      // if right edge is not null, then recursively call right edge with value as input
      this.right = BinarySearchTree(value);
    } else {
      this.right.insert(value);
    }

    // if value is already present, break;
  }
};

binaryTreePrototypes.contains = function(value) {
  // if binary tree value is equal to the input
  if (value === this.value) {
    // then return true;
    return true;
  } else if (value < this.value) {
    // if the input is less than binary tree's value
    // recursively call this.left of contain with value as the input
    var present = this.left && this.left.contains(value);
    return !!present;
    // same goes for the right side
  } else if (value > this.value) {
    var present = this.right && this.right.contains(value);
    return !!present;
  }


};


binaryTreePrototypes.depthFirstLog = function(callback) {
  // call callback on the current value
  callback(this.value);
  // call callback on the left side if it exists
  if (this.left !== null) {
    this.left.depthFirstLog(callback);
  }
  // call callback on the right side if it exists
  if (this.right !== null) {
    this.right.depthFirstLog(callback);
  }
};
/*
 * Complexity: What is the time complexity of the above functions?
 insert: constant
 contains: constant
 depthFirstLog: constant
 */
