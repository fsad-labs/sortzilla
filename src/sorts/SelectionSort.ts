import { ISortAlgorithm } from '../interfaces/IAlgorithmSort';
import { IOrderSort } from '../interfaces/IOrderSort';
import { SortProp } from '../typeProps';
import { getFieldValue } from '../utils/getter';
import { validateArray } from '../utils/validation';
import { OrderBy } from './orderBy/orderBy';

export class SelectionSort<T extends string | number | object>
  implements ISortAlgorithm<T>
{
  private ascending: boolean;

  constructor({ ascending = true }: SortProp = {}) {
    this.ascending = ascending;
  }

  sort(array: T[], field?: keyof T): T[] & IOrderSort<T> {
    const result = validateArray(array, field);

    if (result.length === 0) {
      return Object.assign(result, { ...OrderBy(result, field) });
    }
    const n = result.length;

    for (let i = 0; i < n - 1; i++) {
      let minIndex = i;
      for (let j = i + 1; j < n; j++) {
        let swapValue = false;

        if (field) {
          const currenJValue = getFieldValue(result[j] as T, field) as number;
          const minValue = getFieldValue(
            result[minIndex] as T,
            field,
          ) as number;

          swapValue = this.ascending
            ? currenJValue < minValue
            : currenJValue > minValue;
        } else {
          swapValue = this.ascending
            ? result[j] < result[minIndex]
            : result[j] > result[minIndex];
        }

        if (swapValue) {
          minIndex = j;
        }
      }
      if (minIndex !== i) {
        [result[i], result[minIndex]] = [result[minIndex], result[i]];
      }
    }

    const orderComplement = OrderBy(result, field);
    return Object.assign(result, { ...orderComplement });
  }
}
