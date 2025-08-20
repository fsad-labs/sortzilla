import { ISortAlgorithm } from '../interfaces/IAlgorithmSort';
import { IOrderSort } from '../interfaces/IOrderSort';
import { SortProp } from '../typeProps';
import { getFieldValue } from '../utils/getter';
import { validateArray } from '../utils/validation';
import { OrderBy } from './orderBy/orderBy';

export class MergeSort<T extends string | number | object>
  implements ISortAlgorithm<T>
{
  private ascending: boolean;

  constructor({ ascending = true }: SortProp = {}) {
    this.ascending = ascending;
  }

  //implementation of the sort method
  sort(array: T[], field?: keyof T): T[] & IOrderSort<T> {
    const arrayValidated = validateArray(array, field);

    if (arrayValidated.length === 0) {
      return Object.assign(arrayValidated, {
        ...OrderBy(arrayValidated, field),
      });
    }

    const result = this.divide(arrayValidated, field);

    const orderComplement = OrderBy(result, field);
    return Object.assign(result, { ...orderComplement });
  }

  private divide(array: T[], field?: keyof T): T[] {
    if (array.length <= 1) {
      return array;
    }

    const mid = Math.floor(array.length / 2);
    const left = array.slice(0, mid);
    const right = array.slice(mid);

    const result = this.merge(
      this.divide(left, field),
      this.divide(right, field),
      field,
    );
    return result;
  }

  private merge(left: T[], right: T[], field?: keyof T): T[] {
    const result: T[] = [];

    let i = 0;
    let j = 0;

    while (i < left.length && j < right.length) {
      let swapValue;

      if (field) {
        const leftValue = getFieldValue(left[i] as T, field) as number;
        const rightValue = getFieldValue(right[j] as T, field) as number;
        swapValue = this.ascending
          ? leftValue < rightValue
          : leftValue > rightValue;
      } else {
        swapValue = this.ascending ? left[i] < right[j] : left[i] > right[j];
      }

      if (swapValue) {
        result.push(left[i]);
        i++;
      } else {
        result.push(right[j]);
        j++;
      }
    }

    return result.concat(left.slice(i)).concat(right.slice(j));
  }
}
