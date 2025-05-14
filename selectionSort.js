const selectionSort = (arr) => {
  //find minimum/minimal
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i; j < arr.length; j++) {
      if (arr[min] > arr[j]) {
        min = j;
      }
    }
    [arr[min], arr[i]] = [arr[i], arr[min]];
  }
  return arr;
};

export default selectionSort;

/***

[3,1,2,4] -->1

[1, 3,2,4]-->2

[1,2, ,3,4]-->3


[1,2,3,4]-->4
[1,2,3,4]
 */
