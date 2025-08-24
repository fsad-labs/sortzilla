import { describe, expect, it } from 'vitest';
import InsertionSort from '../src/sorts/InsertionSort';

type MockObjectType = {
  id: number;
  name: string;
  age: number;
};

describe('InsertionSort test', () => {
  const mockObjectToBeSorted = [
    { id: 2, name: 'test2', age: 17 },
    { id: 1, name: 'test1', age: 14 },
    { id: 4, name: 'test4', age: 24 },
    { id: 3, name: 'test3', age: 20 },
  ];

  const arrayToBeSorted = [5, 3, 8, 4];

  describe('Sort by default', () => {
    it('Should sort array number by default', () => {
      const insertionSort = new InsertionSort();
      const sorted = insertionSort.sort(arrayToBeSorted);
      const result = [...sorted];

      const expected = [3, 4, 5, 8];

      expect(result).toEqual(expected);
    });

    it('Should sort array number 2 by default', () => {
      const insertionSort = new InsertionSort();
      const sorted = insertionSort.sort([6, 8, 36, 31, 6, 9, 43, 14, 11, 37]);
      const result = [...sorted];

      const expected = [6, 6, 8, 9, 11, 14, 31, 36, 37, 43];

      expect(result).toEqual(expected);
    });

    it('Should sort array of strings in ascending order', () => {
      const insertionSort = new InsertionSort();
      const stringArray = ['banana', 'apple', 'cherry', 'date'];
      const sorted = insertionSort.sort(stringArray);
      const result = [...sorted];
      const expected = ['apple', 'banana', 'cherry', 'date'];
      expect(result).toEqual(expected);
    });

    it('Should sort array of strings in descending order', () => {
      const insertionSort = new InsertionSort({
        ascending: false,
      });
      const stringArray = ['banana', 'apple', 'cherry', 'date'];
      const sorted = insertionSort.sort(stringArray);
      const result = [...sorted];
      const expected = ['date', 'cherry', 'banana', 'apple'];
      expect(result).toEqual(expected);
    });

    it('Should sort empty array returns empty array', () => {
      const insertionSort = new InsertionSort();
      const sorted = insertionSort.sort([]);
      const result = [...sorted];

      expect(result).toEqual([]);
    });

    it('Should sort object array using bubbleSort by default', () => {
      const insertionSort = new InsertionSort<MockObjectType>();

      const sorted = insertionSort.sort(mockObjectToBeSorted, 'age');
      const result = [...sorted];

      const expected = [
        { id: 1, name: 'test1', age: 14 },
        { id: 2, name: 'test2', age: 17 },
        { id: 3, name: 'test3', age: 20 },
        { id: 4, name: 'test4', age: 24 },
      ];

      expect(result).toEqual(expected);
    });

    it('Should sort object array by string field (name)', () => {
      const insertionSort = new InsertionSort<MockObjectType>();
      const sorted = insertionSort.sort(mockObjectToBeSorted, 'name');
      const result = [...sorted];

      const expected = [
        { id: 1, name: 'test1', age: 14 },
        { id: 2, name: 'test2', age: 17 },
        { id: 3, name: 'test3', age: 20 },
        { id: 4, name: 'test4', age: 24 },
      ];

      expect(result).toEqual(expected);
    });
  });
});
