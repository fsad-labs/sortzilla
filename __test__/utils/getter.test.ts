import { describe, expect, it } from 'vitest';
import {
  getFieldValueByIndex,
  getFieldValue,
  getCurrentValue,
} from '../../src/utils/getter';

describe('Orderby Test', () => {
  const objectArray = [
    { name: 'banana', value: 5 },
    { name: 'apple', value: 3 },
    { name: 'cherry', value: 8 },
    { name: 'date', value: 4 },
  ];

  it('Should get field value by index', () => {
    const fieldName = getFieldValueByIndex(objectArray, 0, 'name');
    expect(fieldName).toEqual('banana');

    const fieldValue = getFieldValueByIndex(objectArray, 3, 'value');
    expect(fieldValue).toEqual(4);
  });

  it('Should get field value', () => {
    const fieldName = getFieldValue(objectArray[0], 'name');
    expect(fieldName).toEqual('banana');

    const fieldValue = getFieldValue(objectArray[3], 'value');
    expect(fieldValue).toEqual(4);
  });

  it('Should get field current value from object ', () => {
    const fieldName = getCurrentValue(objectArray[0], 'name');
    expect(fieldName).toEqual('banana');
    const fieldValue = getCurrentValue(objectArray[3], 'value');
    expect(fieldValue).toEqual(4);
  });

  it('Should get field current value from string or number ', () => {
    const fieldName = getCurrentValue('valor1');
    expect(fieldName).toEqual('valor1');

    const fieldValue = getCurrentValue(4);
    expect(fieldValue).toEqual(4);
  });
});
