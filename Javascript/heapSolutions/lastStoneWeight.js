class Heap {
    constructor() {
      this.list = [];
    }
    //Heapify
    maxHeapify(arr, n, i) {
      let largest = i;
      let l = 2 * i + 1; //left child index
      let r = 2 * i + 2; //right child index
  
  
      //If left child is smaller than root
      if (l < n && arr[l] > arr[largest]) {
        largest = l;
      }
  
  
      // If right child is smaller than smallest so far
      if (r < n && arr[r] > arr[largest]) {
        largest = r;
      }
  
  
      // If smallest is not root
      if (largest !== i) {
        let temp = arr[i];
        arr[i] = arr[largest];
        arr[largest] = temp;
  
  
        // Recursively heapify the affected sub-tree
        this.maxHeapify(arr, n, largest);
      }
    }
  
  
    //Insert Value
    insert(num) {
      const size = this.list.length;
      if(size === 0){
        this.list.push(num);
      }else{
        this.list.push(num);
        for (let i = parseInt(this.list.length / 2 - 1, 10); i >= 0; i--) {
          this.maxHeapify(this.list, this.list.length, i);
        }
      }
    }
  
  
    //Remove Value
    remove(num) {
      const size = this.list.length;
      if (size !== 0) {
        //Get the index of the number to be removed
        let i;
        for(i = 0; i < size; i++){
          if(num === this.list[i]){
            break;
          }
        }
        //Swap the number with last element
        [this.list[i], this.list[size - 1]] = [this.list[size - 1], this.list[i]];
        //Remove the last element
        this.list.splice(size - 1);
        //Heapify the list again
        for (let i = parseInt(this.list.length / 2 - 1, 10); i >= 0; i--) {
          this.maxHeapify(this.list, this.list.length, i);
        }
      }
    }
    //Return Max Value
    getMax() {
      return this.list[0] || undefined;
    }
    //Remove Max Value
    deleteMax() {
      this.remove(this.list[0]);
    }
    //Extract Max Value
    extractMax() {
      let max = this.getMax();
      this.deleteMax();
      return max;
    }
  }
  
  
/**
 * @param {number[]} stones
 * @return {number}
 * 1046
 * https://leetcode.com/problems/last-stone-weight/description/
 */
var lastStoneWeight = function(stones) {
    const stoneHeap = new Heap();


    for (let stone of stones) {
        stoneHeap.insert(stone);
    }

    while (stoneHeap.list.length > 1) {
        let stone1 = stoneHeap.extractMax();
        let stone2 = stoneHeap.extractMax();
        if (stone1 - stone2 > 0) stoneHeap.insert(stone1 - stone2);
    }
    return stoneHeap.list.length === 1 ? stoneHeap.list[0] : 0;
};