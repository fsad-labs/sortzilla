import { describe, expect, it } from 'vitest';
import QuickSort from '../src/sorts/QuickSort';

type MockObjectType = {
  id: number;
  name: string;
  age: number;
};

describe('QuickSort test', () => {
  const mockObjectToBeSorted = [
    { id: 2, name: 'test2', age: 17 },
    { id: 1, name: 'test1', age: 14 },
    { id: 4, name: 'test4', age: 24 },
    { id: 3, name: 'test3', age: 20 },
  ];

  const arrayToBeSorted = [5, 3, 8, 4];

  describe('Sort by default', () => {
    it('Should sort array number by default', () => {
      const quickSort = new QuickSort();
      const sorted = quickSort.sort(arrayToBeSorted);
      const result = [...sorted];

      const expected = [3, 4, 5, 8];

      expect(result).toEqual(expected);
    });

    it('Should sort array number 2 by default', () => {
      const quickSort = new QuickSort();
      const sorted = quickSort.sort([6, 8, 36, 31, 6, 9, 43, 14, 11, 37]);
      const result = [...sorted];

      const expected = [6, 6, 8, 9, 11, 14, 31, 36, 37, 43];

      expect(result).toEqual(expected);
    });

    it('Should sort array of strings in ascending order', () => {
      const quickSort = new QuickSort();
      const stringArray = ['banana', 'apple', 'cherry', 'date'];
      const sorted = quickSort.sort(stringArray);
      const result = [...sorted];
      const expected = ['apple', 'banana', 'cherry', 'date'];
      expect(result).toEqual(expected);
    });

    it('Should sort array of strings in descending order', () => {
      const quickSort = new QuickSort({ ascending: false });
      const stringArray = ['banana', 'apple', 'cherry', 'date'];
      const sorted = quickSort.sort(stringArray);
      const result = [...sorted];
      const expected = ['date', 'cherry', 'banana', 'apple'];
      expect(result).toEqual(expected);
    });

    it('Should sort empty array returns empty array', () => {
      const quickSort = new QuickSort();
      const sorted = quickSort.sort([]);
      const result = [...sorted];

      expect(result).toEqual([]);
    });
  });

  describe('Sort with custom pivot', () => {
    it('Should sort array with custom pivot index', () => {
      const quickSort = new QuickSort({ ipivot: 1 }); // pivot at index 1
      const sorted = quickSort.sort(arrayToBeSorted);
      const result = [...sorted];
      const expected = [3, 4, 5, 8];
      expect(result).toEqual(expected);
    });

    it('Should throw error if pivot index is out of bounds', () => {
      const quickSort = new QuickSort({ ipivot: 10 });
      expect(() => quickSort.sort(arrayToBeSorted)).toThrow(
        'Pivot must be inside of the array',
      );
    });
  });

  describe('Sort descending', () => {
    it('Should sort array of numbers in descending order', () => {
      const quickSort = new QuickSort({ ascending: false });
      const sorted = quickSort.sort(arrayToBeSorted);
      const result = [...sorted];
      const expected = [8, 5, 4, 3];
      expect(result).toEqual(expected);
    });
  });

  describe('Sort objects by field', () => {
    it('Should sort array of objects by "id" ascending', () => {
      const quickSort = new QuickSort<MockObjectType>();
      const sorted = quickSort.sort(mockObjectToBeSorted, 'id');
      const result = [...sorted];
      const expected = [
        { id: 1, name: 'test1', age: 14 },
        { id: 2, name: 'test2', age: 17 },
        { id: 3, name: 'test3', age: 20 },
        { id: 4, name: 'test4', age: 24 },
      ];
      expect(result).toEqual(expected);
    });

    it('Should sort array of objects by "age" descending', () => {
      const quickSort = new QuickSort<MockObjectType>({ ascending: false });
      const sorted = quickSort.sort(mockObjectToBeSorted, 'age');
      const result = [...sorted];
      const expected = [
        { id: 4, name: 'test4', age: 24 },
        { id: 3, name: 'test3', age: 20 },
        { id: 2, name: 'test2', age: 17 },
        { id: 1, name: 'test1', age: 14 },
      ];
      expect(result).toEqual(expected);
    });

    it('Should return empty array when sorting empty object array', () => {
      const quickSort = new QuickSort<MockObjectType>();
      const sorted = quickSort.sort([], 'id');
      const result = [...sorted];
      expect(result).toEqual([]);
    });
  });

  describe('Edge cases', () => {
    it('Should return the same array if array has one element', () => {
      const quickSort = new QuickSort();
      const sorted = quickSort.sort([42]);
      const result = [...sorted];
      expect(result).toEqual([42]);
    });

    it('Should return the same array if object array has one element', () => {
      const quickSort = new QuickSort<MockObjectType>();
      const single = [{ id: 1, name: 'test', age: 10 }];
      const sorted = quickSort.sort(single, 'id');
      const result = [...sorted];
      expect(result).toEqual([...single]);
    });
  });
});
