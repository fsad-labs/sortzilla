import { describe, expect, it } from 'vitest';
import { validateArray } from '../../src/utils/validation';

describe('ValidateArray test', () => {
  it('Should return the same array', () => {
    const data = [2, 6, 1, 8];
    const result = validateArray(data);
    expect(result).toEqual(data);
  });

  it('Should return empty array', () => {
    const data = [];
    const result = validateArray(data);
    expect(result).toEqual(data);
  });

  it('Should return empty object array ', () => {
    const data = [];
    const result = validateArray(data, '');
    expect(result).toEqual(data);
  });

  it('Should throw validation error when field is not a string', () => {
    const data = [{ name: 'an', age: 2 }];

    const fn = () => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-expect-error
      validateArray(data, 2);
    };
    expect(fn).toThrow('Field must be a string');
  });

  it('Should throw validation error when field does not exist ', () => {
    const data = [{ name: 'an', age: 2 }];

    const fn = () => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-expect-error
      validateArray(data, 'lastname');
    };
    expect(fn).toThrow(
      'Field "lastname" does not exist in all objects of the array.',
    );
  });

  it('Should return a copy of the object array ', () => {
    const data = [{ name: 'an', age: 2 }];
    const result = validateArray(data, 'name');
    expect(result).toEqual(data);
  });
});
