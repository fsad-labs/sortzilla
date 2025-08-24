import BubbleSort from './src/sorts/BubbleSort';
import CountingSort from './src/sorts/CountingSort';
import HeapSort from './src/sorts/HeapSort';
import InsertionSort from './src/sorts/InsertionSort';
import MergeSort from './src/sorts/MergeSort';
import QuickSort from './src/sorts/QuickSort';
import SelectionSort from './src/sorts/SelectionSort';

type SortTypes = string | number | object;

interface SortProps<T extends SortTypes> {
  array: T[];
  field?: T extends object ? keyof T : undefined;
  ascending?: boolean;
}

export function bubbleSort<T extends SortTypes>(props: SortProps<T>) {
  const { ascending, array, field } = props;
  const bubbleSort = new BubbleSort({ ascending });
  return bubbleSort.sort(array, field);
}

export function countingSort<T extends SortTypes>(props: SortProps<T>) {
  const { ascending, array, field } = props;
  const cointingSort = new CountingSort({ ascending });
  return cointingSort.sort(array, field);
}

export function heapSort<T extends SortTypes>(props: SortProps<T>) {
  const { ascending, array, field } = props;
  const heapSort = new HeapSort({ ascending });
  return heapSort.sort(array, field);
}

export function insertionSort<T extends SortTypes>(props: SortProps<T>) {
  const { ascending, array, field } = props;
  const insertionSort = new InsertionSort({ ascending });
  return insertionSort.sort(array, field);
}

export function mergeSort<T extends SortTypes>(props: SortProps<T>) {
  const { ascending, array, field } = props;
  const mergeSort = new MergeSort({ ascending });
  return mergeSort.sort(array, field);
}

export function quickSort<T extends SortTypes>(
  props: SortProps<T> & { ipivot?: number },
) {
  const { ascending, array, field, ipivot } = props;
  const quickSort = new QuickSort({ ascending, ipivot });
  return quickSort.sort(array, field);
}

export function selectionSort<T extends SortTypes>(props: SortProps<T>) {
  const { ascending, array, field } = props;
  const selectionSort = new SelectionSort({ ascending });
  return selectionSort.sort(array, field);
}
