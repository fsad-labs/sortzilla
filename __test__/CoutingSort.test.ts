import { describe, expect, it } from 'vitest';
import CountingSort from '../src/sorts/CountingSort';

type MockObjectType = {
  name: string;
  value: number;
};

describe('Counting Sort', () => {
  const mockObjectToBeSorted = [
    { name: 'banana', value: 5 },
    { name: 'apple', value: 3 },
    { name: 'cherry', value: 8 },
    { name: 'date', value: 4 },
  ];

  const stringArray = ['banana', 'cherry', 'apple', 'date'];
  const arrayToBeSorted = [5, 3, 8, 4];
  const booleanArray = [true, false, true];
  const objectBooleanArray = [
    { name: 'and', status: true },
    { name: 'or', status: false },
  ];

  describe('Sort by default', () => {
    it('Should sort the array number', () => {
      const countingSort = new CountingSort();
      const sorted = countingSort.sort(arrayToBeSorted);
      const result = [...sorted];

      const expected = [3, 4, 5, 8];
      expect(result).toEqual(expected);
    });

    it('Should sort the array string', () => {
      const countingSort = new CountingSort();
      const sorted = countingSort.sort(stringArray);
      const result = [...sorted];

      const expected = ['apple', 'banana', 'cherry', 'date'];
      expect(result).toEqual(expected);
    });

    it('Should sort the object by string', () => {
      const countingSort = new CountingSort<MockObjectType>();
      const sorted = countingSort.sort(mockObjectToBeSorted, 'name');
      const result = [...sorted];

      const expected = [
        { name: 'apple', value: 3 },
        { name: 'banana', value: 5 },
        { name: 'cherry', value: 8 },
        { name: 'date', value: 4 },
      ];
      expect(result).toEqual(expected);
    });

    it('Should not sort the array boolean and must throw error', () => {
      const countingSort = new CountingSort();

      const fn = () => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-expect-error
        countingSort.sort(booleanArray);
      };

      expect(fn).toThrow(
        'CountingSort only supports arrays of numbers or strings',
      );
    });

    it('Should not sort the array boolean and must throw error using field', () => {
      const countingSort = new CountingSort<{
        name: string;
        status: boolean;
      }>();

      const fn = () => {
        countingSort.sort(objectBooleanArray, 'status');
      };

      expect(fn).toThrow('CountingSort only supports number or string fields');
    });

    it('Should sort the object by number', () => {
      const countingSort = new CountingSort<MockObjectType>();
      const sorted = countingSort.sort(mockObjectToBeSorted, 'value');
      const result = [...sorted];

      const expected = [
        { name: 'apple', value: 3 },
        { name: 'date', value: 4 },
        { name: 'banana', value: 5 },
        { name: 'cherry', value: 8 },
      ];
      expect(result).toEqual(expected);
    });
  });

  describe('Sort using constructor', () => {
    it('Should sort the array number', () => {
      const countingSort = new CountingSort({ ascending: false });
      const sorted = countingSort.sort(arrayToBeSorted);
      const result = [...sorted];

      const expected = [8, 5, 4, 3];
      expect(result).toEqual(expected);
    });

    it('Should sort the array number', () => {
      const countingSort = new CountingSort({
        ascending: true,
      });
      const sorted = countingSort.sort(arrayToBeSorted);
      const result = [...sorted];

      const expected = [3, 4, 5, 8];
      expect(result).toEqual(expected);
    });

    it('Should sort the array string', () => {
      const countingSort = new CountingSort({ ascending: false });
      const sorted = countingSort.sort(stringArray);
      const result = [...sorted];

      const expected = ['date', 'cherry', 'banana', 'apple'];
      expect(result).toEqual(expected);
    });

    it('Should sort the array string', () => {
      const countingSort = new CountingSort({
        ascending: true,
      });
      const sorted = countingSort.sort(stringArray);
      const result = [...sorted];

      const expected = ['apple', 'banana', 'cherry', 'date'];
      expect(result).toEqual(expected);
    });

    it('Should sort the object by string', () => {
      const countingSort = new CountingSort<MockObjectType>({
        ascending: true,
      });
      const sorted = countingSort.sort(mockObjectToBeSorted, 'name');
      const result = [...sorted];

      const expected = [
        { name: 'apple', value: 3 },
        { name: 'banana', value: 5 },
        { name: 'cherry', value: 8 },
        { name: 'date', value: 4 },
      ];
      expect(result).toEqual(expected);
    });

    it('Should sort the object by string', () => {
      const countingSort = new CountingSort<MockObjectType>({
        ascending: false,
      });
      const sorted = countingSort.sort(mockObjectToBeSorted, 'name');
      const result = [...sorted];

      const expected = [
        { name: 'date', value: 4 },
        { name: 'cherry', value: 8 },
        { name: 'banana', value: 5 },
        { name: 'apple', value: 3 },
      ];
      expect(result).toEqual(expected);
    });

    it('Should sort the object by number', () => {
      const countingSort = new CountingSort<MockObjectType>({
        ascending: true,
      });
      const sorted = countingSort.sort(mockObjectToBeSorted, 'value');
      const result = [...sorted];

      const expected = [
        { name: 'apple', value: 3 },
        { name: 'date', value: 4 },
        { name: 'banana', value: 5 },
        { name: 'cherry', value: 8 },
      ];
      expect(result).toEqual(expected);
    });

    it('Should sort the object by number', () => {
      const countingSort = new CountingSort<MockObjectType>({
        ascending: false,
      });
      const sorted = countingSort.sort(mockObjectToBeSorted, 'value');
      const result = [...sorted];

      const expected = [
        { name: 'cherry', value: 8 },
        { name: 'banana', value: 5 },
        { name: 'date', value: 4 },
        { name: 'apple', value: 3 },
      ];
      expect(result).toEqual(expected);
    });
  });
});
