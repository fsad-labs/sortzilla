import { IOrderSort } from '../../interfaces/IOrderSort';

export function OrderBy<T>(array: T[], field?: keyof T): IOrderSort<T> {
  return {
    byDesc: () => {
      if (field) {
        return [
          ...array.sort((a, b) => {
            if ((a as T)[field] < (b as T)[field]) return 1;
            if ((a as T)[field] > (b as T)[field]) return -1;
            return 0;
          }),
        ];
      } else {
        return [
          ...array.sort((a, b) => {
            if (a < b) return 1;
            if (a > b) return -1;
            return 0;
          }),
        ];
      }
    },
    byAsc: () => {
      if (field) {
        return [
          ...array.sort((a, b) => {
            if ((a as T)[field] > (b as T)[field]) return 1;
            if ((a as T)[field] < (b as T)[field]) return -1;
            return 0;
          }),
        ];
      } else {
        return [
          ...array.sort((a, b) => {
            if (a > b) return 1;
            if (a < b) return -1;
            return 0;
          }),
        ];
      }
    },
  };
}
