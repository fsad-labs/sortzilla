import { describe, expect, it } from 'vitest';
import MergeSort from '../src/sorts/MergeSort';

type MockObjectType = {
  id: number;
  name: string;
  age: number;
};

describe('MergeSort', () => {
  const mockObjectToBeSorted = [
    { id: 2, name: 'test2', age: 17 },
    { id: 1, name: 'test1', age: 14 },
    { id: 4, name: 'test4', age: 24 },
    { id: 3, name: 'test3', age: 20 },
  ];

  const arrayToBeSorted = [5, 3, 8, 4];

  describe('Should Sort by default', () => {
    it('Should sort array number by default', () => {
      const mergeSort = new MergeSort();
      const sorted = mergeSort.sort(arrayToBeSorted);
      const result = [...sorted];
      const expected = [3, 4, 5, 8];
      expect(result).toEqual(expected);
    });

    it('Should sort empty array returns empty array', () => {
      const mergeSort = new MergeSort();
      const sorted = mergeSort.sort([]);
      const result = [...sorted];
      expect(result).toEqual([]);
    });

    it('Should sort object array using mergeSort by default', () => {
      const mergeSort = new MergeSort<MockObjectType>();

      const sorted = mergeSort.sort(mockObjectToBeSorted, 'age');
      const expected = [
        { id: 1, name: 'test1', age: 14 },
        { id: 2, name: 'test2', age: 17 },
        { id: 3, name: 'test3', age: 20 },
        { id: 4, name: 'test4', age: 24 },
      ];

      const result = [...sorted];
      expect(result).toEqual(expected);
    });

    it('Should sort string array by default', () => {
      const mergeSort = new MergeSort();
      const sorted = mergeSort.sort(['a', 'e', 'c', 'd', 'b']);
      const result = [...sorted];

      const expected = ['a', 'b', 'c', 'd', 'e'];
      expect(result).toEqual(expected);
    });

    it('Should sort object array using name fieldby default', () => {
      const mergeSort = new MergeSort<MockObjectType>();
      const sorted = mergeSort.sort(mockObjectToBeSorted, 'name');
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

  describe('Should Sort in descending order', () => {
    it('Should sort array number in descending order', () => {
      const mergeSort = new MergeSort({
        ascending: false,
      });
      const sorted = mergeSort.sort(arrayToBeSorted);
      const result = [...sorted];
      const expected = [8, 5, 4, 3];
      expect(result).toEqual(expected);
    });

    it('Should sort object array in descending order by field', () => {
      const mergeSort = new MergeSort<MockObjectType>({
        ascending: false,
      });
      const sorted = mergeSort.sort(mockObjectToBeSorted, 'age');
      const expected = [
        { id: 4, name: 'test4', age: 24 },
        { id: 3, name: 'test3', age: 20 },
        { id: 2, name: 'test2', age: 17 },
        { id: 1, name: 'test1', age: 14 },
      ];
      const result = [...sorted];
      expect(result).toEqual(expected);
    });
  });

  describe('Edge cases', () => {
    it('Should handle array with one element', () => {
      const mergeSort = new MergeSort();
      const sorted = mergeSort.sort([42]);
      expect([...sorted]).toEqual([42]);
    });

    it('Should handle object array with one element', () => {
      const mergeSort = new MergeSort<MockObjectType>();
      const single = [{ id: 1, name: 'test', age: 10 }];
      const sorted = mergeSort.sort(single, 'age');
      expect([...sorted]).toEqual(single);
    });

    it('Should handle array with duplicate numbers', () => {
      const mergeSort = new MergeSort();
      const arr = [2, 3, 2, 1, 3];
      const sorted = mergeSort.sort(arr);
      expect([...sorted]).toEqual([1, 2, 2, 3, 3]);
    });

    it('Should handle object array with duplicate field values', () => {
      const mergeSort = new MergeSort<MockObjectType>();
      const arr = [
        { id: 1, name: 'a', age: 20 },
        { id: 2, name: 'b', age: 20 },
        { id: 3, name: 'c', age: 18 },
      ];
      const sorted = mergeSort.sort(arr, 'age');
      expect([...sorted]).toEqual([
        { id: 3, name: 'c', age: 18 },
        { id: 2, name: 'b', age: 20 },
        { id: 1, name: 'a', age: 20 },
      ]);
    });

    it('should handle sorting custom', () => {
      type User = { id: number; name: string };

      const mergeSort = new MergeSort<User>();
      const sorted = mergeSort.sort(
        [
          { id: 3, name: 'Alice' },
          { id: 1, name: 'Bob' },
          { id: 2, name: 'Charlie' },
        ],
        'id',
      );

      const result = [...sorted];

      expect(result).toEqual([
        { id: 1, name: 'Bob' },
        { id: 2, name: 'Charlie' },
        { id: 3, name: 'Alice' },
      ]);
    });
  });

  describe('Type safety and errors', () => {
    it('Should throw if field does not exist', () => {
      const mergeSort = new MergeSort<MockObjectType>();
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      expect(() => mergeSort.sort(mockObjectToBeSorted, 'notAField')).toThrow();
    });
  });
});
