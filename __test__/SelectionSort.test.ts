import { describe, expect, it } from 'vitest';
import SelectionSort from '../src/sorts/SelectionSort';

type MockObjectType = {
  id: number;
  name: string;
  age: number;
};

describe('SelectionSort', () => {
  const mockObjectToBeSorted = [
    { id: 2, name: 'test2', age: 17 },
    { id: 1, name: 'test1', age: 14 },
    { id: 4, name: 'test4', age: 24 },
    { id: 3, name: 'test3', age: 20 },
  ];

  const arrayToBeSorted = [5, 3, 8, 4];

  describe('Sort by default', () => {
    it('Should sort array number by default', () => {
      const selectionSort = new SelectionSort();
      const sorted = selectionSort.sort(arrayToBeSorted);
      const result = [...sorted];

      const expected = [3, 4, 5, 8];

      expect(result).toEqual(expected);
    });

    it('Should sort empty array returns empty array', () => {
      const selectionSort = new SelectionSort();
      const sorted = selectionSort.sort([]);
      const result = [...sorted];

      expect(result).toEqual([]);
    });

    it('Should sort object array using SelectionSort by default', () => {
      const selectionSort = new SelectionSort<MockObjectType>();
      const sort = selectionSort.sort(mockObjectToBeSorted, 'age');

      const result = [...sort];

      const expected = [
        { id: 1, name: 'test1', age: 14 },
        { id: 2, name: 'test2', age: 17 },
        { id: 3, name: 'test3', age: 20 },
        { id: 4, name: 'test4', age: 24 },
      ];

      expect(result).toEqual(expected);
    });
  });

  describe('Sort in descending order', () => {
    it('Should sort number array in descending order', () => {
      const selectionSort = new SelectionSort({
        ascending: false,
      });
      const sorted = selectionSort.sort(arrayToBeSorted);
      const result = [...sorted];

      const expected = [8, 5, 4, 3];

      expect(result).toEqual(expected);
    });

    it('Should sort object array by field in descending order', () => {
      const selectionSort = new SelectionSort<MockObjectType>({
        ascending: false,
      });
      const sort = selectionSort.sort(mockObjectToBeSorted, 'age');
      const result = [...sort];

      const expected = [
        { id: 4, name: 'test4', age: 24 },
        { id: 3, name: 'test3', age: 20 },
        { id: 2, name: 'test2', age: 17 },
        { id: 1, name: 'test1', age: 14 },
      ];

      expect(result).toEqual(expected);
    });
  });

  describe('Edge cases', () => {
    it('Should sort string array in ascending order by default', () => {
      const selectionSort = new SelectionSort();
      const sorted = selectionSort.sort(['banana', 'apple', 'cherry', 'date']);
      expect([...sorted]).toEqual(['apple', 'banana', 'cherry', 'date']);
    });

    it('Should sort string array in descending order', () => {
      const selectionSort = new SelectionSort({
        ascending: false,
      });
      const sorted = selectionSort.sort(['banana', 'apple', 'cherry', 'date']);
      expect([...sorted]).toEqual(['date', 'cherry', 'banana', 'apple']);
    });

    it('Should handle string array with one element', () => {
      const selectionSort = new SelectionSort();
      const sorted = selectionSort.sort(['single']);
      expect([...sorted]).toEqual(['single']);
    });

    it('Should handle empty string array', () => {
      const selectionSort = new SelectionSort();
      const sorted = selectionSort.sort([]);
      expect([...sorted]).toEqual([]);
    });

    it('Should handle string array with duplicate values', () => {
      const selectionSort = new SelectionSort();
      const sorted = selectionSort.sort(['apple', 'banana', 'apple', 'date']);
      expect([...sorted]).toEqual(['apple', 'apple', 'banana', 'date']);
    });

    it('Should handle object array with one element', () => {
      const selectionSort = new SelectionSort<MockObjectType>();
      const sorted = selectionSort.sort(
        [{ id: 1, name: 'single', age: 99 }],
        'age',
      );
      expect([...sorted]).toEqual([{ id: 1, name: 'single', age: 99 }]);
    });

    it('Should handle array with duplicate numbers', () => {
      const selectionSort = new SelectionSort();
      const sorted = selectionSort.sort([2, 3, 2, 1, 3]);
      expect([...sorted]).toEqual([1, 2, 2, 3, 3]);
    });

    it('Should handle object array with duplicate field values', () => {
      const selectionSort = new SelectionSort<MockObjectType>();
      const arr = [
        { id: 1, name: 'a', age: 20 },
        { id: 2, name: 'b', age: 20 },
        { id: 3, name: 'c', age: 18 },
      ];
      const sorted = selectionSort.sort(arr, 'age');
      expect([...sorted]).toEqual([
        { id: 3, name: 'c', age: 18 },
        { id: 2, name: 'b', age: 20 },
        { id: 1, name: 'a', age: 20 },
      ]);
    });
  });

  describe('Type safety and field validation', () => {
    it('Should not throw when sorting by a valid field', () => {
      const selectionSort = new SelectionSort<MockObjectType>();
      expect(() =>
        selectionSort.sort(mockObjectToBeSorted, 'id'),
      ).not.toThrow();
    });

    // This test assumes your implementation throws or handles invalid fields gracefully.
    it('Should return an error due nonexistent is a not field valid', () => {
      const mockfunction = () => {
        const selectionSort = new SelectionSort<MockObjectType>();
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        const sorted = selectionSort.sort(mockObjectToBeSorted, 'nonexistent');
        expect([...sorted]).toEqual(mockObjectToBeSorted);
      };

      expect(mockfunction).toThrowError(
        'Field "nonexistent" does not exist in all objects of the array.',
      );
    });
  });
});
