import { describe, expect, it } from 'vitest';
import { OrderBy } from '../../src/sorts/orderBy/orderBy';

describe('Orderby Test', () => {
  const objectArray = [
    { name: 'banana', value: 5 },
    { name: 'apple', value: 3 },
    { name: 'cherry', value: 8 },
    { name: 'date', value: 4 },
  ];

  const stringArray = ['banana', 'cherry', 'apple', 'date'];
  const numberArray = [5, 3, 8, 4];

  it('Should sort string array ascending', () => {
    const result = OrderBy(stringArray).byAsc();
    expect([...result]).toEqual(['apple', 'banana', 'cherry', 'date']);
  });

  it('Should sort number array ascending', () => {
    const result = OrderBy(numberArray).byAsc();
    expect([...result]).toEqual([3, 4, 5, 8]);
  });

  it('Should sort object array ascending', () => {
    const result = OrderBy(objectArray, 'value').byAsc();
    expect([...result]).toEqual([
      { name: 'apple', value: 3 },
      { name: 'date', value: 4 },
      { name: 'banana', value: 5 },
      { name: 'cherry', value: 8 },
    ]);
  });

  it('Should sort string array descending', () => {
    const result = OrderBy(stringArray).byDesc();
    expect([...result]).toEqual(['date', 'cherry', 'banana', 'apple']);
  });

  it('Should sort number array descending', () => {
    const result = OrderBy(numberArray).byDesc();
    expect([...result]).toEqual([8, 5, 4, 3]);
  });

  it('Should sort object array descending', () => {
    const result = OrderBy(objectArray, 'value').byDesc();
    expect([...result]).toEqual([
      { name: 'cherry', value: 8 },
      { name: 'banana', value: 5 },
      { name: 'date', value: 4 },
      { name: 'apple', value: 3 },
    ]);
  });

  it('Should sort string array descending', () => {
    const result = OrderBy(['b', 'a', 'a', 'a']).byDesc();
    expect([...result]).toEqual(['b', 'a', 'a', 'a']);
  });

  it('Should sort number array without change descending', () => {
    const result = OrderBy([3, 3, 3, 3]).byDesc();
    expect([...result]).toEqual([3, 3, 3, 3]);
  });

  it('Should sort number array descending equals', () => {
    const result = OrderBy([3, 3, 3, 3]).byAsc();
    expect([...result]).toEqual([3, 3, 3, 3]);
  });

  it('Should sort object array descending', () => {
    const result = OrderBy(
      [
        { name: 'banana', value: 5 },
        { name: 'banana', value: 5 },
        { name: 'cherry', value: 8 },
        { name: 'banana', value: 5 },
      ],
      'value',
    ).byDesc();
    expect([...result]).toEqual([
      { name: 'cherry', value: 8 },
      { name: 'banana', value: 5 },
      { name: 'banana', value: 5 },
      { name: 'banana', value: 5 },
    ]);
  });

  it('Should sort object array ascending', () => {
    const result = OrderBy(
      [
        { name: 'banana', value: 5 },
        { name: 'banana', value: 5 },
        { name: 'cherry', value: 8 },
        { name: 'banana', value: 5 },
      ],
      'value',
    ).byAsc();
    expect([...result]).toEqual([
      { name: 'banana', value: 5 },
      { name: 'banana', value: 5 },
      { name: 'banana', value: 5 },
      { name: 'cherry', value: 8 },
    ]);
  });
});
