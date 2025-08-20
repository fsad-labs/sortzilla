import { describe, expect, it } from 'vitest';
import { HeapSort } from '../src/sorts/HeapSort';

type MockObjectType = {
  name: string;
  value: number;
};

describe('HeapSort test', () => {
  const mockObjectToBeSorted = [
    { name: 'banana', value: 5 },
    { name: 'apple', value: 3 },
    { name: 'cherry', value: 8 },
    { name: 'date', value: 4 },
  ];

  const stringArray = ['banana', 'cherry', 'apple', 'date'];
  const arrayToBeSorted = [5, 3, 8, 4];

  describe('Sort by default', () => {
    it('Should sort array number by default', () => {
      // TODO
      const heapSort = new HeapSort();
      const sorted = heapSort.sort(arrayToBeSorted);
      const result = [...sorted];

      const expected = [3, 4, 5, 8];
      expect(result).toEqual(expected);
    });

    it('Should sort array string by default', () => {
      const heapSort = new HeapSort();
      const sorted = heapSort.sort(stringArray);
      const result = [...sorted];
      const expected = ['apple', 'banana', 'cherry', 'date'];
      expect(result).toEqual(expected);
    });

    it('Should sort array object by default', () => {
      const heapSort = new HeapSort<MockObjectType>();
      const sorted = heapSort.sort(mockObjectToBeSorted, 'name');
      const result = [...sorted];

      const expected = [
        { name: 'apple', value: 3 },
        { name: 'banana', value: 5 },
        { name: 'cherry', value: 8 },
        { name: 'date', value: 4 },
      ];

      expect(result).toEqual(expected);
    });
  });

  describe('Sort using constructor', () => {
    it('Should order descending using contrsuctor ', () => {
      const heapSort = new HeapSort<MockObjectType>({
        ascending: false,
      });
      const sorted = heapSort.sort(mockObjectToBeSorted, 'name');
      const result = [...sorted];

      const expected = [
        { name: 'date', value: 4 },
        { name: 'cherry', value: 8 },
        { name: 'banana', value: 5 },
        { name: 'apple', value: 3 },
      ];

      expect(result).toEqual(expected);
    });

    it('Should sort array string by default', () => {
      const heapSort = new HeapSort({
        ascending: false,
      });
      const sorted = heapSort.sort(stringArray);
      const result = [...sorted];
      const expected = ['date', 'cherry', 'banana', 'apple'];
      expect(result).toEqual(expected);
    });
  });
});
