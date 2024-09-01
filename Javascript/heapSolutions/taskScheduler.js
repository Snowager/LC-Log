class Heap {
    constructor() {
      this.heap = [];
    }
  
    insert(val) {
      this.heap.push(val);
      if (this.heap.length > 1) {
        this.bubbleUp(this.heap.length - 1);
      }
    }
  
    bubbleUp(index) {
      if (index === 0) return;
      let parent = Math.floor((index - 1) / 2);
      if (
        index > 0 &&
        this.heap[index] > this.heap[parent]
      ) {
        this.swap(index, parent);
        this.bubbleUp(parent);
      }
    }
  
    bubbleDown(index) {
      let leftChildIndex = (index*2)+1;
      let rightChildIndex = (index*2)+2;
      let biggerChild;
      if (rightChildIndex < this.heap.length && this.heap[leftChildIndex] < this.heap[rightChildIndex]) {
          biggerChild = rightChildIndex;
      } else {
          biggerChild = leftChildIndex;
      }
      if (this.heap[biggerChild] && this.heap[index] < this.heap[biggerChild]) {
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
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 * 621
 * https://leetcode.com/problems/task-scheduler/description/ */ 
var leastInterval = function(tasks, n) {
    const heap = new Heap(); // MaxHeap
    const queue = []; //Time tracker
    let time = 0;

    // reduce counts into Object with keys
    let count = tasks.reduce(function (value, value2) {
    return (
        value[value2] ? ++value[value2] :(value[value2] = 1),
        value
    )}, {});

    // maxHeapify our task counts
    for (let task of Object.keys(count)) {
        heap.insert(count[task]);
    }

    // while we have tasks still in our heap or being tracked with queue
    while (heap.heap.length > 0 || queue.length > 0) {
        time += 1;

        // if heap is empty, move time ahead to next scheduled one in queue
        if (heap.heap.length <= 0) {
            time = queue[0].time;

        // otherwise, remove one from count and add it 
        // to scheduler queue for next available time
        } else {
            let count = heap.extract() - 1;
            if (count !== 0) {
                queue.push({cnt:count, time:time + n})
            }
        }

        // if time matches next thing in queue, re-add it to our heap
        // to be heapified again at new count
        if (queue.length > 0 && queue[0].time === time && queue[0].cnt >= 1) {
            let newTaskCount = queue.shift().cnt;
            heap.insert(newTaskCount);
        }
    }
    return time;
};