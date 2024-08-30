/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
    this.data = []
    for (let num of nums) {
        this.insert(num)
    }
    while (this.data.length > k) {
        this.extractMin();
    }
    this.k = k;
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    if (this.data.length < this.k) {
        this.insert(val);
    } else {
        this.insert(val);
        this.extractMin();
    }
    return this.data[0];
};

KthLargest.prototype.insert = function(val) {
  this.data.push(val);
  this.bubbleUp(this.data.length-1);
};

KthLargest.prototype.bubbleUp = function(index) {
  while (index > 0) {
    // get the parent
    var parent = Math.floor((index + 1) / 2) - 1;
    
    // if parent is greater than child
    if (this.data[parent] > this.data[index]) {
      // swap
      this.swap(parent, index);
    }
    
    index = parent;
  }
};

KthLargest.prototype.swap = function(parent, index) {
    [this.data[parent], this.data[index]] = [this.data[index], this.data[parent]];
}

KthLargest.prototype.extractMin = function() {
  if (this.data.length < 2) return this.data.pop();

  var min = this.data[0];
  
  // set first element to last element
  this.data[0] = this.data.pop();
  
  // call bubble down
  this.bubbleDown(0);
  
  return min;
};

KthLargest.prototype.bubbleDown = function(index) {
  while (true) {
    var child = (index+1)*2;
    var sibling = child - 1;
    var toSwap = null;
    
    // if current is greater than child
    if (this.data[index] > this.data[child]) {
      toSwap = child;
    }
    
    // if sibling is smaller than child, but also smaller than current
    if (this.data[index] > this.data[sibling] && (this.data[child] == null || (this.data[child] !== null && this.data[sibling] < this.data[child]))) {
        toSwap = sibling;
    }
    
    // if we don't need to swap, then break.
    if (toSwap == null) {
      break;
    }
    
    this.swap(toSwap, index);
    
    index = toSwap;
  }
};