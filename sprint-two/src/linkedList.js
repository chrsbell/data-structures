var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  // Inputs are integers
  // Outputs are integers
  // Constraints: if head is null, add the value to the tail
  // Edge cases: If value is undefined or list is empty
  list.addToTail = function(value) { //integer input
    // Create node with value parameter
    var node = Node(value);
    // If the head is null, then add the node to the list, which means set head equal to tail equal to node
    if (list.head === null) {
      list.head = node;
      list.tail = node;
    } else {
      list.tail = node;
      list.tail.next = null;
      list.head.next = list.tail;
    }
      // Else if the head is not null, set list.tail.next equal to null and list.tail equal to node
   // {node.value ?? = value ??,  node.next = null}

  };
  // i: 5
  // o: 5
  // c
  // e
  list.removeHead = function() {
    // var former head, set equal to head.value
    var formerHead = list.head.value;
    // set list of next head to current head
    // don't touch tail
    var nextNode = list.head.next;
    // grab current node (head) and set to next node (nextNode)
    list.head = nextNode;
    return formerHead;

  };
  // input: integer (4)
  // output: boolean, a check test
  // constraints:
  // edge case: if val is not in list.head (node), if target is undefined
  list.contains = function(target) {
    // set a variable to hold the current node (list.head)
    var currentHead = list.head;
    // while currentNode (whole head) does not equal null;
    while (currentHead !== null) {
      // if current node.value === target
      if (currentHead.value === target) {
        // then return true;
        return true;
        // else: update currentNode = currentNode.next
      } else {
        currentHead = currentHead.next;
      }

    }
    // if it does not equal target, then return false;
    return false;
  };

  return list;
};

// each node is an object (array)
var Node = function(value) {
  var node = {};

  node.value = value; //node.10 = 10
  node.next = null; //node.next = null;

  return node; // {node.value ?? = value ??,  node.next = null}
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

// How to delete node??
// Answer: To delete a node, you have to redirect the next pointer of the previous node to point to the next node instead of the current one. Since we don't have a pointer to the previous node, we can't redirect its next pointer.
// overwrites instead of delete
