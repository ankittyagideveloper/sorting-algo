function bubbleSort(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    let isSorted = false;
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        isSorted = true;
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
    if (!isSorted) break;
  }
  return arr;
}

export default bubbleSort;

/**
 
[4,3,1,2]
--->[3,4,1,2]
--->[3,1,4,2]
--->[3,1,2,   4]

--->[1,3,2,   4]
--->[1,2,3,   4]
--->[1,2,   3,4]

--->[1    2,3,4]
--->[1,2,3,4]


 */
