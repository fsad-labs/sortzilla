import { ISortAlgorithm } from '../interfaces/IAlgorithmSort';
import { IOrderSort } from '../interfaces/IOrderSort';
import { SortProp } from '../typeProps';
import { getCurrentValue } from '../utils/getter';
import { validateArray } from '../utils/validation';
import { OrderBy } from './orderBy/orderBy';

export class InsertionSort<T extends string | number | object>
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

    for (let i = 1; i < result.length; i++) {
      const key = getCurrentValue(result[i], field);
      const keyObject = result[i];

      let j = i - 1;

      // Move elements of result[0..i-1], that are greater than key,
      // to one position ahead of their current position
      while (
        j >= 0 &&
        (this.ascending
          ? getCurrentValue(result[j], field) > key
          : getCurrentValue(result[j], field) < key)
      ) {
        result[j + 1] = result[j];
        j--;
      }
      result[j + 1] = field ? keyObject : key;
    }

    const orderComplement = OrderBy(result, field);
    return Object.assign(result, { ...orderComplement });
  }
}
