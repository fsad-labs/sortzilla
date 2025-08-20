import { describe, it, expect } from 'vitest';
import { BubbleSort } from '../src/sorts/BubbleSort';

type MockObjectType = {
  id: number;
  name: string;
  age: number;
};

describe('BubleSort test', () => {
  const mockObjectToBeSorted = [
    { id: 2, name: 'test2', age: 17 },
    { id: 1, name: 'test1', age: 14 },
    { id: 4, name: 'test4', age: 24 },
    { id: 3, name: 'test3', age: 20 },
  ];

  const stringArray = ['banana', 'cherry', 'apple', 'date'];
  const arrayToBeSorted = [5, 3, 8, 4];

  describe('Sort by default', () => {
    it('Should sort array number by default', () => {
      const bubbleSort = new BubbleSort();
      const sorted = bubbleSort.sort(arrayToBeSorted);
      const result = [...sorted];

      const expected = [3, 4, 5, 8];

      expect(result).toEqual(expected);
    });

    it('Should sort empty array returns empty array', () => {
      const bubbleSort = new BubbleSort();
      const sorted = bubbleSort.sort([]);
      const result = [...sorted];

      expect(result).toEqual([]);
    });

    it('Should sort object array using bubbleSort by default', () => {
      const bubbleSort = new BubbleSort<MockObjectType>();

      const sorted = bubbleSort.sort(mockObjectToBeSorted, 'age');
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
      const bubbleSort = new BubbleSort<MockObjectType>();
      const sorted = bubbleSort.sort(mockObjectToBeSorted, 'name');
      const result = [...sorted];

      const expected = [
        { id: 1, name: 'test1', age: 14 },
        { id: 2, name: 'test2', age: 17 },
        { id: 3, name: 'test3', age: 20 },
        { id: 4, name: 'test4', age: 24 },
      ];

      expect(result).toEqual(expected);
    });

    it('Should sort string array by default', () => {
      const bubbleSort = new BubbleSort();
      const sorted = bubbleSort.sort(stringArray);
      const result = [...sorted];
      const expected = ['apple', 'banana', 'cherry', 'date'];
      expect(result).toEqual(expected);
    });

    it('Should sort number custom', () => {
      const bubbleSort = new BubbleSort();
      const sorted = bubbleSort.sort([5, 3, 8, 1]);

      const result = [...sorted];

      expect(result).toEqual([1, 3, 5, 8]);

      const changeOrder = sorted.byDesc();
      expect(changeOrder).toEqual([8, 5, 3, 1]);
    });
  });
});
