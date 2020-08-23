// i: integer
// o: integer: tree.children[0].value
// c: none for this Tree
// e: if value is undefined
var Tree = function(value) {
  var newTree = {}; // {'5': 5, 'children': null;}
  newTree.value = value;

  // your code here
  newTree.children = []; // null is not correct, if the test requires children[0] (index), it should be a data structure that accepts this call method
  // both addChild and contains are properties of treeMethods
  // add these properties so var Tree can call on addChild and contains (Tree.addChild && Tree.contains)
  _.extend(newTree, treeMethods);

  return newTree;
};

/////////////////////////////////////////////////////

var treeMethods = {};

// constant time complexity
treeMethods.addChild = function(value) { // 5
  // create a variable to store the tree node
  // tree should take in value as a parameter
  var test = Tree(value);
  // pass a variable into children array
  this.children.push(test); // this should be the whole node
};

// i : tree.contains(5)).to.equal(true);
// o : return boolean true or false
// c : none
// e : if target is undefined

// linear time complexity
treeMethods.contains = function(target) {
  // check if value === target
  if (this.value === target) {
    return true;
  } else if (this.children.length > 0) {
    for (var i = 0; i < this.children.length; i++) {
      if (this.children[i].contains(target)) {
        return true;
      }
    }
  }
  // return false
  return false;
};



/*
 * Complexity: What is the time complexity of the above functions?
 addChild: constant
 contains: linear
 */
