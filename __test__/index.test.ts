import { describe, it, expect } from 'vitest';
import {
  bubbleSort,
  countingSort,
  heapSort,
  insertionSort,
  mergeSort,
  quickSort,
  selectionSort,
} from '../index';

describe('Sort using index import ', () => {
  const objectArray = [
    { name: 'banana', value: 5 },
    { name: 'apple', value: 3 },
    { name: 'cherry', value: 8 },
    { name: 'date', value: 4 },
  ];

  const stringArray = ['banana', 'cherry', 'apple', 'date'];
  const numberArray = [5, 3, 8, 4];

  describe('bubbleSort', () => {
    it('Should sort string array', () => {
      const result = bubbleSort({ array: stringArray, ascending: true });

      expect([...result]).toEqual(['apple', 'banana', 'cherry', 'date']);
    });

    it('Should sort number array', () => {
      const result = bubbleSort({ array: numberArray });

      expect([...result]).toEqual([3, 4, 5, 8]);
    });

    it('Should sort object array', () => {
      const result = bubbleSort({ array: objectArray, field: 'value' });

      expect([...result]).toEqual([
        { name: 'apple', value: 3 },
        { name: 'date', value: 4 },
        { name: 'banana', value: 5 },
        { name: 'cherry', value: 8 },
      ]);
    });
  });

  describe('countingSort', () => {
    it('Should sort string array', () => {
      const result = countingSort({ array: stringArray });

      expect([...result]).toEqual(['apple', 'banana', 'cherry', 'date']);
    });

    it('Should sort number array', () => {
      const result = countingSort({ array: numberArray });

      expect([...result]).toEqual([3, 4, 5, 8]);
    });

    it('Should sort object array', () => {
      const result = countingSort({ array: objectArray, field: 'value' });

      expect([...result]).toEqual([
        { name: 'apple', value: 3 },
        { name: 'date', value: 4 },
        { name: 'banana', value: 5 },
        { name: 'cherry', value: 8 },
      ]);
    });
  });

  describe('heapSort', () => {
    it('Should sort string array', () => {
      const result = heapSort({ array: stringArray });

      expect([...result]).toEqual(['apple', 'banana', 'cherry', 'date']);
    });

    it('Should sort number array', () => {
      const result = heapSort({ array: numberArray });

      expect([...result]).toEqual([3, 4, 5, 8]);
    });

    it('Should sort object array', () => {
      const result = heapSort({ array: objectArray, field: 'value' });

      expect([...result]).toEqual([
        { name: 'apple', value: 3 },
        { name: 'date', value: 4 },
        { name: 'banana', value: 5 },
        { name: 'cherry', value: 8 },
      ]);
    });
  });

  describe('insertionSort', () => {
    it('Should sort string array', () => {
      const result = insertionSort({ array: stringArray });

      expect([...result]).toEqual(['apple', 'banana', 'cherry', 'date']);
    });

    it('Should sort number array', () => {
      const result = insertionSort({ array: numberArray });

      expect([...result]).toEqual([3, 4, 5, 8]);
    });

    it('Should sort object array', () => {
      const result = insertionSort({ array: objectArray, field: 'value' });

      expect([...result]).toEqual([
        { name: 'apple', value: 3 },
        { name: 'date', value: 4 },
        { name: 'banana', value: 5 },
        { name: 'cherry', value: 8 },
      ]);
    });
  });

  describe('mergeSort', () => {
    it('Should sort string array', () => {
      const result = mergeSort({ array: stringArray, ascending: true });

      expect([...result]).toEqual(['apple', 'banana', 'cherry', 'date']);
    });

    it('Should sort number array', () => {
      const result = mergeSort({ array: numberArray });

      expect([...result]).toEqual([3, 4, 5, 8]);
    });

    it('Should sort object array', () => {
      const result = mergeSort({ array: objectArray, field: 'value' });

      expect([...result]).toEqual([
        { name: 'apple', value: 3 },
        { name: 'date', value: 4 },
        { name: 'banana', value: 5 },
        { name: 'cherry', value: 8 },
      ]);
    });

    it('Should sort object array', () => {
      const result = mergeSort({
        array: [
          { id: 3, name: 'Alice' },
          { id: 1, name: 'Bob' },
          { id: 2, name: 'Charlie' },
        ],
        field: 'id',
        ascending: true,
      });

      expect([...result]).toEqual([
        { id: 1, name: 'Bob' },
        { id: 2, name: 'Charlie' },
        { id: 3, name: 'Alice' },
      ]);
    });
  });

  describe('quickSort', () => {
    it('Should sort string array', () => {
      const result = quickSort({ array: stringArray });

      expect([...result]).toEqual(['apple', 'banana', 'cherry', 'date']);
    });

    it('Should sort number array', () => {
      const result = quickSort({ array: numberArray });

      expect([...result]).toEqual([3, 4, 5, 8]);
    });

    it('Should sort object array', () => {
      const result = quickSort({ array: objectArray, field: 'value' });

      expect([...result]).toEqual([
        { name: 'apple', value: 3 },
        { name: 'date', value: 4 },
        { name: 'banana', value: 5 },
        { name: 'cherry', value: 8 },
      ]);
    });
  });

  describe('quickSort', () => {
    it('Should sort string array', () => {
      const result = selectionSort({ array: stringArray });

      expect([...result]).toEqual(['apple', 'banana', 'cherry', 'date']);
    });

    it('Should sort number array', () => {
      const result = selectionSort({ array: numberArray });

      expect([...result]).toEqual([3, 4, 5, 8]);
    });

    it('Should sort object array', () => {
      const result = selectionSort({ array: objectArray, field: 'value' });

      expect([...result]).toEqual([
        { name: 'apple', value: 3 },
        { name: 'date', value: 4 },
        { name: 'banana', value: 5 },
        { name: 'cherry', value: 8 },
      ]);
    });
  });
});
