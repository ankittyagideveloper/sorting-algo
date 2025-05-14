const merge = (arr, low, mid, high) => {
  let temp = [];
  let left = low;
  let right = mid + 1;

  while (left <= mid && right <= high) {
    if (arr[left] <= arr[right]) {
      temp.push(arr[left]);
      left++;
    } else {
      temp.push(arr[right]);
      right++;
    }
  }

  while (left <= mid) {
    temp.push(arr[left]);
    left++;
  }
  while (right <= high) {
    temp.push(arr[right]);
    right++;
  }

  for (let i = low; i < high; i++) {
    arr[i] = temp[i - low];
  }
};

const mergeSortHelper = (arr, low, high) => {
  //base condition

  if (low >= high) return;

  let mid = Math.floor((low + high) / 2);

  mergeSortHelper(arr, low, mid);
  mergeSortHelper(arr, mid + 1, high);

  merge(arr, low, mid, high);
};

const mergeSort = (arr) => {
  let n = arr.length;
  mergeSortHelper(arr, 0, n - 1);
  return arr;
};

export default mergeSort;
