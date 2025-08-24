import { IOrderSort } from './IOrderSort';

export interface ISortAlgorithm<T extends string | number | object> {
  sort(array: T[]): T[] & IOrderSort<T>;
  sort(
    array: T[],
    field: T extends object ? keyof T : undefined,
  ): T[] & IOrderSort<T>;
}
