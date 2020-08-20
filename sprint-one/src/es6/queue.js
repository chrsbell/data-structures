class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.end = 0;
    this.total = 0;
    this.storage = {};
  }

  enqueue(value) {
    this.storage[this.end] = value;
    this.end++;
    this.total++;
  }

  dequeue() {
    var property = this.storage[this.end - this.total];
    delete this.storage[property];
    if (this.total > 0) {
      this.total--;
    };
    return property
  }

  size() {
    return this.total;
  }

}
