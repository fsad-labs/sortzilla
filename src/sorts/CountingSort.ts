import { ISortAlgorithm } from '../interfaces/IAlgorithmSort';
import { IOrderSort } from '../interfaces/IOrderSort';
import { SortProp } from '../typeProps';
import { getFieldValue } from '../utils/getter';
import { validateArray } from '../utils/validation';
import { OrderBy } from './orderBy/orderBy';

export default class CountingSort<T extends string | number | object>
  implements ISortAlgorithm<T>
{
  private ascending: boolean;

  constructor({ ascending = true }: SortProp = {}) {
    this.ascending = ascending;
  }

  sort(
    array: T[],
    field?: T extends object ? keyof T : undefined,
  ): T[] & IOrderSort<T> {
    const result = validateArray(array, field);

    // Extract values (string → charCode, number → number)
    let filtered: number[] = [];
    if (field) {
      filtered = result.map((el) => {
        const val = getFieldValue(el as T, field);
        if (typeof val === 'number') {
          return val;
        } else if (typeof val === 'string') {
          return val.charCodeAt(0); // only first char for now
        }
        throw new Error('CountingSort only supports number or string fields');
      });
    } else {
      filtered = (result as (string | number)[]).map((val) => {
        if (typeof val === 'number') {
          return val;
        } else if (typeof val === 'string') {
          return val.charCodeAt(0);
        }
        throw new Error(
          'CountingSort only supports arrays of numbers or strings',
        );
      });
    }

    // Handle min/max for negative values
    const min = Math.min(...filtered);
    const max = Math.max(...filtered);
    const range = max - min + 1;

    const count: number[] = Array(range).fill(0);

    for (const num of filtered) {
      count[num - min]++;
    }

    if (this.ascending) {
      for (let i = 1; i < count.length; i++) {
        count[i] += count[i - 1];
      }
    } else {
      for (let i = count.length - 2; i >= 0; i--) {
        count[i] += count[i + 1];
      }
    }

    const output = new Array(result.length);

    const place = (i: number) => {
      const v = filtered[i];
      const idx = count[v - min] - 1;
      output[idx] = result[i];
      count[v - min]--;
    };

    if (this.ascending) {
      for (let i = result.length - 1; i >= 0; i--) {
        place(i);
      }
    } else {
      for (let i = 0; i < result.length; i++) {
        place(i);
      }
    }

    const orderComplement = OrderBy(output, field);
    return Object.assign(output, { ...orderComplement });
  }
}
