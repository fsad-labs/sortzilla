import { ISortAlgorithm } from '../interfaces/IAlgorithmSort';
import { IOrderSort } from '../interfaces/IOrderSort';
import { SortProp } from '../typeProps';
import { getFieldValue } from '../utils/getter';
import { validateArray } from '../utils/validation';
import { OrderBy } from './orderBy/orderBy';

export default class QuickSort<T extends string | number | object>
  implements ISortAlgorithm<T>
{
  private ascending: boolean;
  private ipivotStart?: number;
  private firstLoop: boolean = true;

  constructor({
    ascending = true,
    ipivot = -1,
  }: SortProp & { ipivot?: number } = {}) {
    this.ascending = ascending;
    this.ipivotStart = ipivot;
  }
  sort(
    array: T[],
    field?: T extends object ? keyof T : undefined,
  ): T[] & IOrderSort<T> {
    if (array.length <= 1) {
      return Object.assign(array, { ...OrderBy(array, field) });
    }

    if (this.ipivotStart && this.ipivotStart >= array.length) {
      throw new Error('Pivot must be inside of the array');
    }

    const result = validateArray(array, field);

    if (result.length === 0) {
      return Object.assign(result, {
        ...OrderBy(result, field),
      });
    }

    const low: number = 0;
    const high: number = array.length - 1;

    this.quick(result, low, high, field);

    const orderComplement = OrderBy(result, field);
    return Object.assign(result, { ...orderComplement });
  }

  private quick(array: T[], low: number, high: number, field?: keyof T) {
    if (low < high) {
      let pivot;

      if (this.ipivotStart && this.firstLoop && this.ipivotStart >= 0) {
        pivot = this.ipivotStart;

        this.firstLoop = false;
      } else {
        pivot = this.partition(array, low, high, field);
      }

      this.quick(array, low, pivot - 1, field);
      this.quick(array, pivot + 1, high, field);
    }
  }

  private partition(array: T[], low: number, high: number, field?: keyof T) {
    let pivot;

    if (field) {
      pivot = getFieldValue(array[high] as T, field) as number;
    } else {
      pivot = array[high] as number;
    }

    let i = low - 1;

    for (let j = low; j <= high - 1; j++) {
      let currentValue;

      if (field) {
        currentValue = getFieldValue(array[j] as T, field) as number;
      } else {
        currentValue = array[j] as number;
      }

      if (this.ascending ? currentValue < pivot : currentValue > pivot) {
        i++;
        [array[i], array[j]] = [array[j], array[i]];
      }
    }

    [array[i + 1], array[high]] = [array[high], array[i + 1]];
    return i + 1;
  }
}
