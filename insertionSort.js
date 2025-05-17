const intertionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let k = i;

    while (k > 0 && arr[k - 1] > arr[k]) {
      [arr[k], arr[k - 1]] = [arr[k - 1], arr[k]];
      k--;
    }
  }

  return arr;
};

export default intertionSort;
