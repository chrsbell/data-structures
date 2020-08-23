

// Instantiate a new graph
var Graph = function() {
  // create a variable to hold all the nodes
  // what kind of data structure (array & object)
  this.nodes = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(value) { //value
  // create an object container to hold node's value and edge
  var addingNode = {};
  // add node's value to container
  addingNode.value = value;
  // add node's edge to container
  addingNode.edges = {}; //addingNode.edges.push(toNode)

  // add object container to nodes object
  this.nodes[value] = addingNode;
  // {   {1: {'value': 1, 'edges': {}}  }    }
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  // grab the object's key (value)
  return this.nodes[node].value === node;
};

// Removes a node from the graph.
// input: integer
Graph.prototype.removeNode = function(node) { //value
  // if the obtained value is equal to node
  if (this.nodes[node].value === node) {
    // delete the node (inner node)
    delete this.nodes[node].value;
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
// i: two intgers
// o: a boolean return value
// c: none
// e:
Graph.prototype.hasEdge = function(fromNode, toNode) {
  // check if this.node[fromNode].value is equal to fromNode
  if (this.nodes[fromNode].value === fromNode) {
    // if true, check if this.node[toNode].value is equal toNode;
    if (this.nodes[toNode].value === toNode) {
      // check if this.nodes[fromNode].edges contains toNode
      if (toNode in this.nodes[fromNode].edges) {
        // if true, check if this.nodes[toNode].edges contains fromNode
        if (fromNode in this.nodes[toNode].edges) {
          return true;
        }
      }
    }
  }
  return false;
};

// i: values;  o: boolean;  e: if value doesn't exists, if node array is empty
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {

  // if the node's value === fromNode
  if (this.nodes[fromNode].value === fromNode) {
    if (this.nodes[toNode].value === toNode) {
      this.nodes[fromNode].edges[toNode] = toNode;
      this.nodes[toNode].edges[fromNode] = fromNode;
    }
  }
};

// Remove an edge between any two specified (by value) nodes.
// i: takes two integers
// o: none
// c: none
// e:
Graph.prototype.removeEdge = function(fromNode, toNode) {
  // if node's value is equal to fromNode
  if (this.nodes[fromNode].value === fromNode) {
    // if this.nodes value is equal to toNode
    if (this.nodes[toNode].value === toNode) {
      // access the edges array and delete toNode's value from the key [fromNode]
      delete this.nodes[fromNode].edges[toNode];
      // access edges array and delete fromNode's value from key [toNode]
      delete this.nodes[toNode].edges[fromNode];
    }
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  // if we need access to each node??
  // iterate through the list of nodes
  _.each(this.nodes, function(item) {
    cb(item.value);
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 * addNode: constant
 * contains: constant
 * removeNode: constant
 * addEdge: constant
 * removeEdge: constant
 * forEach: linear
 */


