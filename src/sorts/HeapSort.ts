import { ISortAlgorithm } from '../interfaces/IAlgorithmSort';
import { IOrderSort } from '../interfaces/IOrderSort';
import { SortProp } from '../typeProps';
import { getCurrentValue } from '../utils/getter';
import { validateArray } from '../utils/validation';
import { OrderBy } from './orderBy/orderBy';

export class HeapSort<T extends string | number | object>
  implements ISortAlgorithm<T>
{
  private ascending: boolean;

  constructor({ ascending = true }: SortProp = {}) {
    this.ascending = ascending;
  }
  //implementation of the sort method
  sort(array: T[], field?: keyof T): T[] & IOrderSort<T> {
    const result = validateArray(array, field);

    const n = result.length;

    // Build heap
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
      this.heapify(result, n, i, field);
    }

    // One by one extract elements from heap
    for (let i = n - 1; i > 0; i--) {
      // Move current root to end
      [result[0], result[i]] = [result[i], result[0]];

      // Call heapify on the reduced heap
      this.heapify(result, i, 0, field);
    }

    const orderComplement = OrderBy(result, field);
    return Object.assign(result, { ...orderComplement });
  }

  private heapify(arr: T[], n: number, i: number, field?: keyof T): void {
    let largest = i; // Initialize largest as root
    const left = 2 * i + 1; // left = 2*i + 1
    const right = 2 * i + 2; // right = 2*i + 2

    // If left child is larger than root

    if (left < n && this.isValidHapify(arr[left], arr[largest], field)) {
      largest = left;
    }

    // If right child is larger than largest so far
    if (right < n && this.isValidHapify(arr[right], arr[largest], field)) {
      largest = right;
    }

    // If largest is not root
    if (largest !== i) {
      [arr[i], arr[largest]] = [arr[largest], arr[i]]; // swap

      // Recursively heapify the affected sub-tree
      this.heapify(arr, n, largest, field);
    }
  }

  private isValidHapify<T>(a: T, b: T, field?: keyof T): boolean {
    const value = getCurrentValue(a, field);
    const root = getCurrentValue(b, field);

    return this.ascending ? value > root : value < root;
  }
}
