const CQueue = function() {
  this.stackA = [];
  this.stackB = [];
};

/**
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function(value) {
  this.stackA.push(value);
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function() {
  if (!this.stackB.length) {
    while (this.stackA.length) {
      this.stackB.push(this.stackA.pop());
    }
  }
  return this.stackB.pop() || -1;
};

const obj = new CQueue();
obj.appendTail([ 3 ]);
