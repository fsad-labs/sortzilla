import { ISortAlgorithm } from '../interfaces/IAlgorithmSort';
import { IOrderSort } from '../interfaces/IOrderSort';
import { validateArray } from '../utils/validation';
import { OrderBy } from './orderBy/orderBy';
import { getFieldValue } from '../utils/getter';
import { SortProp } from '../typeProps';

export class BubbleSort<T extends string | number | object>
  implements ISortAlgorithm<T>
{
  private ascending: boolean;

  constructor({ ascending = true }: SortProp = {}) {
    this.ascending = ascending;
  }
  //implementation of the sort method

  sort(array: T[], field?: keyof T): T[] & IOrderSort<T> {
    const result = validateArray(array, field);

    if (result.length === 0) {
      return Object.assign(result, { ...OrderBy(result, field) });
    }

    let n = array.length;
    let swapped: boolean;
    do {
      swapped = false;
      for (let i = 1; i < n; i++) {
        let shouldSwap = false;

        if (field) {
          const previousValue = getFieldValue(
            result[i - 1] as T,
            field,
          ) as number;
          const currentValue = getFieldValue(result[i] as T, field) as number;

          shouldSwap = this.ascending
            ? previousValue > currentValue
            : previousValue < currentValue;
        } else {
          shouldSwap = this.ascending
            ? result[i - 1] > result[i]
            : result[i - 1] < result[i];
        }
        if (shouldSwap) {
          [result[i - 1], result[i]] = [result[i], result[i - 1]];
          swapped = true;
        }
      }
      --n;
    } while (swapped);

    const orderComplement = OrderBy(result, field);
    return Object.assign(result, { ...orderComplement });
  }
}
