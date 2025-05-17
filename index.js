import { arr } from "./data.js";

//bubble sort
import bubbleSort from "./bubbleSort.js";
//selection sort
import selectionSort from "./selectionSort.js";
import mergeSort from "./mergeSort.js";
import intertionSort from "./insertionSort.js";

const bubbleSortRes = bubbleSort(arr);

console.log(bubbleSortRes, "bubble sort");

const selectionSortRes = selectionSort(arr);

console.log(selectionSortRes, "selection sort");

const mergeSortRes = mergeSort(arr);

console.log(mergeSortRes, "merge sort");

const intertionSortRes = intertionSort(arr);

console.log(intertionSortRes, "insertion sort");
