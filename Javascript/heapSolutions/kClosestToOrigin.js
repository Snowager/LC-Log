class Heap {
    constructor() {
      this.heap = [];
    }
  
    insert(val, point) {
      // Object {val: Number, point: Number[]}
      this.heap.push({val:val, point:point});
      if (this.heap.length > 1) {
        this.bubbleUp(this.heap.length - 1);
      }
    }
  
    bubbleUp(index) {
      if (index === 0) return;
      let parent = Math.floor((index - 1) / 2);
      if (
        index > 0 &&
        this.heap[index].val < this.heap[parent].val
      ) {
        this.swap(index, parent);
        this.bubbleUp(parent);
      }
    }
  
    bubbleDown(index) {
      let leftChildIndex = (index*2)+1;
      let rightChildIndex = (index*2)+2;
      let biggerChild;
      if (rightChildIndex < this.heap.length && this.heap[leftChildIndex].val > this.heap[rightChildIndex].val) {
          biggerChild = rightChildIndex;
      } else {
          biggerChild = leftChildIndex;
      }
      if (this.heap[biggerChild] && this.heap[index].val > this.heap[biggerChild].val) {
          this.swap(index, biggerChild);
          this.bubbleDown(biggerChild);
          }
    }
    
    extract() {
      if (this.heap.length === 0) return;
      let val;
        if (this.heap.length > 1) {
      this.swap(0, this.heap.length - 1);
      val = this.heap.pop()
      this.bubbleDown(0);
      } else {
      val = this.heap.pop();
      }
      return val; 
    }
  
    swap(val1, val2) {
      [this.heap[val1], this.heap[val2]] = [this.heap[val2], this.heap[val1]];
    }
  }
  
  /**
   * @param {number[][]} points
   * @param {number} k
   * @return {number[][]}
   * 973
   * https://leetcode.com/problems/k-closest-points-to-origin/description/ */
  var kClosest = function(points, k) {
      const heap = new Heap();
      const result = [];
      for (point of points) {
        // insert object representing distance to origin and point
        heap.insert(Math.sqrt((Math.pow(point[0],2))+(Math.pow(point[1],2))), point);
      }
      for (let x = 0; x < k; x++) {
        result.push(heap.extract().point);
      }
      // array of closest k points 
      return result;
  };